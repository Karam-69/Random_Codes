const Discord = require('discord.js-selfbot-v11');
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.json");
const cmd = require("node-cmd");
const filename = "spam";
const stop_spam = config.time_stop * 1000 * 60 * 60;
const prefix = "#";

client.on('ready', async () => {
 fs.readFile(`./${filename}.txt`, function(err, data){
 if(err) throw err;
data = data + '';
var spam_words = data.split('\n');
  setInterval(() => {
 client.guilds.get(config.server).channels.get(config.channel).send(`${spam_words[Math.floor(Math.random() *spam_words.length)]}`);
 },config.time_spam *1000);
})
});

// ======= [ Refresh MODE] ======== //


client.on('ready', async () => {
  setInterval(() => {
client.guilds.get(config.server).channels.get(config.channel).send(`** تم أعادة تشغيل البوتات .. **`);
client.guilds.get(config.server).channels.get(config.channel).send(`<@${config.owner}>`);
cmd.run("refresh")
},stop_spam);
});

// ======= [ Refresh MODE end] ======== //

// ======= [ Spam MODE OFF ] ======== //
client.on('message', message => {
  if(message.content === prefix + "spam off") {

if (!config.owner.includes(message.author.id)) return;
message.channel.send(`**⚠️ SPAM OFF , <@${config.owner}>**`);
console.log(`⚠️ SPAM OFFING ..`);
client.destroy();
    }
    });
