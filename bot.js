const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$";

client.on("ready", () => {
  console.log("pees");
  
  client.user.setActivity("Thinking about Lux"); 
       client.user.setPresence({ activity: { name: 'Thinking about Lux' }, status: 'idle' })
  .then(console.log)
  .catch(console.error);
  
});

client.on("message", (message) => {
  
  if (!message.content.startsWith(prefix)) return;
  
  
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong");
  } else
    if (message.content.startsWith(prefix + "pees")) {
        message.channel.send("pee");
  }
});

client.login(process.env.BOT_TOKEN);
