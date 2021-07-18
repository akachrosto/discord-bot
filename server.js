//Código del bot
require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

const disbut = require('discord-buttons');
disbut(client)
// El modulo fs se utiliza para leer los archivos y carpetas de un directorio:
let { readdirSync } = require('fs'); 

// configuracion
client.config = require('./config.js'); 
client.comandos = new Discord.Collection();  

// Controlador de Comandos
for(const file of readdirSync('./comandos/')) { 
    if(file.endsWith(".js")) {
    let fileName = file.substring(0, file.length - 3); 
    let fileContents = require(`./comandos/${file}`); 
    client.comandos.set(fileName, fileContents);
    }
  }
  
// Controlador de Eventos
for(const file of readdirSync('./eventos/')) { 
    if(file.endsWith(".js")){
    let fileName = file.substring(0, file.length - 3);
    let fileContents = require(`./eventos/${file}`); 
    client.on(fileName, fileContents.bind(null, client)); 
    delete require.cache[require.resolve(`./eventos/${file}`)]; 
    }
  }

// Iniciando Base de Datos
const admin = require("firebase-admin");
var serviceAccount = require("./requirements/serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Propiedad Login
client.login(client.config.token)
.then(() => { 
  console.log(`Estoy listo, soy ${client.user.tag}`);

})
.catch((err) => {
  console.error("Error al iniciar sesión: " + err);
});