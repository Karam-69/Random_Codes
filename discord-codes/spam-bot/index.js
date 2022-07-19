const Discord = require('discord.js-selfbot-v11');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const child_process = require("child_process");
const prefix = "#";
const config = require("./config.json")

// ======= [ functions  ] ======== //
  async function AutoJoin(invitecode) {
request({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { "authorization": message.client.token }})}

  async function joinServer(invite, message) {

request({ method: "POST", url: `https://discordapp.com/api/v6/invite/${invite}`, headers: { "authorization": message.client.token} 
},
async (err, res, body) => {
if (err) {
await console.log(`[ERROR] - ${err}`);
return;
} else {
console.log(body);
if (body.includes("Unknown Invite")) return console.log("[ERROR] - Unkown Invite.");
if (body.includes("banned")) return  message.channel.send("[ERROR] - Banned from this server.");
await console.log(`[INFO] - Done.`);
await message.author.send('Done Joined this server');
        }
        }
                )

  }
  
 
async function addFriend(id, message) {
try {
  let user = await message.client.fetchUser(id);
  await (require("request"))(
  {
    url: `https://discordapp.com/api/v6/users/@me/relationships`,
    method: "POST",
    json: true,
    headers: {
      "Content-Type": "application/json",
      "authorization": message.client.token
    }, 
    body: {
      "username": user.username,
      "discriminator": parseInt(user.discriminator)
    }
  }, async (err, res, body) => {
      if (err) {
        await console.log(err);
        await console.log(`[ERROR] - ${err}`);
        return;
      } else {
        await console.log(body? body.message : "No status message.");
        await console.log(`[INFO] - Done.`);
        await message.author.send('Done Send to this user Friend');

      }
  })
} catch(e) {
  console.log(`[ERROR] - ${e}`)
}
};


// ======= [ Functions - END  ] ======== //

// ======= [ Console LOG    ] ======== //

client.on('ready', () => {
  console.log(`Account 1 , working`);
  console.log(`Hi ${client.user.tag} , Code by : Mox `);
  console.log(`i Have  [ " ${client.guilds.size} " ]`);
});

const invitecode = config.invitecode;
const request = require("request");
client.on("ready", () => { console.log(`[BOT] ${client.user.username} Ready!`); 
setTimeout(async function (){
AutoJoin(invitecode)
}, 1000)
})
// ======= [ Console LOG - END   ] ======== //








client.on('message', message => {
if (!config.owner.includes(message.author.id)) return; 
    if(message.content === prefix +'work'){
		setTimeout(async function (){
        message.channel.send(` ✅  , Account 1  `)
}, 1000
)
  }});
       client.on('message', message => {

  if(message.content.startsWith(prefix +"join")) {
    let invite = message.content.split(" ").slice(1)[0];
    joinServer(invite, message);
  }
       })
client.on('message', message => {

if(message.content.startsWith(prefix + "Friend")) {
    var id = message.content.split(' ').slice(1)[0];
    let user = message.mentions.users.first();
    if (isNaN(id)) id = message.member.id;
    if (isNaN(id) && message.mentions.users.first()) id = user.id;
    addFriend(id, message);
  }
})
client.on('message', message => {
if (message.author.bot) return;
if (!config.owner.includes(message.author.id)) return; 
let command = message.content.split(" ")[0];
command = command.slice(config.prefix.length);
let args = message.content.split(" ").slice(1);
if (command == config.group +"1") {
message.channel.send(args.join("  "))
message.delete();
}
});

client.on('message', message => {
  
  if (message.content === prefix + "spam on") {
    if (!config.owner.includes(message.author.id)) return;

    message.channel.send(`**⚠️ | SPAM ON , <@${config.owner}>**`);

    child_process.fork(__dirname + "/spam.js");
    
    console.log("[SPAM-SYSTEM] - Working . . .");
  }

});
