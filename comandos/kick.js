module.exports = (client, message, args) => {
  let mencion = message.mentions.users.first();
  let razon = args.slice(1).join(" ");
  let miembro = message.guild.member(mencion);
  let permiso = message.member.hasPermission("KICK_MEMBERS");

  if (!permiso) {
    message.channel.send(
      "**Usted no tiene los permisos necesarios para realizar esta acción**"
    );
    return;
  } else if (!mencion) {
    message.channel.send("Por favor mencione al usuario que quiere expulsar");
    return;
  } else if (!razon) {
    razon = `${message.author.tag} no ha introducido un motivo para su expulsión`;
  }
  miembro
    .kick(razon)
    .then(() => {
      message.channel.send(`<@!${mencion.id}> ha sido expulsado del servidor`);
      message.channel.send(`Motivo: ${razon}`);
    })
    .catch((err) => {
      message.channel.send("He sido incapaz de expulsar al usuario.");
    });
};
