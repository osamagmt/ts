const Discord = require('discord.js');
module.exports.run = async (client,M,args) => {
        if (!M.channel.guild) return M.reply('**This command only for servers ❌**');
          if(!M.guild.member(M.author).hasPermission("ADMINISTRATOR")) return M.reply("**انت لا تملك الصلاحيات المطلوبه**");
        let guild = M.guild
        let members = guild.memberCount
        let bots = guild.members.filter(m => m.user.bot).size
        let humans = members - bots
        let voicechannels = guild.channels.filter(e => e.type === "voice")
        let textchannels = guild.channels.filter(e => e.type === "text")
         var embed = new  Discord.RichEmbed()
          .setColor("#000000")
          .setTitle(`**Server Info**`)
          .setDescription(`\`معلومات عن\` : ${guild.name}`)
          .addField("\`صاحب السيرفر\` :", `${guild.owner}`, true)
          .addField("\`يدي \` :", `${guild.id}`, true)
          .addField("\`موقع السيرفر\` :", `${guild.region}`, true)
          .addField("\`مستوى حماية السيرفر\` :", `${guild.verificationLevel}`, true)
          .addField("\`عدد الرومات الصوتية\` :", `${voicechannels.size}`, true)
          .addField("\`عدد الرومات الكتابية\` :", `${textchannels.size}`, true)
          .addField("\`عدد اعضاء السيرفر\` :", `${members}`, true)
          .addField("\`عدد البوتات\` :", `${bots}`, true)
          .addField("\`عدد الاشخاص\` :", `${humans}`, true)
          .addField("\`عدد رتب السيرفر\` :", `${guild.roles.size}`, true)
          .addField(`\`أيموجيات الخاصة بالسيرفر\` : (${guild.emojis.size})`, `- ${guild.emojis.array()}`, true)
          .setFooter(`\`تم انشاء هذه السيرفر في\`: ${guild.createdAt}`)
       M.channel.send({ embed: embed });

      }
module.exports.help = {
    name: "server"
}
