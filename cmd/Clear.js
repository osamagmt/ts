module.exports.run = async (client,message,args) => {
if (message.author.bot) return;
if (message.content.startsWith(prefix + 'clear')) { 
    if(!message.channel.guild) return message.reply('⛔ | This Command For Servers Only!'); 
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('⛔ | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) return message.channel.send('⛔ | I dont have **MANAGE_MESSAGES** Permission!');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
      if (args > 49) return message.reply("**🛑 || The Number Must To Be Less Than 50.**").then(messages => messages.delete(5000))
    if(!messagecount) args = '50';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages))
   const embed = new Discord.RichEmbed()
      .setColor(embedSuccess)
      .setDescription(`Cleared \`\`${args}\`\` messages.`);
    message.channel.send(embed).then(messages => messages.delete(5000));
  }
})

module.exports.help = {
    name: "clear"
}
