module.exports = (client, message) => {
  const Discord = require("discord.js");
  let servidor = message.guild;
  function finalregion() {
    return servidor.region;
  }
  function embedRegion(serverRegion) {
    const embedRegion = new Discord.MessageEmbed()
      .setAuthor(servidor.name, servidor.iconURL({dynamic:true}))
      .addField("**Created At**", servidor.createdAt.toDateString(), true)
      .addField("**ID**", servidor.id, true)
      .addField("**Region**", serverRegion, true)
      .addField("**Dueño del Servidor**", `<@${servidor.owner.user.id}>`, true)
      .addField("**Miembros**", servidor.memberCount, true)
      .addField("**Roles**", servidor.roles.cache.size - 1, true)
      .addField(
        "**Canales de Texto**",
        servidor.channels.cache.filter((channels) => channels.type == "text")
          .size,
        true
      )
      .addField(
        "**Canales de Voz**",
        servidor.channels.cache.filter((channels) => channels.type == "voice")
          .size,
        true
      )
      .setColor(client.config.embedcolor)
      .setTimestamp()
      .setFooter(
        'Para ver el icono del servidor basta con decir "icono"',
        message.author.avatarURL({dynamic:true})
      );

    return embedRegion;
  }
  const embedIcono = new Discord.MessageEmbed()
    .setImage(servidor.iconURL({ size: 2048 }))
    .setTimestamp()
    .setFooter(message.author.tag, message.author.avatarURL())
    .setColor(client.config.embedcolor);

  let funcRegion = finalregion();
  let regionesArchivo = require("../requirements/regiones.json");
  let regionesMensajes = require("../requirements/regionesMensajes.json");
  const filter = (m) => m.content.startsWith("icono");
  const collector = message.channel.createMessageCollector(filter, {
    time: 20000,
  });
  var idAutor = message.author.id;

  switch (funcRegion) {
    case regionesArchivo.brazil:
      message.channel
        .send({ embed: embedRegion(`${regionesMensajes.brazil}`) })
        .then((a) => {
          collector.on("collect", (m) => {
            if (m.author.id === idAutor) {
              m.delete();
              a.edit({ embed: embedIcono });
            }
          });
        });
      break;
    case regionesArchivo.europe:
      message.channel
        .send({ embed: embedRegion(`${regionesMensajes.europe}`) })
        .then((a) => {
          collector.on("collect", (m) => {
            if (m.author.id === idAutor) {
              m.delete();
              a.edit({ embed: embedIcono });
            }
          });
        });
      break;
    case regionesArchivo.hongkong:
      message.channel
        .send({ embed: embedRegion(`${regionesMensajes.hongkong}`) })
        .then((a) => {
          collector.on("collect", (m) => {
            if (m.author.id === idAutor) {
              m.delete();
              a.edit({ embed: embedIcono });
            }
          });
        });
      break;
    case regionesArchivo.japan:
      message.channel
        .send({ embed: embedRegion(`${regionesMensajes.japan}`) })
        .then((a) => {
          collector.on("collect", (m) => {
            if (m.author.id === idAutor) {
              m.delete();
              a.edit({ embed: embedIcono });
            }
          });
        });
      break;
    case regionesArchivo.india:
      message.channel
        .send({ embed: embedRegion(`${regionesMensajes.india}`) })
        .then((a) => {
          collector.on("collect", (m) => {
            if (m.author.id === idAutor) {
              m.delete();
              a.edit({ embed: embedIcono });
            }
          });
        });
      break;
    case regionesArchivo.russia:
      message.channel
        .send({ embed: embedRegion(`${regionesMensajes.russia}`) })
        .then((a) => {
          collector.on("collect", (m) => {
            if (m.author.id === idAutor) {
              m.delete();
              a.edit({ embed: embedIcono });
            }
          });
        });
      break;
    case regionesArchivo.singapore:
      message.channel
        .send({ embed: embedRegion(`${regionesMensajes.singapore}`) })
        .then((a) => {
          collector.on("collect", (m) => {
            if (m.author.id === idAutor) {
              m.delete();
              a.edit({ embed: embedIcono });
            }
          });
        });
      break;
    case regionesArchivo.southafrica:
      message.channel
        .send({ embed: embedRegion(`${regionesMensajes.southafrica}`) })
        .then((a) => {
          collector.on("collect", (m) => {
            if (m.author.id === idAutor) {
              m.delete();
              a.edit({ embed: embedIcono });
            }
          });
        });
      break;
    case regionesArchivo.sydney:
      message.channel
        .send({ embed: embedRegion(`${regionesMensajes.sydney}`) })
        .then((a) => {
          collector.on("collect", (m) => {
            if (m.author.id === idAutor) {
              m.delete();
              a.edit({ embed: embedIcono });
            }
          });
        });
      break;
    case regionesArchivo.usCentral:
      message.channel
        .send({ embed: embedRegion(`${regionesMensajes.usCentral}`) })
        .then((a) => {
          collector.on("collect", (m) => {
            if (m.author.id === idAutor) {
              m.delete();
              a.edit({ embed: embedIcono });
            }
          });
        });
      break;
    case regionesArchivo.usEast:
      message.channel
        .send({ embed: embedRegion(`${regionesMensajes.usEast}`) })
        .then((a) => {
          collector.on("collect", (m) => {
            if (m.author.id === idAutor) {
              m.delete();
              a.edit({ embed: embedIcono });
            }
          });
        });
      break;
    case regionesArchivo.usSouth:
      message.channel
        .send({ embed: embedRegion(`${regionesMensajes.usSouth}`) })
        .then((a) => {
          collector.on("collect", (m) => {
            if (m.author.id === idAutor) {
              m.delete();
              a.edit({ embed: embedIcono });
            }
          });
        });
      break;
    case regionesArchivo.usWest:
      message.channel
        .send({ embed: embedRegion(`${regionesMensajes.usWest}`) })
        .then((a) => {
          collector.on("collect", (m) => {
            if (m.author.id === idAutor) {
              m.delete();
              a.edit({ embed: embedIcono });
            }
          });
        });
      break;
    case regionesArchivo.vipUsEast:
      message.channel
        .send({ embed: embedRegion(`${regionesMensajes.vipUsEast}`) })
        .then((a) => {
          collector.on("collect", (m) => {
            if (m.author.id === idAutor) {
              m.delete();
              a.edit({ embed: embedIcono });
            }
          });
        });
      break;
    case regionesArchivo.euCentral:
      message.channel
        .send({ embed: embedRegion(`${regionesMensajes.euCentral}`) })
        .then((a) => {
          collector.on("collect", (m) => {
            if (m.author.id === idAutor) {
              m.delete();
              a.edit({ embed: embedIcono });
            }
          });
        });
      break;
    case regionesArchivo.euWest:
      message.channel
        .send({ embed: embedRegion(`${regionesMensajes.euWest}`) })
        .then((a) => {
          collector.on("collect", (m) => {
            if (m.author.id === idAutor) {
              m.delete();
              a.edit({ embed: embedIcono });
            }
          });
        });
      break;
    case regionesArchivo.london:
      message.channel
        .send({ embed: embedRegion(`${regionesMensajes.london}`) })
        .then((a) => {
          collector.on("collect", (m) => {
            if (m.author.id === idAutor) {
              m.delete();
              a.edit({ embed: embedIcono });
            }
          });
        });
      break;
    case regionesArchivo.amsterdam:
      message.channel
        .send({ embed: embedRegion(`${regionesMensajes.amsterdam}`) })
        .then((a) => {
          collector.on("collect", (m) => {
            if (m.author.id === idAutor) {
              m.delete();
              a.edit({ embed: embedIcono });
            }
          });
        });
      break;
  }
};