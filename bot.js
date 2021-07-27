const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix } = require('./config.json');
const activities = require('./jsons/activity');

var x = [
    1,
    2,
    3,
    4,
    5,
]

var output = x[Math.floor(Math.random()*x.length)];

var pees = [
    "pees and cries",
	"pees cutely",
	"pees on the floor",
	"pees on the carpet cutely",
	"pees",
	"cries then pees cutely",
	"pees then fucking dies",
	"falls and pees",
	"breaks leg then pees",
	"pees in pants cutely",
	"yells then pees",
	"pee",
	"pees on the wall",
	"giggles then pees",
	];

client.on("ready", () => {
  console.log("pees");
  
const activity = activities[Math.floor(Math.random() * activities.length)];
client.user.setPresence({ activity: { name: activity.text, type: activity.type }, status: 'idle' })
	   .then(console.log)
  .catch(console.error);
  
});
client.on("message", (message) => {
	
if (message.content.startsWith("real")) {
         	message.reply("real");
}

});
client.on("message", (message) => {
  
  if (!message.content.startsWith(prefix)) return;
  
  
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong");
  } else
    if (message.content.startsWith(prefix + "pee")) {
        message.channel.send(pees[Math.floor(Math.random()*pees.length)])
    } else
	    if (message.content.startsWith(prefix+"real")) {
		    message.channel.send("real");
	    } else
		    if (message.content.startsWith(prefix+"kiss")) {
			let huggeduser = message.mentions.users.first();
		if(message.mentions.users.size < 1) return message.reply("you forgot to mention someone to kiss idiot");
			    var embed = new Discord.MessageEmbed()
			    .setColor(0x330066)
			    .setTitle("Kiss Kiss")
			    .setDescription(`${message.author.nickname} has kissed ${message.mentions.users.first().nickname}`)
			    message.channel.send({embed})
	    } else
		    if (message.content.startsWith(prefix+"help")) {
			    var embed = new Discord.MessageEmbed()
			    .setColor(0x330066)
			    .setTitle("My Commands")
			    .setDescription("pees")
			    .addField('Commands','`$real`, `$help`, `$pee`, `serverinfo`, `userinfo`')
			    .setFooter('Bot coded and created by SpaceCaramel#6433.')
			    message.channel.send({embed})
    } else
      if (message.content.startsWith(prefix+"serverinfo")) {
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
      } else
	      if (message.content.startsWith(prefix+"userinfo")) {
		       let user = message.mentions.users.first() || message.author;
		      const member = message.guild.member(user);
				  var embed = new Discord.MessageEmbed()
				  .setColor(0x330066)
				  .setDescription(`${user}`)
				  .setAuthor(`${user.username}#${user.discriminator}`, user.displayAvatarURL())
				  .addField("ID", `${user.id}`)
				  .addField("Status", `${user.presence.status}`)
				  .addField("In Server", `${message.guild.name}`)
				  .addField("Joined Discord", `${user.createdAt.toDateString()}`)
				  .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
				  message.channel.send({embed})
  }
});

client.login(process.env.BOT_TOKEN);
