# discord-bot-boilerplate
A simple and easy to use boilerplate to get you started with making your Discord bot quicker and not having you waste time on the setup!
# How to use
1) In your powershell clone this repository with `git clone https://github.com/anirudh242/discord-bot-boilerplate/`
2) Then use the command `npm install` to install everything needed
3) Edit the scripts as you like.
# How to make a command
1) Make a case like this in the commands switch statement:
```js
 case 'command':
          client.commands.get('command').execute(message, args);
          break;
```
2) Make a new file in `./commands`. For this example, we'll make `commands.js`.
3) Write this:
```js
module.exports = {
  name: 'command',
  description: 'description',
  execute(message, args) {
    message.channel.send('Hello!');
  },
};
```

# How to use environmental variables
1) Uncomment the first to lines of `index.ts`
2) Make a `.env` file
3) Write this:
```env
TOKEN='your token'
```
4) At the bottom of the file, in `client.login()`, instead replace your token with `process.env.TOKEN`
