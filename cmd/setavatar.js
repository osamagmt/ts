const Discord = require("discord.js");
const VIP = ["460976885036220426","563646438408716298","",process.env.BOT_ID];

module.exports.run = async (client,message,args) => {
  if (!VIP.includes(message.author.id)) return;
  client.user.setAvatar(args);
    message.channel.sendMessage(`**${args}** : تم تغير صورة البوت`);
        } 
module.exports.help = {
    name: "setavatar"
}
