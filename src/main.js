const Rpc = require("discord-rpc");
const config = require("../config.json");
const browser = typeof window !== "undefined";
const chalk = require("chalk");
const client = new Rpc.Client({ transport: browser ? "websocket" : "ipc" });

client.on("ready", () => {

  client.setActivity({
    state: config.state ?? 'EXample State',
    details: config.details ?? 'EXample State',
    startTimestamp: Date.now(),
    largeImageKey: config.largeImage.key ?? 'large_image',
    largeImageText: config.largeImage.text ?? 'large_text',
    smallImageKey: config.smallImage.key ?? 'small_image',
    smallImageText: config.smallImage.text ?? 'small_text',
    buttons: [
      {
          label: config.button.button1.text,
          url: config.button.button1.url,
      },
      {
          label: config.button.button2.text,
          url: config.button.button2.url,
      }
    ],
    instance: true,
  });
});

if(!config.connection) throw new Error("the config method 'connection' is required");
if(!config.connection.clientId) throw new Error("the config method 'connection.clientId' is required");

console.clear();
client.login({ clientId: config.connection.clientId }).then(() => {
   console.log(`client is connected as user: `+chalk.underline.green(`${client.user.username}#${client.user.discriminator}`));
}).catch(err => {
  console.log(chalk.red('unable to connect to RPC'));
  console.log(chalk.gray(err));
})
