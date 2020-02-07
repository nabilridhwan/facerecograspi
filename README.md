# facerecograspi
The project uses Node.JS for the middleware server. When the face recognition detects an unknown face, it will send a GET request to the server endpoint.

Information is accurate as of February 7, 2020.

## Before proceeding
-   Please setup your telegram bot! Make sure that you set the bot's privacy to disabled using `@botfather`.
-   Get your API key or Token key and head over to `./svr/server.js`
    -   Change the value of the `token` variable (on line 11) to your token enclosed in `""`. The line should look like: `let token = "token_here"`
-   Get your Group Chat ID so that the Bot can respond to your messages and execute commands by following the instructions below:
    1.  Post one message from User to the Bot.
    2.  Open https://api.telegram.org/bot<Bot_token_from_the_step-above>/getUpdates page.
    3.  Copy the `chatId` and set it as the `chatId` variable value on `line 12`.

## Setup on Local network
1.  Make sure that all dependencies are installed (both Python and Javascript). For Javascript dependencies, head into `./svr` and run `npm install`. Make sure you got Python installed as the library `lcdi2c` needs it!
2.  Run the server by running `node ./svr/server.js`
3.  Edit `pi_face_recognition.py (line 15)` to change the `HOST` variable to the output given in step 2.
    ```
    // OUTPUT
    > Running on 192.168.0.152:3000
    ```
    -   Copy the `192.168.0.152:3000` part, append `http://` on the front and set it to the value of the `HOST` variable. So it should look something like:
        ```python
        HOST="http://192.168.0.152:3000"
        ```
4.  Test that the server is working by going to web server's address above. You should get a response like: `Server is running!`
5.  After running the webserver and everything is fine, run the face recognition Python file by running `python3 pi_face_recognition.py --cascade haarcascade_frontalface_default.xml --encodings encodings.pickle`
6.  Everything should work!