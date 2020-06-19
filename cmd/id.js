const Discord = require('discord.js');
const moment = require('moment');
module.exports.run = async (client,M,args) => {
    if (M) {
    if (!M.channel.guild) return M.reply(`**This command only for servers ❌**`);
    let user = M.mentions.users.first() || M.author;
    var mn;
    var mentionned = M.mentions.members.first();
    if (mentionned) { mn = mentionned } else { mn = M.member}
    moment.locale('ar-TN');
    var id = new  Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail  (user.avatarURL)
    .addField(': دخولك لديسكورد ', `${moment(user.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(user.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': انضمامك لسيرفر ', `${moment(mn.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(mn.joinedAt).fromNow()}\``, true)               
    .setTimestamp()
    .setFooter(`${client.user.username}`);
     M.channel.sendEmbed(id);
}
     }
module.exports.help = {
    name: "id"
}

