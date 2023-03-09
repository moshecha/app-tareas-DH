const participante1 = require('./agusto')
const participante2 = require('./alfonso')
const participante3 = require('./david')
const participante4 = require('./eduardo')
const participante5 = require('./sasha')


console.log("hola, soy " + participante1[0] + ", disfruto con " + participante1[1] + " y soy de " + participante1[2]+'\n')
console.log("hola, soy " + participante2[0] + ", disfruto con " + participante2[1] + " y soy de " + participante2[2]+'\n')
console.log("hola, soy " + participante3[0] + ", disfruto con " + participante3[1] + " y soy de " + participante3[2]+'\n')
console.log("hola, soy " + participante4[0] + ", disfruto con " + participante4[1] + " y soy de " + participante4[2]+'\n')
console.log("hola, soy " + participante5[0] + ", disfruto con " + participante5[1] + " y soy de " + participante5[2]+'\n')



let fs = require('fs')
let mensaje= fs.readFileSync(__dirname + '/mensaje.txt','utf-8')//para leer otro archivo de texto
console.log( mensaje)

