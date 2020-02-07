let express = require("express");
let app = express();
const TelegramBot = require('node-telegram-bot-api');
const LCD = require('lcdi2c');
const lcd = new LCD(1, 0x27, 16, 2);
const ip = require('ip');

const PORT = process.env.PORT || 3000
const IP_ADDR = ip.address();

const token = "1012969600:AAHbFDlDgw20LJwzYyQ7rnJGXl-ulIg_3BM";

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

   let chatId = "-397620800"

    response.status(200).send({"error": false, "chatId": chatId});
	if(person == "unknown"){
		bot.sendMessage(chatId, `Unknown person recognized on ${new Date().toDateString()}. Use the /message command to display a message`)
	}
                    
})

app.listen(PORT, IP_ADDR, _ => console.log(`Running on ${IP_ADDR}:${PORT}`))

bot.onText(/\/message (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, `Sending "${resp}" to LCD`);

	lcd.clear();
	lcd.print(resp);
});

bot.onText(/\/clear/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, `Clearing text from LCD!`);
	lcd.clear();
});
