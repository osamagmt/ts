const Discord = require("discord.js");
module.exports.run = async (client,M,args) => {
    if (M.member.hasPermission('MANAGE_MESSAGES')){
  let subtext = M.content.split(/\s+/g).slice(1).join(" ");
    let role = M.mentions.roles.first();
	if (role) {
		var RichEmbed = new Discord.RichEmbed()
		.setTitle(`Info Role : ${role.name}`)
		.setThumbnail(M.guild.iconURL)
		.setTimestamp()
		.setColor(`${role.hexColor}`)
		.setFooter(`Requested by: ${M.member.displayName}`, `${M.author.avatarURL}`)
		.addField(`**لون الرتبه:**`, `${role.hexColor}`)
		.addField(`**ايدي الرتبه:**`, `${role.id}`)
		.addField(`**ترتيب الرتبه:**`, `${role.position}`)
		.addField(`**اعضاء الرتبة :**`, `${role.members.map(m => m.displayName).join(` ,\n`)}`, true)
		.addField(`**تاريخ انشاء الرتبه:**`, `${role.createdAt}`)
		M.channel.send({embed: RichEmbed});
	}
	if (!role) {
		M.channel.send(`either that wasn't a role in this server, or the name is incorrect`);
	}
}
}
module.exports.help = {
    name: "rolei"
}
