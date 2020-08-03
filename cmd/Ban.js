module.exports.run = async (client,M,args) => {
  if (!M.channel.guild) return M.reply('**This command only for servers ❌**');         
  if(!M.guild.member(M.author).hasPermission("BAN_MEMBERS")) return M.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!M.guild.member(client.user).hasPermission("BAN_MEMBERS")) return M.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = M.mentions.users.first();
  if (M.mentions.users.size < 1) return M.reply("**منشن شخص**");
  if (!M.guild.member(user)
  .bannable) return M.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد اعطائه كيك**");
  M.guild.member(user).ban(7, user);
M.channel.send(`**:white_check_mark: ${user.tag} ban from the server ! <a:Pban:5510005423490999009> **  `)
}
module.exports.help = {
    name: "ban"
}
