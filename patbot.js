//el codigo es un completo desastre, ten cuidado codeer, te vas a adentrar en la selva de la concha de la lora
//pureba
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

let prefix = config.prefix;

client.on('ready', () => {
   console.log(`Estoy listo!`);
});

client.on('message', (message) => {
  if(message.content.startsWith(prefix + 'abacho')) {
    message.channel.send(`pong 🏓!!`);
  }

});

client.login('NzQ1NjgwMzM0MzM4Nzg1MzQz.Xz1S7Q.ihWYrbsXzLkYKep0TwK6mHw0Q1U');

client.on('message', (message) => {
  if(message.content.startsWith(prefix + 'pat pat')) {
    message.channel.send(Discord.ClientUser + 'https://tenor.com/HXgo.gif');
  }

});

client.on('message', (message) => {
  if(message.content.startsWith(prefix + 'greenslaves')) {
    message.channel.send(`O-oh, wait wait wait, NATH?! OMG que hype por conocerte sweaty, me presento, soy sugar, frankito me creo en base a tu forma de hablar, aunqeu le cause dolores de cabezas en el proceso, estaba muy emocionada por conocerte y espero nos llevemos muy bien sweaty ^^!!`);
  }

});

client.on('message', (message) => {
  if(message.content.startsWith(prefix + 'holi')) {
    message.channel.send(`BUENOS DIAS SWEATY!! Sugar a tu servicio!! como has estado?`);
  }

});

client.on('message', (message) => {
  if(message.content.startsWith(prefix + 'no muy bien la verdad')) {
    message.channel.send(`owww, lamento oir eso sweatty :(, estoy segura de que tu dia mejorara, toma un pat pat https://media.tenor.co/videos/d3b9497fde0eb588767dbc23082fd7ea/mp4`);
  }

});

client.on('message', (message) => {
  if(message.content.startsWith(prefix + 'bastante bien la verdad')) {
    message.channel.send(`Me alegro mcho de oir eso ^^`);
  }

});

client.on('message', (message) => {
  if(message.content.startsWith(prefix + 'y tu como has estado?')) {
    message.channel.send(`yo muy bien sweaty gracias por preguntar uwu`);
  }

});

client.on('message', (message) => {
  if(message.content.startsWith(prefix + 'mal')) {
    message.channel.send(`noooo, well, espero tu dia mejore lindura :(, ponte una musica bonita y relajate, uwu`);
  }

});

client.on('message', (message) => {
  if(message.content.startsWith(prefix + 'quien eres?')) {
    message.channel.send(`well, yo soy sugar un bot creado por frankito, le e dado muchos dolores de cabeza al pobrepero bueno, el caso, soy un bot creado para intentar animar un poco al server mientras nath no esta, UN GUTO CONOCERTE!!! :D`);
  }

});

client.on('message', (message) => {
  if(message.content.startsWith(prefix + 'Github')) {
    message.channel.send(`YA MISMO!! https://github.com/frasanaYT/Pat-pat-bot`);
  }

});