// const dotenv = require('dotenv');
// dotenv.config();

// Discord
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '>';
client.commands = new Discord.Collection();

// FS and getting command files
const fs = require('fs');
const commandFiles = fs
  .readdirSync('./commands')
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

// Error handling
// The bot will DM you if theres an error. Don't do this if it's in many servers.
function catchErr(err, message) {
  client.users.fetch('Your ID').then((user) => {
    user.send(
      `There was an error in channel "${message.channel}" in guild "${message.guild}".`,
    ); // DM's you if there is an error. (You probably shouldn't do this if it'll be in a lot of servers.)
  });

  client.users.fetch('Your ID').then((user) => {
    user.send('ERROR: ```' + err + '```');
  });
}

client.once('ready', () => {
  console.log(`${client.user.tag} is online!`);
  client.user.setActivity('YouTube', { type: 'WATCHING' }); // Sets the bot's status to whatever you like.
});

client.on('message', (message) => {
  if (message.content.startsWith(prefix) || message.author.bot) {
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // Commands
    try {
      switch (command) {
        case 'cake':
          client.commands.get('cake').execute(message, args);
          break;
      }
    } catch (err) {
      catchErr(err, message);
    }
  }
});

client.login('Your token'); // Put your token in a string. You can also use a .env file and write process.env.TOKEN
