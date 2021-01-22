module.exports = {
  name: 'cake',
  description:
    'The user can eat cake. This is a test command to see if the bot is online',
  execute(message, args) {
    message.channel.send('You ate some cake! 🍰');
  },
};
