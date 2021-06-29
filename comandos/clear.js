module.exports = (client, message, args) => {
  let cantidad = parseInt(args[0]) + 1;
  let permiso = message.member.hasPermission("ADMINISTRATOR");
  if (!permiso) {
    message.channel.send(
      "**Usted no tiene los permisos necesarios para realizar esta acción**"
    );
    return;
  } else {
    message.channel.bulkDelete(cantidad);
    message.channel.send(
      `Se han eliminado **${cantidad-1}** mensajes correctamente`
    ).then((msg) => {
      msg.delete({timeout:5000})
    });
  }
};
