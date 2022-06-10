# SwitchCraft Telegram Ping
An easy dockerized way to get notified when people mention you.

## Running in a docker container
**Step 1:** Clone this repo
```
git clone https://git.meltdownpowered.com/Kc5f/SwitchCraftTelegramPing.git
cd SwitchCraftTelegramPing
```
**Step 2:** Edit the config
1. Create a new file named `config.js`
2. Add your SwitchCraft Chatbox token, your in-game name, your Telegram ID, and your Telegram token using this template:
```js
module.exports = {
	chatboxtoken: '<chatbox token>', // Get using /chatbox on SwitchCraft
	myname: 'kc5f', // MUST BE LOWERCASE!!!!!!
	telegramtoken:  '<telegram token>', // Create a new Telegram bot using @BotFather to get this
	telegramid:  '2009122491', // Your user's ID on Telegram
};
```

**Step 3:** Build and run the docker container
```
docker build --tag scmention .
docker run -d scmention
```

**Your done!**

## Running using NodeJS
**Step 1:** Edit the config
1. Create a new file named `config.js`
2. Add your SwitchCraft Chatbox token, your in-game name, your Telegram ID, and your Telegram token using this template:
```js
module.exports = {
	chatboxtoken: '<chatbox token>', // Get using /chatbox on SwitchCraft
	myname: 'kc5f', // MUST BE LOWERCASE!!!!!!
	telegramtoken:  '<telegram token>', // Create a new Telegram bot using @BotFather to get this
	telegramid:  '2009122491', // Your user's ID on Telegram
};
```

**Step 2:** Run the program
```
node .
```

**Your done!**
