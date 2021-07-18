module.exports = (client, message, args) => {
    let mencion = message.mentions.users.first();
    let razon = args.slice(1).join(" ");
    let miembro = message.guild.member(mencion);
    let permiso = message.member.hasPermission("BAN_MEMBERS");
  
    if (!permiso) {
      message.channel.send(
        "**Usted no tiene los permisos necesarios para realizar esta acción**"
      );
      return;
    } else if (!mencion) {
      message.channel.send("Por favor mencione al usuario que quiere banear");
      return;
    } else if (!razon) {
      razon = `${message.author.tag} no ha introducido un motivo para su banear`;
    }
    miembro
      .ban({
        reason:  razon
    })
      .then(() => {
        message.channel.send(`<@!${mencion.id}> ha sido baneado del servidor`);
        message.channel.send(`Motivo: ${razon}`);
        message.channel.send(`https://thumbs.gfycat.com/GorgeousGleamingBabirusa-small.gif`)
      })
      .catch((err) => {
          console.log(err)
        message.channel.send("He sido incapaz de banear al usuario.");
      });
  };