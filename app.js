
const archivos = ('/tareas.json')
const fs = require('fs')

let archivo = fs.readFileSync(__dirname + archivos, 'utf-8');
let archivoObjeto = JSON.parse(archivo)

let accion = process.argv[2]


switch(accion){
    case 'listar':archivoObjeto.forEach(function(v,i){ console.log(i+1+'. ',archivoObjeto[i].titulo+' : ',archivoObjeto[i].estado)})
    break
    
    case undefined :console.log('Atencion - Tienes que pasar una accion! (listar)')
    break
    
    default: console.log('no entiendo que queres hacer')
}

//console.log(archivoObjeto[0].titulo,':',archivoObjeto[0].estado)
//for(let i=0;i<archivoObjeto.length;i++){console.log(i+1+'. ',archivoObjeto[i].titulo+':',archivoObjeto[i].estado)}