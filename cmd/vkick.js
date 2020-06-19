const prefix = "+";


module.exports.run = async (client,M,args) => {
  if(M.member.hasPermission("ADMINISTRATOR")) {
  let user = M.mentions.users.first();
        if (!user) {
            return M.channel.sendMessage(`${prefix}vkick @mention`)
        }
        let kickMention = M.guild.members.get(user.id);
        if (kickMention) {
            if (!kickMention.voiceChannel) {
                 M.channel.sendMessage(`**${user.username}** لا يوجد برومات الصوتية 🤨`);
            } else {
                M.guild.createChannel(`kick`, `voice`)
                    .then(channel => {
                        setTimeout(() => {
                            kickMention.setVoiceChannel(channel);
                        }, 1000)
                        setTimeout(() => {
                            M.channel.sendMessage(`من روم صوتي **${user.usernamE}** ثم طرد`);
                            channel.delete()
                        }, 1500)
                    })
                    .catch((error) => {
                       M.channel.sendMessage(`من روم صوتي **${user.username}** لا استطيع طرد`);
                    })
            }
        }
    }else{
      M.delete(2000)
      M.channel.send(`⚠ ليس لديك صلاحيات لطرد العضو`).then(m => m.delete(5000))
    }
 }
module.exports.help = {
    name: "vkick"
}