const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
const prefix = "-"
const system =  {
    "server": "server-id",
  "channel": "channel-id",
  "message": "message-id",
  "roles": "role-id", 
  "emoji": "emoji-id"
};
 
client.on('ready', () => {
  console.log('I\'m online')
})

client.on('messageReactionAdd', async (reaction, user ,message) => {
const myGuild = client.guilds.cache.get(`${system.server}`);
let role = myGuild.roles.cache.find(role => role.id == `${system.roles}`);
let emoji = myGuild.emojis.cache.find(emoji => emoji.name === `${system.emoji}`) 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
if (reaction.message.channel.id == `${system.channel}`) {
 if(reaction.message.id == `${system.message}` && reaction.emoji.name === `${system.emoji}`) {
await reaction.message.guild.members.cache.get(user.id).roles.add(role);
                }
            } else {
                return;
            }
 
        });


client.on('messageReactionRemove', async (reaction, user ,message) => {
const myGuild = client.guilds.cache.get(`${system.server}`);
let emoji = myGuild.emojis.cache.find(emoji => emoji.name === `${system.emoji}`) 
let role = myGuild.roles.cache.find(role => role.id == `${system.roles}`);

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
if (reaction.message.channel.id == `${system.channel}`) {
 if(reaction.message.id == `${system.message}` && reaction.emoji.name === `${system.emoji}`) {
await reaction.message.guild.members.cache.get(user.id).roles.remove(role);
                }
            } else {
                return;
            }
 
        });

        client.on('message', async message => { 
          if(message.content.startsWith(prefix+"rm")) {
const myGuild = client.guilds.cache.get(`${system.server}`);

let emoji = myGuild.emojis.cache.find(emoji => emoji.name === `${system.emoji}`) 
            let em =  new Discord.MessageEmbed()
                .setColor('#e42643')
            .setTitle('تحقق')
            .setDescription(` اضغط رياكشن يا جميل `);
 message.channel.send(em).then(embedMessage => {
    embedMessage.react(emoji);
});
          }
        })
client.login('token');
