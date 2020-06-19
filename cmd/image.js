const Discord = require('discord.js');
module.exports.run = async (client,M,args) => {
      if (!M.channel.guild) return M.reply('**This command only for servers ❌**');
      const embed = new Discord.RichEmbed()
    .setImage(M.guild.iconURL)
    .setURL(M.guild.iconrURL)
    .setColor("RANDOM");
            M.channel.send({embed});
 }
module.exports.help = {
    name: "image"
}