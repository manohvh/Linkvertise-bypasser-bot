const discord = require("discord.js")
const client = new discord.Client()
const settings = require("./settings.json")

client.on("ready", async => {
    console.log("Bot is online")
    client.user.setActivity(`Prefix is: ${settings.prefix}`, {type: "LISTENING"})
})

var embedcolor = "#036ffc" //set your embed color

client.on('message', async message => {
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0].replace(settings.prefix, "")
    let args = messageArray.slice(1)
    if(!message.content.startsWith(settings.prefix)) return

    if (cmd == "bypass") {
        var embed = new discord.MessageEmbed()
        .setTitle("Bypassed!")
        .setURL(`https://bypass.bot.nu/bypass2?url=${args.join(" ")}`)
        .setFooter(client.user.username)
        .setColor(embedcolor)
        message.channel.send(embed)
    }
    if (cmd == "clear") {
        message.channel.bulkDelete(100)
    }
    if (cmd == "help") {
        var embed = new discord.MessageEmbed()
        .setTitle("available commands")
        .setThumbnail("https://cdn.discordapp.com/attachments/878629220027351070/878647574368776192/download.jpg")
        .setDescription(`Prefix is: ${settings.prefix}`)
        .addField("bypass (link)", "Bypass linkvertise link")
        .setFooter(client.user.username)
        .setColor(embedcolor)
        message.channel.send(embed)
    }
})


client.login(settings.token)