module.exports = (client, message, args) => {
  let Discord = require("discord.js");

  texto = args.join(" ");
  if (!texto) {
    let embed = new Discord.MessageEmbed()
      .setDescription(`\`No se ha introducido un texto\``)
      .setColor(client.config.embedcolor);
    message.channel.send({ embed: embed });
    message.delete({timeout:0});
  } else {
    let embed = new Discord.MessageEmbed()
      .setDescription(`${texto}`)
      .setColor(client.config.embedcolor);
    message.channel.send({ embed: embed });
    message.delete({timeout:0});
  }
};
