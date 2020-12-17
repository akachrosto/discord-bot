module.exports = (client, message, args) => {
    let Discord = require("discord.js");
    // Ping
    let ping = Math.floor(message.client.ws.ping);
    // Color del Embed
    let gen = require('color-generator');
    let color = gen().hexString();

    // Embed
    let embed = new Discord.MessageEmbed()
        .setColor(`0x${color.slice(1)}`)
        .setDescription(`**${ping}ms** \`desde heroku\``)
        .setFooter(message.author.tag, message.author.displayAvatarURL())
        .setTimestamp();
    
    message.channel.send({embed: embed});
}