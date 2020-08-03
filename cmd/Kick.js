module.exports.run = async (client,M,args) => {
  if (!M.channel.guild) return M.reply('**This command only for servers ❌**');         
  if(!M.guild.member(M.author).hasPermission("KICK_MEMBERS")) return M.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!M.guild.member(client.user).hasPermission("KICK_MEMBERS")) return M.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = M.mentions.users.first();
  if (M.mentions.users.size < 1) return M.reply("**منشن شخص**");
  if (!M.guild.member(user)
  .bannable) return M.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد اعطائه كيك**");
  M.guild.member(user).kick(7, user);
M.channel.send(`**:white_check_mark: ${user.tag} kick from the server ! :airplane: **  `)
}
module.exports.help = {
    name: "kick"
}
