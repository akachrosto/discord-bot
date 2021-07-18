module.exports = (client, message, args) => {
  // Requerimientos
  const Discord = require("discord.js");
  const sgb = require("steam-game-browser");
  const { MessageButton, MessageActionRow } = require('discord-buttons');
  let nombre = args.join(" ");
  // Si no colocan un juego o programa
  if (!nombre) {
    let embed = new Discord.MessageEmbed()
      .addField(
        "Ha ocurrido un error.",
        "No ha introducido el nombre o ID del juego o programa que quiere buscar"
      )
      .setColor(client.config.embedcolor)
      .setTimestamp()
      .setFooter(message.author.username, message.author.avatarURL());
    message.channel.send({ embed: embed });
  }
  sgb.searchByName(`${nombre}`, (err, data) => {
    if (err) {
      // Si no se encuentra el juego
      let embed = new Discord.MessageEmbed()
        .addField(
          "Ha ocurrido un error.",
          "Verifica que hayas escrito bien el nombre del juego o programa que estás buscando."
        )
        .setColor(client.config.embedcolor)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());
      message.channel.send({ embed: embed });
      console.error(err);
    }
    // Algunos datos
    let isFree = data.is_free;
    let edad = data.required_age;
    // EDAD
    if (edad === 0) {
      edad = "ATP";
    } else {
      edad = edad;
    };
    // REQUISITOS MINIMOS
    if(!data.pc_requirements.minimum) {
      requisitosminimos = "No especifica";
    } else {
        requisitosminimos = data.pc_requirements.minimum.slice(8);
    }
    // REQUISITOS RECOMENDADOS
    if(!data.pc_requirements.recommended) {
        requisitosrecomendados = "No especifica";
    }else{
        requisitosrecomendados = data.pc_requirements.recommended.slice(12);
    };

    let embed = new Discord.MessageEmbed()
      .setTitle(data.name)
      .setURL(`https://store.steampowered.com/app/${data.steam_appid}`)
      .setDescription(data.short_description)
      .addField("Free To Play", `${isFree ? "Sí" : "No"}`, true)
      .addField("Fecha de Lanzamiento", `
        ${data.release_date.comming_soon ? "***Pronto...***" : data.release_date.date}
        `, true)
      .addField("ID", data.steam_appid, true)
      .addField("Edad Requerida", `${edad}`, true)
      .addField("Desarrolado por", data.developers, true)
      .addField("Publicado por", data.publishers, true)
      .addField("Requisitos Mínimos PC", requisitosminimos)
      .addField("Requisitos Recomendados PC", requisitosrecomendados)
      .setImage(data.header_image)
      .setColor(client.config.embedcolor)
      .setTimestamp()
      .setFooter(message.author.username, message.author.avatarURL());
    message.channel.send({ embed: embed });
  });
};
