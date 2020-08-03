const Discord = require('discord.js');
module.exports.run = async (client,M,args) => {
      if (!M.channel.guild) return M.reply('**This command only for servers ❌**');
      let user = M.mentions.users.first() || M.author;
      const embed = new Discord.RichEmbed()
            .setImage(user.displayAvatarURL)
             .setTitle('Click Here To Avatar Link')
            .setURL(user.displayAvatarURL)
            .setColor("RANDOM");
            M.channel.send({embed});
}
module.exports.help = {
    name: "avatar"
}
