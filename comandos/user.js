module.exports = (client, message, args) => {
    const Discord = require('discord.js');

    let bot, fechaCreacion, fechaIngreso, embed, apodo;
    let usuario = message.mentions.users.first();
    if(!usuario) usuario = message.author;
    
    let datosUsuario = (usuario) => {
        bot = usuario.bot;
        fechaIngreso = new Date(`${message.member.joinedAt}`);
        fechaCreacion = new Date(`${usuario.createdAt}`);
        apodo = message.guild.member(usuario).nickname;
        if(!apodo) apodo = "N/A"
    }

    let generarEmbed = (usuario) => {
        embed = new Discord.MessageEmbed()
            .addField("Nombre", usuario.tag, true)
            .addField("Apodo", apodo, true)
            .addField(
                "Fecha de Ingreso (Discord)",
                fechaCreacion.getDate() +
                "/" +
                `${fechaCreacion.getMonth() + 1}` +
                "/" +
                fechaCreacion.getFullYear(),
                true
            )
            .addField(
                "Fecha de Ingreso (Server)",
                fechaIngreso.getDate() +
                "/" +
                `${fechaIngreso.getMonth() + 1}` +
                "/" +
                fechaIngreso.getFullYear(),
                true
            )
            .addField("Bot", `${bot ? "Sí" : "No"}`, true)
            .addField(
                "Roles",
                message.member.roles.cache.map((roles) => `\`${roles.name}\``).join(", "),
                true
            )
            .setThumbnail(usuario.displayAvatarURL({ size: 1024, dynamic:true}))
            .setColor(client.config.embedcolor)
            .setTimestamp()
            .setFooter(usuario.id);
    };

    if(usuario){
        usuario = usuario || message.guild.member(usuario).user;

        datosUsuario(usuario);
        generarEmbed(usuario)

        message.channel.send({ embed: embed }).catch(() => {
            console.log("Ha ocurrido un error con el comando 'user'")
        })
    };

};