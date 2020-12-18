module.exports = (client, message, args) => {
  const Discord = require("discord.js");
  let sgb = require("steam-game-browser");
  let nombre = args.join(" ");
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
      // Si no se encuentra el juego o si no se introdujo un nombre
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
    let isFree = data.is_free;
    if (isFree === true) {
      isFree = "Sí";
    } else {
      isFree = "No";
    }
    let edad = data.required_age;
    if (edad === 0) {
      edad = "ATP";
    } else {
      edad = edad;
    }
    if (data.release_date.comming_soon === true) {
      fecha = "***Pronto...***";
    } else {
      fecha = `${data.release_date.date}`;
    }
    if (data.pc_requirements.minimum === undefined) {
      requisitosminimos = "No especifica";
    } else {
        requisitosminimos = data.pc_requirements.minimum.slice(8);
    }
    if (data.pc_requirements.recommended === undefined) {
        requisitosrecomendados = "No especifica";
    }else{
        requisitosrecomendados = data.pc_requirements.recommended.slice(12);
    }
    let embed = new Discord.MessageEmbed()
      .setTitle(data.name)
      .setURL(`https://store.steampowered.com/app/${data.steam_appid}`)
      .setDescription(data.short_description)
      .addField("Free To Play", `${isFree}`, true)
      .addField("Fecha de Lanzamiento", fecha, true)
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
