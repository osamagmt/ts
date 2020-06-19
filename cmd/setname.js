const Discord = require("discord.js");
const VIP = ["460976885036220426","410421617869455370","474200581163057153",process.env.BOT_ID];

module.exports.run = async (client,message,args) => {
let name = message.content.split(" ").slice(1).join(" ");
if (!VIP.includes(message.author.id)) return;

	  message.guild.me.client.user.setUsername(name);
	message.channel.send(`you set my new name to ${name}`);  
	console.log(`${message.author.username} set my new name to ${name}`);
}

module.exports.help = {
    name: "setname"
}