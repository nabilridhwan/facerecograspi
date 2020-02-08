# facerecograspi
The project uses Node.JS for the middleware server. When the face recognition detects an unknown face, it will send a GET request to the server endpoint that is coded using Node JS using the Express framework.

Information is accurate as of February 8, 2020.

## Before proceeding
-   Please setup your telegram bot! Make sure that you set the bot's privacy to `disabled` using `@botfather`.

## Running and Installing Dependencies
1.  Make sure that all dependencies are installed (both from the root folder and `svr` folder) (run `npm install` from the `svr` folder)
1.  Rename the `.envdemo` at `./svr` to `.env`
2.  Replace `<TOKEN>` in `.envdemo` with your bot's token!
3.  Run the server by running `node ./svr/server.js`
4.  Change the `HOST` variable in `pi_face_recognition.py (line 15)` from the root folder to the output given in step 4.
    ```
    // OUTPUT
    > Running on http://192.168.0.152:3000
    ```
    -   The `HOST` variable should look something like `HOST=http://192.168.0.152:3000`
5.  Test that the server is working by going to web server's address above. You should get a response like: `Server is running!`
6.  After running the webserver and everything is fine, run the face recognition Python file by running `python3 pi_face_recognition.py --cascade haarcascade_frontalface_default.xml --encodings encodings.pickle`

## Setting up the bot
1.  Create a new group and add the Bot! The Bot can only be used in one group at a time!
2.  Type in `/start` in the group and the bot should respond with `[INFO] Setting global chat ID`
3.  Done! The bot should respond to messages.

## Bot Commands
-   `/start`
    -   Set-up the bot. REQUIRED if bot is added to a new group!
-   `/message <message_here>`
    -   Displays `<message_here>` on the LCD. (16 X 2)
-   `/clear`
    -   Clears any message from the LCD. (16 X 2)