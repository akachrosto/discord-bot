module.exports = async (client, message) => {
  const Discord = require("discord.js");
  // Comandos por DM
  if (message.channel.type === "dm") return;

  // Firebase
  const admin = require("firebase-admin");
  const db = admin.firestore();

  function prefijo() {
    let servidor = message.guild;

    let ref = db.collection("prefijos").doc(servidor.id);

    let obtener = ref.get().then((doc) => {
      if (!doc.exists) {
        return db
          .collection("prefijos")
          .doc("default")
          .get()
          .then((doc) => {
            return doc.data().prefix;
          });
      } else {
        return doc.data().prefix;
      }
    });
    return obtener;
  }

  prefix = await prefijo();
  // Mensaje Informativo
  if (message.content.includes(`<@!${client.user.id}>`)) {
    let ping = Math.floor(message.client.ws.ping);
    let embed = new Discord.MessageEmbed()
      .setTitle("Link de Invitación")
      .setURL("https://discordapp.com/oauth2/authorize?client_id=786636742647087154&scope=bot&permissions=8")
      .addField(`Prefijo:`, `${prefix}`, true)
      .addField('Ping', ping+'ms', true)
      .setFooter(message.author.tag, message.author.displayAvatarURL())
      .setTimestamp()
      .setColor(client.config.embedcolor);
    message.channel.send({ embed: embed });
  }
  // Prevención de bucle infinito
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;
  // Definiendo los argumentos y comandos.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Manejando los eventos.
  let cmd = client.comandos.get(command); // Obtiene el comando de la colección client.commandos
  if (!cmd) return; // Si no hay comandos no ejecute nada.

  // Ejecuta el comando enviando el client, el mensaje y los argumentos.
  cmd(client, message, args, db);
};
