const Discord = require('discord.js');
const fs = require('fs');
let points = JSON.parse(fs.readFileSync('./points.json' , 'utf8'));
const prefix = "+";


module.exports.run = async (client,M,args) => {
	if(M.channel.type !== 'text') return;
	var command = M.content.toLowerCase().split(" ")[0];
	var args = M.content.toLowerCase().split(" ");
	var userM = M.guild.member(M.mentions.users.first() || M.guild.members.find(m => m.id == args[1]));
	 const embed  = new Discord.RichEmbed()
.setDescription(`
**لم يتم تسجيل أي نقطة حتى الأن **
** أمثلة للأوامر: **
**:small_orange_diamond:** ${prefix}points ${M.author} 1 \`لتغيير نقاط شخص معين \`
**:small_orange_diamond:** ${prefix}points ${M.author} +1 \`لزيادة نقاط شخص معين\`
**:small_orange_diamond:** ${prefix}points ${M.author} -1 \`لأزالة نقطة من شخص معين \`
**:small_orange_diamond:** ${prefix}points ${M.author} 0 \`لتصفير نقاط شخص معين \`
**:small_orange_diamond:** ${prefix}points reset \`لتصفير جميع النقاط\``)
.setFooter('Requested by '+M.author.username, M.author.avatarURL)
.setColor(`#e60909`)
  const error  = new Discord.RichEmbed()
.setDescription(`
**:x: | يجب كتابة الأمر بشكل صحيح. **
** أمثلة للأوامر: **
**:small_orange_diamond:** ${prefix}points ${M.author} 1 \`لتغيير نقاط شخص معين \`
**:small_orange_diamond:** ${prefix}points ${M.author} +1 \`لزيادة نقاط شخص معين\`
**:small_orange_diamond:** ${prefix}points ${M.author} -1 \`لأزالة نقطة من شخص معين \`
**:small_orange_diamond:** ${prefix}points ${M.author} 0 \`لتصفير نقاط شخص معين \`
**:small_orange_diamond:** ${prefix}points reset \`لتصفير جميع النقاط\``)
.setFooter('Requested by '+M.author.username, M.author.avatarURL)
.setColor(`#e60909`)
		if(!M.guild.member(client.user).hasPermission('EMBED_LINKS')) return M.channel.send(':no_entry: | I dont have Embed Links permission.');
		if(!args[1]) {
			if(!points) return M.channel.send(embed);
			var members = Object.values(points);
			var memb = members.filter(m => m.points >= 1);
			if(memb.length == 0) return M.channel.send(embed);
			var x = 1;
			let pointsTop = new Discord.RichEmbed()
			.setAuthor('Points:')
			.setColor('#FBFBFB')
			.setDescription(memb.sort((second, first) => first.points > second.points).slice(0, 10).map(m => `**:small_blue_diamond:** <@${m.id}> \`${m.points}\``).join('\n'))
			.setFooter(`Requested by ${M.author.username}`, M.author.avatarURL);
			M.channel.send({
				embed: pointsTop
			});
		}else if(args[1] == 'reset') {
			let pointsReset = new Discord.RichEmbed()
			.setDescription('**:white_check_mark: | تم تصفير جميع النقاظ بنجاح**')
			.setFooter('Requested by '+M.author.username, M.author.avatarURL)
			if(!M.member.hasPermission('MANAGE_GUILD')) return M.channel.send("You dont have Manage Server permission.");
			if(!points) return M.channel.send(pointsReset);
			var members = Object.values(points);
			var memb = members.filter(m => m.points >= 1);
			if(memb.length == 0) return M.channel.send(pointsReset);
			points = {};
			M.channel.send(pointsReset);
		}else if(userM) {
			if(!M.member.hasPermission('MANAGE_GUILD')) return  M.channel.send("You dont have Manage Server permission.");
			if(!points[userM.user.id]) points[userM.user.id] = {
				points: 0,
				id: userM.user.id
			};
			if(!args[2]) {
				if(points[userM.user.id].points == 0) return M.channel.send( `${userM.user.username} Not have any points.`);
				var userPoints = new Discord.RichEmbed()
				.setColor('#d3c325')
				.setAuthor(`${userM.user.username} have ${points[userM.user.id].points} points.`);
				M.channel.send({
					embed: userPoints
				});
			}else if(args[2] == 'reset') {
				if(points[userM.user.id].points == 0) return M.channel.send(error);
				points[userM.user.id].points = 0;
				M.channel.send(`Successfully reset ${userM.user.username} points.`);
			}else if(args[2].startsWith('+')) {
				args[2] = args[2].slice(1);
				args[2] = parseInt(Math.floor(args[2]));
				if(points[userM.user.id].points == 1000000) return M.channel.send(error);
				if(!args[2]) return M.channel.send(error);
				if(isNaN(args[2])) return M.channel.send(error);
				if(args[2] > 1000000) return M.channel.send(error);
				if(args[2] < 1) return M.channel.send(error);
				if((points[userM.user.id].points + args[2]) > 1000000) args[2] = 1000000 - points[userM.user.id].points;
				points[userM.user.id].points += args[2];
				let add = new Discord.RichEmbed()
				.setDescription(`**:small_blue_diamond:** <@${userM.id}> \`${points[userM.user.id].points}\``)
				.setAuthor('Points:')
				.setColor('#FBFBFB')
				.setFooter('Requested by' + M.author.username, M.author.avatarURL)
				M.channel.send(add);
			}else if(args[2].startsWith('-')) {
				args[2] = args[2].slice(1);
				args[2] = parseInt(Math.floor(args[2]));
				if(points[userM.user.id].points == 0) return M.channel.send(error);
				if(!args[2]) return M.channel.send(error);
				if(isNaN(args[2])) return M.channel.send(error);
				if(args[2] > 1000000) return M.channel.send(error);
				if(args[2] < 1) return M.channel.send(error);
				if((points[userM.user.id].points - args[2]) < 0) args[2] = points[userM.user.id].points;
				points[userM.user.id].points -= args[2];
					let rem = new Discord.RichEmbed()
				.setDescription(`**:small_blue_diamond:** <@${userM.id}> \`${points[userM.user.id].points}\``)
				.setAuthor('Points:')
				.setColor('#FBFBFB')
				.setFooter('Requested by' + M.author.username, M.author.avatarURL)
				M.channel.send(rem);
			}else if(!args[2].startsWith('+') || !args[2].startsWith('-')) {
				args[2] = parseInt(Math.floor(args[2]));
				if(isNaN(args[2])) return M.channel.send(error);
				if(args[2] > 1000000) return M.channel.send(error);
				if(args[2] < 1) return M.channel.send(error);
				if(points[userM.user.id].points == args[2]) return M.channel.send(`${userM.user.username} points is already ${args[2]}.`);
				points[userM.user.id].points = args[2];
					let set = new Discord.RichEmbed()
				.setDescription(`**:small_blue_diamond:** <@${userM.id}> \`${points[userM.user.id].points}\``)
				.setAuthor('Points:')
				.setColor('#FBFBFB')
				.setFooter('Requested by' + M.author.username, M.author.avatarURL)
				M.channel.send(set);
			}
			}
			}
      fs.writeFile("./points.json", JSON.stringify(points) ,(err) =>{
          if (err) console.log(err.M);
      });
  
module.exports.help = {
    name: "points"
}