const { Client, Intents, Message } = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('./config.json')
const prefix = config.prefix

client.on('messageCreate', async message=> {
    if(!message.content.startsWith(prefix) || message.author.bot) return

    const message_string = message.toString()
    const command = message_string.replace('!', '')

    if(command === 'ping'){
        temporary_message = await message.channel.send('O ping do bot é de 000 ms!')
        temporary_message.edit(`O ping do bot é de ${temporary_message.createdTimestamp - message.createdTimestamp} ms!`)
    }
})

client.once('ready', () => {
    console.log(`> Starting bot dependencies\n> Id: ${client.user.id}\n> Logged in as ${client.user.tag}`)
})

client.login(config.token)