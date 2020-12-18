module.exports = (client, message, args) => {
    const Discord = require("discord.js");

    let usuario = message.author;
    let bot = usuario.bot;
    let fechaCreacion = new Date(`${usuario.createdAt}`);
    let fechaIngreso = new Date(`${message.member.joinedAt}`);

    if (bot === true) {
        bot = "Sí";
    } else {
        bot = "No";
    }

    let embed = new Discord.MessageEmbed()
        .setAuthor(usuario.username, usuario.avatarURL())
        .addField("Nombre", usuario.tag, true)
        .addField("Apodo", message.member.nickname, true)
        .addField(
            "En discord desde",
            fechaCreacion.getDate() +
            "/" +
            `${fechaCreacion.getMonth() + 1}` +
            "/" +
            fechaCreacion.getFullYear(),
            true
        )
        .addField(
            "Fecha de Ingreso",
            fechaIngreso.getDate() +
            "/" +
            `${fechaIngreso.getMonth() + 1}` +
            "/" +
            fechaIngreso.getFullYear(),
            true
        )
        .addField("Bot", bot, true)
        .addField(
            "Roles",
            message.member.roles.cache.map((roles) => `\`${roles.name}\``).join(", "),
            true
        )
        .setThumbnail(usuario.displayAvatarURL({ size: 1024 }))
        .setColor(client.config.embedcolor)
        .setTimestamp()
        .setFooter(usuario.id);
    message.channel.send({ embed: embed });
};
