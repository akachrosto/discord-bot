module.exports = (client, message, args, db) => {
  const Discord = require("discord.js");
  let servidor = message.guild;
  let permiso = message.member.hasPermission("ADMINISTRATOR");
  if(!permiso){
    let embed = new Discord.MessageEmbed()
      .setDescription("Usted no tiene permiso realizar esta acción.")
      .setColor(client.config.embedcolor);
      message.channel.send({embed: embed});
  }else{
    if (args[0] === "default") {
      let deleteDoc = db.collection('prefijos').doc(servidor.id).delete();
      let embed = new Discord.MessageEmbed()
      .setDescription("Se ha establecido como prefijo del servidor el prefijo por defecto.")
      .setColor(client.config.embedcolor)
      .setFooter(message.author.tag, message.author.displayAvatarURL())
      .setTimestamp();
      message.channel.send({embed: embed});
    }else if(args[0] === "js/"){
      let deleteDoc = db.collection('prefijos').doc(servidor.id).delete();
      let embed = new Discord.MessageEmbed()
      .setDescription("El prefijo introducido es el prefijo por defecto.")
      .setColor(client.config.embedcolor)
      .setFooter(message.author.tag, message.author.displayAvatarURL())
      .setTimestamp();
      message.channel.send({embed: embed});
    }else {
      db.collection("prefijos")
        .doc(`${servidor.id}`)
        .set({
          prefix: `${args.join(" ")}`,
        });
      let embed = new Discord.MessageEmbed()
        .setTitle("El prefijo ha sido cambiado correctamente.")
        .addField(`Nuevo prefijo:`, `**${args.join(" ")}**`)
        .setColor(client.config.embedcolor)
        .setFooter(message.author.tag, message.author.displayAvatarURL())
        .setTimestamp();
      message.channel.send({ embed: embed });
    }
  };
};
