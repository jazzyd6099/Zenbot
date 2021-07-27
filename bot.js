const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$";
const activities = require('./jsons/activity');

//embedColors

const embedRed = 0xff0000
const embedOrange = 0xff790c
const embedYellow = 0xffff00
const embedGreen = 0x00ff00
const embedBlue = 0x0064ff
const embedPurple = 0x6a00b0
const embedMagenta = 0x9600ff
const embedPink = 0xff00ff
const embedBlack = 0x000000
const embedWhite = 0xffffff
const embedGray = 0x777777

var x = [
    1,
    2,
    3,
    4,
    5,
]

var output = x[Math.floor(Math.random()*x.length)];

client.on("ready", () => {
  console.log("pees");
  
const activity = activities[Math.floor(Math.random() * activities.length)];
client.user.setPresence({ activity: { name: activity.text, type: activity.type }, status: 'idle' })
	   .then(console.log)
  .catch(console.error);
  
});

client.on("message", (message) => {
  
  if (!message.content.startsWith(prefix)) return;
  
  
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong");
  } else
    if (message.content.startsWith(prefix + "pee")) {
        message.channel.send("pee");
    } else
      if (message.content.startsWith(prefix+"server")) {
           var embed = new Discord.MessageEmbed()
	      .setColor(0x330066)
	      .setTitle("Server Information")
	      .setDescription(`${message.guild}'s information`)
	      .setThumbnail(message.guild.iconURL())
	      .addField("Server ID", message.guild.id)
	      .addField("Owner", message.guild.owner)
	      .addField("Member Count", `This server has ${message.guild.memberCount} members.`)
	      .addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles.`)
	      .addField("Emojis Count", `This Server has ${message.guild.emojis.cache.size} emojis.`)
  	      .addField("You Joined At", `${message.member.joinedAt.toDateString()}`)
  	      .setFooter(`Server created at ${message.guild.createdAt.toDateString()}`);
				 message.channel.send({embed})
  }
});

client.login(process.env.BOT_TOKEN);
