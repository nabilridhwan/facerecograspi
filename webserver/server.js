let express = require("express");
let app = express();
const TelegramBot = require('node-telegram-bot-api');
const LCD = require('lcdi2c');
const lcd = new LCD(1, 0x27, 16, 2);
const ip = require('ip');
require('dotenv').config();

const PORT = process.env.PORT || 3000
const IP_ADDR = ip.address();

const token = process.env.BOT_TOKEN;
let globalChatID;

// Created instance of TelegramBot
const bot = new TelegramBot(token, {
    polling: true
});

app.get("/", (request, response) => {
    response.status(200).send("Server is running!")
})

app.get("/recognize/:person", (request, response) => {
    let {
        person
    } = request.params;

    /*
    Recongnize person,
    Send a message on telegram.
    */
    response.status(200).send({"error": false, "chatId": globalChatID});

    person = person.toLowerCase()

	if(person == "unknown"){
        bot.sendMessage(globalChatID, `Unknown person recognized on ${new Date().toDateString()}. Use the /message command to display a message`)
        lcd.clear();
        lcd.print(`Access Denied!`);
	}else{
        lcd.clear();
        lcd.print(`Access Granted!`);
    }
})

app.listen(PORT, IP_ADDR, _ => console.log(`Running on http://${IP_ADDR}:${PORT}. Run '/configure' on the Telegram bot to get started. Set http://${IP_ADDR}:${PORT} as HOST's value on ../CONFIG.py`))

bot.onText(/\/configure/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    globalChatID = msg.chat.id;

    // send back the matched "whatever" to the chat
    bot.sendMessage(globalChatID, `[INFO] Configuring and starting up!`);
    console.log(`globalChatID: ${globalChatID}`)
});

bot.onText(/\/message (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    globalChatID = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(globalChatID, `Sending "${resp}" to LCD`);

    lcd.clear();
    
    if(resp.length >= 16){
        lcd.println(resp.substring(16), 2)
    }

    lcd.println(resp, 1);
});

bot.onText(/\/clear/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    globalChatID = msg.chat.id;

    // send back the matched "whatever" to the chat
    bot.sendMessage(globalChatID, `Clearing text from LCD!`);
	lcd.clear();
});