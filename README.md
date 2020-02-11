# facerecograspi
The project uses Node.JS for the middleware server. When the face recognition detects an unknown face, it will send a GET request to the server endpoint that is coded using Node JS using the Express framework.

Information is accurate as of February 9, 2020.

## Pins (so you do not need to re-adjust the code)
-   LCD (i2c, 16 x 2)
    -   COMPONENT -> BREAKOUT BOARD
    -   GND -> GND
    -   VCC -> 5V
    -   SDA -> SDA1
    -   SCL -> SCL1
-   Servo Motor (Tower Pro MG90S)
    -   COMPONENT -> BREAKOUT BOARD
    -   BROWN -> GND
    -   RED -> 3.3V
    -   ORANGE/YELLOW -> GPIO24
-   Piezo Buzzer
    -   COMPONENT -> BREAKOUT BOARD
    -   POSITIVE -> GPIO4
    -   NEGATIVE -> GND

## Before proceeding
1.   Please setup your telegram bot!\
2.  Make sure that you set the bot's privacy to `disabled` using `@botfather`.
2.  Add your bot to a group chat!
3.  Make the bot as an administrator of the group!

## Process of running the project
1.  If you just cloned the repository, make sure that all dependencies are installed (both from the root folder and `webserver` folder) (run `npm install` from the `webserver` folder)
1.  Create a `.env` file at `./webserver` containing:
    -   `BOT_TOKEN=<your_bot's_token>`
3.  Run the server by running `node ./webserver/server.js`
4.  Change the `HOST` variable in `./CONFIG.py` to the output given in step 4.
    ```
    // OUTPUT
    > Set `http://192.168.0.152:3000` as the HOST variable in ../CONFIG.py
    ```
    -   The `CONFIG.py` file should look something like `HOST=http://192.168.0.152:3000`
5.  Test that the server is working by going to web server's address above. You should get a response like: `Server is running!`
6.  Type in `/configure` in the Telegram group chat, this is required everytime the webserver is setup.
6.  After running the webserver and everything is fine, run the face recognition Python file by running `python3 pi_face_recognition.py --cascade haarcascade_frontalface_default.xml --encodings encodings.pickle`

## Setting up the bot
1.  Create a new group and add the Bot! The Bot can only be used in one group at a time!
2.  Type in `/start` in the group and the bot should respond with `[INFO] Setting global chat ID`
3.  Done! The bot should respond to messages.

## Bot Commands
-   `/start`
    -   Set-up the bot. REQUIRED if bot is added to a new group and everytime the server is started (even though restarted!)!
-   `/message <message_here>`
    -   Displays `<message_here>` on the LCD. (16 X 2)
-   `/clear`
    -   Clears any message from the LCD. (16 X 2)