/*
HANDLES CONFIG FILE READING AND STUFF
*/

class GlobalChatIDHandler{
    constructor(path){
        this.path = path;
        let fs = require('fs')
        fs.readFile(path, (err, data) => {
            try {
                let json = JSON.parse(data)
                this.globalChatID = json["globalChatID"]
            } catch (error) {
                if(error){
                    // If any errors, just rewrite normal config to path
                    this.reblank()
                    this.warnEmpty()
                }
            }
        })

        if(this.globalChatID == null) this.warnEmpty()
    }

    write(input_globalChatID){
        let writeData = {
            "globalChatID": input_globalChatID
        }

        fs.writeFile(path, JSON.stringify(writeData), (error) => {if(error) console.log(err0r)})
    }

    reblank(){
        let blank = {
            "globalChatID": null
        }

        let fs = require('fs')
        fs.writeFile(this.path, JSON.stringify(blank), (err) => {if(err) console.log(err)})
    }

    warnEmpty(){
        console.log("[WARN] Re-config the bot by entering '/reconfig' into the Telegram group chat!")
    }
}

// module.exports = ConfigHandler