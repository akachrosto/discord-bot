// Color aleatorio cada vez que el bot se enciende
let gen = require('color-generator');
let color = gen().hexString();

let config = {
    prefix: "js/",
    token: process.env.TOKEN,
    ownerid: "332841209875791875",
    douid:"337804817445552130",
    embedcolor:`0x${color.slice(1)}`
  }
  // Aqui exportamos el objeto config
  module.exports = config;
