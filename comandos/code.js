module.exports = (client, message, args) => {
  const fs = require("fs");
  const Discord = require("discord.js");
  const embedColor = "0xda2121";

  if (
    message.author.id === client.config.ownerid ||
    message.author.id === client.config.douid
  ) {
    if (args[0] == "ver" && args[1] == "todos") {
      fs.readdir("./comandos", (err, archivos) => {
        if (err) throw err;
        const embedTodos = new Discord.MessageEmbed()
          .setColor(embedColor)
          .setDescription(`\`\`\`${archivos}\`\`\``);
        message.channel.send({ embed: embedTodos });
      });
    }
    if (args[0] == "ver" && args[1] != "todos") {
      if (args[1].endsWith(".js")) {
        fs.readFile(`./comandos/${args[1]}`, "utf-8", (err, contenido) => {
          if (err) {
            message.channel.send(
              "`Por favor verifica que hayas colocado el nombre del archivo a leer correctamente`"
            );
            console.error(err.message);
          } else {
            if (contenido.length >= 2000) {
              const embedCommand = new Discord.MessageEmbed()
                .setColor(embedColor)
                .setDescription(
                  `\`\`\`js\n${contenido.substring(0, 1999)}\`\`\``
                );
              message.channel.send({ embed: embedCommand });
              if (contenido.length >= 3000) {
                const embedCommand = new Discord.MessageEmbed()
                  .setColor(embedColor)
                  .setDescription(
                    `\`\`\`js\n${contenido.substring(1999, 3998)}\`\`\``
                  );
                message.channel.send({ embed: embedCommand });
                if (contenido.length >= 4000) {
                  const embedCommand = new Discord.MessageEmbed()
                    .setColor(embedColor)
                    .setDescription(
                      `\`\`\`js\n${contenido.substring(3998, 5997)}\`\`\``
                    );
                  message.channel.send({ embed: embedCommand });
                  if (contenido.length >= 6000) {
                    const embedCommand = new Discord.MessageEmbed()
                      .setColor(embedColor)
                      .setDescription(
                        `\`\`\`js\n${contenido.substring(5997, 7996)}\`\`\``
                      );
                    message.channel.send({ embed: embedCommand });
                  }
                }
              }
            } else {
              const embedCommand = new Discord.MessageEmbed()
                .setColor(embedColor)
                .setDescription(`\`\`\`js\n${contenido}\`\`\``);
              message.channel.send({ embed: embedCommand });
            }
          }
        });
      } else {
        fs.readFile(`./comandos/${args[1]}.js`, "utf-8", (err, contenido) => {
          if (err) {
            message.channel.send(
              "`Por favor verifica que hayas colocado el nombre del archivo a leer correctamente`"
            );
          }
          if (contenido.length >= 2000) {
            const embedCommand = new Discord.MessageEmbed()
              .setColor(embedColor)
              .setDescription(
                `\`\`\`js\n${contenido.substring(0, 1999)}\`\`\``
              );
            message.channel.send({ embed: embedCommand });
            if (contenido.length >= 3000) {
              const embedCommand = new Discord.MessageEmbed()
                .setColor(embedColor)
                .setDescription(
                  `\`\`\`js\n${contenido.substring(1999, 3998)}\`\`\``
                );
              message.channel.send({ embed: embedCommand });
              if (contenido.length >= 4000) {
                const embedCommand = new Discord.MessageEmbed()
                  .setColor(embedColor)
                  .setDescription(
                    `\`\`\`js\n${contenido.substring(3998, 5997)}\`\`\``
                  );
                message.channel.send({ embed: embedCommand });
                if (contenido.length >= 6000) {
                  const embedCommand = new Discord.MessageEmbed()
                    .setColor(embedColor)
                    .setDescription(
                      `\`\`\`js\n${contenido.substring(5997, 7996)}\`\`\``
                    );
                  message.channel.send({ embed: embedCommand });
                }
              }
            }
          } else {
            const embedCommand = new Discord.MessageEmbed()
              .setColor(embedColor)
              .setDescription(`\`\`\`js\n${contenido}\`\`\``);
            message.channel.send({ embed: embedCommand });
          }
        });
      }
    }
  } else {
    message.channel.send("`No tienes permiso para ejecutar este comando`");
  }
};
