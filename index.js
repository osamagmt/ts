const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "+";
const fs = require("fs");

client.on("ready", () => {
  console.log("--------------------------------");
  console.log(`  # Bot Name:  ||   ${client.user.tag}`);
  console.log("---------------------------------");
  console.log(`  # Prefix:    ||   ${prefix}`);
  console.log("---------------------------------");
  console.log(`  # Id:        ||   ${client.user.id}`);
  console.log("--------------------------------");
  console.log(`  # Servers:   ||   ${client.guilds.size}`);
  console.log("--------------------------------");
  console.log(`  # Members:   ||   ${client.users.size}`);
  console.log("---------------------------------");
  console.log(`  # Channels:  ||   ${client.channels.size}`);
  console.log("---------------------------------");
});

client.on("ready", function() {

    client.user.setGame("Core.", `http://www.twitch.tv/osama_gmt`);

});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

let init = async () => {
  const cmdFiles = await readdir("./cmd/");
  console.log(`Loading a total of ${cmdFiles.length} commands.`);
  cmdFiles.forEach(f => {
    console.log(`[COMMANDE] ${f} chargée!`);
    if (!f.endsWith(".js")) return;
    let props = require(`./cmd/${f}`);
    client.commands.set(props.help.name, props);
    client.aliases.set(props.help.alias, props);
  });
  console.log(`loaded ${client.aliases.size} aliases`);
};
init();

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  if (!message.content.startsWith(prefix)) return;
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if (commandfile) commandfile.run(client, message, args);
});


client.on('guildMemberAdd', member => {
let channel = member.guild.channels.get("736495323257765922");
if (member.user.bot) return;
var Canvas = require('canvas')
var jimp = require('jimp')
const w = ['./wel.png'];
             let Image = Canvas.Image,
                  canvas = new Canvas(557, 241),
                  ctx = canvas.getContext('2d');
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 557, 241);
      })
      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
      if (err) return console.log(err);
         ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
      if (err) return console.log(err);
            ctx.font = '25px Arial Bold';
            ctx.fontSize = '15px';
            ctx.fillStyle = "020202";
            ctx.fillText(member.user.username, 245, 138);
     //AVATARً
     let Avatar = Canvas.Image;
     let ava = new Avatar;
         ava.src = buf;
            ctx.beginPath();
            ctx.arc(120.8, 120.5, 112.3, 0, Math.PI*2, true);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(ava, 7, 8, 227, 225);
            ctx.closePath();
 channel.sendFile(canvas.toBuffer())
     /* setTimeout(async function(){
        channel.send(` \`Welcome To Ma Server \` ${member} `)
      }, 2000);*/
})})});

//process.env.BOT_TOKEN



client.login("NzM5OTU2NjU0ODc5MDE0OTUy.XyiAVg.FqKjxvOa1L7jPtqWYQ8KNmOQAFk");
module.exports = client;
