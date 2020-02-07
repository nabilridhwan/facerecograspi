let express = require("express");
let app = express();
let PORT = process.env.PORT || 3000
const TelegramBot = require('node-telegram-bot-api');
const LCD = require('lcdi2c');
const lcd = new LCD(1, 0x27, 16, 2);

const token = "1012969600:AAHbFDlDgw20LJwzYyQ7rnJGXl-ulIg_3BM";

// Created instance of TelegramBot
const bot = new TelegramBot(token, {
    polling: true
});

app.get("/", (request, response) => {
    response.status(404).send("Not Found")
})

app.get("/recognize/:person", (request, response) => {
    let {
        person
    } = request.params;

    /*
    TODO: Recongnize person,
    Send a message on telegram.
    */
    response.status(200).send("Recognized " + person.toLowerCase());
	if(person == "unknown"){
		bot.sendMessage("-397620800", `Unknown person recognized on ${new Date().toDateString()}. Use the /message command to display a message`)
	}
                    
})

// TODO: Complete post route!
// app.post("/send")

app.listen(PORT, "192.168.0.160", _ => console.log(`Listening on port ${PORT}`))

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
