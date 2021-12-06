const os = require('os');
const { printName, lastName } = require('./printName');

printName(`Mateus ${lastName}`);

console.log(`Tipo do Sistema Operacional: ${os.type()}`)

