let archivoTareas = require('./funcionesDeTareas');

//Si desea investigar un poco más sobre este módulo nativo de NodeJs
//https://nodejs-es.github.io/api/process.html#process_es_process 
let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        let tareas = archivoTareas.leerArchivo();
        tareas.forEach(function(v,i){ console.log(i+1+'. ',tareas[i].titulo+' : ',tareas[i].estado)})
 
        // for (let i = 0;  i < tareas.length; i++) {
        //     console.log((i + 1) +'. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        // }
        console.log()
        break;

    case 'crear':
        let titulo = process.argv[3]
        

        let tarea= {
            titulo:titulo,
            estado: 'pendiente'
        }
        archivoTareas.guardarTarea(tarea)
        console.log('Nueva Tarea=> '+tarea.titulo+' : '+tarea.estado)
    break;

    case 'filtrar':
        let buscar = process.argv[3]
        let buscarEn=archivoTareas.filtrarPorEstado(buscar)
        if(buscarEn.length==0){ console.log('null - no hay tareas con ese estado')}

        buscarEn.forEach((v,i)=>{console.log(i+1 +'- '+buscarEn[i].titulo)})
        
    break;
        
    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}
