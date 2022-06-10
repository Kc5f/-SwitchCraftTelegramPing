const WebSocket = require('ws');
const axios = require('axios');
const config = require('./config.js');

const ws = new WebSocket(`wss://chat.switchcraft.pw/${config.chatboxtoken}`);

ws.on('message', async (data) => {
    data = JSON.parse(data.toString());
    
    if (data.type == 'hello') {
        console.log('Listening for messages!');
    };

    if (data.type == 'message' && data.text.toLowerCase().includes(config.myname)) {
        let channelType;
        let username;
        if (data.discordUser) {
            channelType = 'Discord';
            username = `${data.discordUser.name}#${data.discordUser.discriminator}`;
        } else if (data.user) {
            channelType = 'In-game';
            username = data.user.name;
        };
        const message = encodeURIComponent(`Mention from \`${channelType}\`/\`${username}\`:\n\`${data.text}\``);
        axios.post(`https://api.telegram.org/bot${config.telegramtoken}/sendMessage?chat_id=${config.telegramid}&text=${message}&parse_mode=MarkdownV2`).catch((err) => {
            console.log(err);
        });
    };
});