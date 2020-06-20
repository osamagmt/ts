const Discord = require("discord.js");
module.exports.run = async (client,M,args) => {
    if (M.member.hasPermission('MANAGE_MESSAGES')){
  let subtext = M.content.split(/\s+/g).slice(1).join(" ");
    let role = M.mentions.roles.first();
    if (role) {

        M.channel.send(`Info Role : ${role.name}  \n **لون الرتبه:**${role.hexColor}  \n  **ايدي الرتبه:**${role.id}   \n **اعضاء الرتبة :**${role.members.map(m => m.user).join (` ,\n`)} \n **تاريخ انشاء الرتبه:**${role.createdAt}`);
    }
    if (!role) {
        M.channel.send(`either that wasn't a role in this server, or the name is incorrect`);
    }
}
}
module.exports.help = {
    name: "rolei"
}
