// Color aleatorio cada vez que el bot se enciende
let gen = require('color-generator');
let color = gen().hexString();

let config = {
    prefix: "js/",
    token: "Nzg2NjM2NzQyNjQ3MDg3MTU0.X9JSjg.hVcxUd0n9DNhdeCZr9mvcwvZD5w",
    ownerid: "332841209875791875",
    douid:"337804817445552130",
    embedcolor:`0x${color.slice(1)}`
  }
  // Aqui exportamos el objeto config
  module.exports = config;
