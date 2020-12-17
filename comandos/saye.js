module.exports = (client, message, args) => {
  let Discord = require("discord.js");

  // Color del Embed
  let gen = require("color-generator");
  let color = gen().hexString();

  texto = args.join(" ");
  if (!texto) {
    let embed = new Discord.MessageEmbed()
      .setDescription(`\`No se ha introducido un texto\``)
      .setColor(`0x${color.slice(1)}`);
    message.channel.send({ embed: embed });
  } else {
    let embed = new Discord.MessageEmbed()
      .setDescription(`${texto}`)
      .setColor(`0x${color.slice(1)}`);
    message.channel.send({ embed: embed });
  }
};
