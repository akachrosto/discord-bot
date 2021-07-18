module.exports = (client, message, args, command) => { 
    const Discord = require('discord.js');
    const moment = require("moment")
    require('moment-duration-format');
    const actividad = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");
        
    if(message.author.id ===  client.config.ownerid || client.config.douid){
        const embedInfo = new Discord.MessageEmbed()

        .setColor(0x2F3136)
        .setAuthor(`Información de ${client.user.username}`, client.user.avatarURL())
        .addField(`Dueño`, `<@${client.config.ownerid}>`, true)
        .addField(`Colaborador`, `<@${client.config.douid}>`, true)
        .addField(`Version`, `1.0.0`, true)
        .addField(`Libreria`, `DiscordJS V12`, true)
        .addField(`Memoria`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
        .addField(`Uptime`, `${actividad}`, true)
        .addField(`Servidores`, `${client.guilds.cache.size}`, true)
        .addField(`Usuarios`, `${client.users.cache.size }`, true)
        .addField(`Canales`, `${client.channels.cache.size}`, true)
        .setImage(client.user.avatarURL({size: 2048}))
        .setFooter(message.author.username, message.author.displayAvatarURL({ size: 512}))
        .setTimestamp()

        message.channel.send({embed: embedInfo});
    }   else {
        const embedNo = new Discord.MessageEmbed()

        .setColor(client.config.embedcolor)
        .setDescription('`No estás autorizado para usar este comando`')
        .setFooter(message.author.username, message.author.avatarURL())
        .setTimestamp()

        message.channel.send({embed: embedNo});
    };
};