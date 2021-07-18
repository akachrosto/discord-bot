module.exports = (client, message, args) => {
    let Discord = require("discord.js");
    // Ping
    let ping = Math.floor(message.client.ws.ping);
    // Color del Embed

    // Embed
    let embed = new Discord.MessageEmbed()
        .setColor(client.config.embedcolor)
        .setDescription(`**${ping}ms**`)
        .setFooter(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
        .setTimestamp();
    
    message.channel.send({embed: embed});
}