const Discord = require('discord.js');
module.exports.run = async (client,M,args) => {
                  message.channel.startTyping()
            setTimeout(() => {
            message.channel.stopTyping()
            },50000);
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setColor("black")
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("** › | server ID**",  message.guild.id,true )
.addField("** › | Created On**",  message.guild.createdAt.toLocaleString(),true )
.addField("** › | Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("** › | Members**",`[${message.guild.memberCount}]`,true)
.addField('** › | Channels**',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("** › | Others**" , message.guild.region,true)
.addField("** › | Roles**",`**[${message.guild.roles.size}]** Role `,true)
message.channel.sendEmbed(embed)

}

module.exports.help = {
    name: "server"
}
