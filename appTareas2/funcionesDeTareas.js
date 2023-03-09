const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },

    escribirJSON : function(tareas){fs.writeFileSync(this.archivo, JSON.stringify(tareas ,null,''))},
    guardarTarea : function(tarea){
        let tareas=this.leerArchivo()
        tareas.push(tarea)
        this.escribirJSON(tareas)
    },

    filtrarPorEstado:function(estadoBusca){
        let tareas=this.leerArchivo()
         
        let filtradas = tareas.filter(function(indice){ return indice.estado==estadoBusca})
        return filtradas
    }
}




module.exports = archivoTareas;

