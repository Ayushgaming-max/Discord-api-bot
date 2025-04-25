const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const TOKEN = 'YOUR_BOT_TOKEN';
const CHANNEL_ID = 'YOUR_CHANNEL_ID';

client.once('ready', async () => {
  console.log(`Bot logged in as ${client.user.tag}`);

  // Save the channel globally so API can use it
  global.botChannel = await client.channels.fetch(CHANNEL_ID);
});

client.login(TOKEN);
