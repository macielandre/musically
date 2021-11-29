const { Client, Intents, Message } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('./config.json')
const prefix = config.prefix

client.on('messageCreate', async message=> {
    if(!message.content.startsWith(prefix) || message.author.bot) return

    const message_string = message.toString()
    const command = message_string.replace('!', '')

    if(command === 'ping'){
        temporary_message = await message.channel.send('Bot ping is now 000 ms!')
        temporary_message.edit(`Bot ping is now ${temporary_message.createdTimestamp - message.createdTimestamp} ms!`)
    }
    
    else if(command === 'help')
        await message.channel.send('!help: Bot help\n!play: Play tracks or playlists\n!pause: Pause track\n!skip: Skip track\n!queue: Tracks queue\n!clear: Clear queue\n!voteskip: Vote to skip\n!ping: Bot ping\n!disconect: Disconect bot')
})

client.once('ready', () => {
    console.log(`[bot] starting bot dependencies\n[bot] id: ${client.user.id}\n[bot] logged in as ${client.user.tag}`)
})

client.login(config.token)