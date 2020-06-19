
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "+";
const fs = require("fs");

client.on("ready", () => {
  console.log("---------------------------------");
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

    client.user.setGame("TS System", `http://www.twitch.tv/osama_gmt`);

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




//process.env.BOT_TOKEN



client.login("NzIzNjc4MzU5MTY2NjQ4NDIy.Xu1KCg.tvQrwNcKnXu3tXu5RKz8FmJUvfw");
module.exports = client;
