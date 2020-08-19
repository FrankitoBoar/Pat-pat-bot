const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

let prefix = config.prefix;

client.on('ready', () => {
   console.log(`Estoy listo!`);
});

client.on('message', (message) => {
  if(message.content.startsWith(prefix + 'pat pat {user}')) {
    message.channel.send(`pong 🏓!!`);
  }

});

client.login('NzQ1NjgwMzM0MzM4Nzg1MzQz.Xz1S7Q.ihWYrbsXzLkYKep0TwK6mHw0Q1U');
