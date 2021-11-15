**Simple Discord Rich Presence** 

this script shows presence on your discord profile, it is ideal for people who want to customize their profile or impress their friends

****

**important requirements**

install nodejs 16.13.0 or above

Debian or Ubuntu: install NVM(Node Version Manager) [here](https://github.com/nvm-sh/nvm)

Windows: install Nodejs [here](https://nodejs.org/en/) 

**(!)** install all dependencies using 
`npm install`

****
**Instructions**

> Create New App in [Discord Developers Aplication](https://discord.com/developers/applications)
![Create App](/img/create-app.png)

> Copy the client id in oauth2 tab
![Client ID](/img/Copy-ClientId.png)

> submit image for the largeImage and Small Image
![Submit image](/img/Submit-Image.png)
**(!)** wait a few minutes because it will take a while for discord to register the image you uploaded

> view the config.json and change the client id with you client id

****


you can change the texts and the image and you can also edit the buttons and their urls 

```json
{
    "state": "FabriSoftware",
    "details": "Using Nodejs Server",
    "largeImage": {
       "key": "arba",
       "text": "FabriSoftware in GitHub"
    },
    "smallImage": {
        "key": "github",
        "text": "github"
    },
    "button": {
        
        "button1":{
            "text": "Follow Me on GitHub",
            "url": "https://github.com/FabriSoftware"
        },

        "button2": {
            "text": "Join On MCBE Server",
            "url": "https://invite.gg/vitalhcf"
        }
    },

    "connection": {
        "clientId": "909759197560860697",
        "clientSecret": ""
    }
}
```

![Example Image](/img/Example.png)

****
**License**
the license is MIT

see the license [here](/LICENSE) for more information