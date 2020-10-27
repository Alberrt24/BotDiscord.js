const { Client, MessageEmbed } = require("discord.js");
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const cron = require('cron');
/*var nombres = require('./cumples.js');
var dias = require('./dias.js');*/
const welcome=require('./welcome');


client.on("ready", () => {
    console.log("Estoy listo!");
    welcome(client);
 });
 
 
 client.on("message", (message) => {
  if(message.content.startsWith("-yt")) {
    message.channel.send("Los directos en youtube son los martes y jueves 9:30pm!!! \n\n link: https://www.youtube.com/channel/UCOJMH2to2lRy8S8L1RMiKKA");
  }
 });

 let scheduledMessage = new cron.CronJob('00 23 23 * * *', () => {
  var f = new Date();
  var days= f.getDate() + "/" + (f.getMonth() +1);

  let channel = client.channels.cache.get("737065449929572452");
  if(days == "27/8"){
  channel.send('Feliz Cumpleaños usuario!<@'+280177283736535040+'>');
  }
  
});

scheduledMessage.start()

client.on("message", async message =>{
 if(message.author.bot || message.channel.type == "dm") return;

 if(message.content.startsWith("/holo"))
 {
   let embed = new MessageEmbed()
   .setTitle('react role')
   .setDescription('react for role')
   .setColor('GREEN')
   let msgEmbed = await message.channel.send(embed)
   msgEmbed.react('🐱')
 }

});

client.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();

  if (user.bot) return;
  if (!reaction.message.guild) return;

  if (reaction.message.channel.id === "737065449929572452")
  {
   if(reaction.emoji.name === '🐱')
   {
     await reaction.message.guild.members.cache.get(user.id).roles.add("746375089909399572")
   } 
  }
  
});

client.on('messageReactionRemove', async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();

  if (user.bot) return;
  if (!reaction.message.guild) return;

  if (reaction.message.channel.id === "737065449929572452")
  {
   if(reaction.emoji.name === '🐱')
   {
     await reaction.message.guild.members.cache.get(user.id).roles.remove("746375089909399572")
   } 
  }
});

client.login("NzQ1NDkyNzMyNjYzMDM3OTgz.XzykNg.ZGrqZWxYtnZSJ56FGUGRIZhf2ak");