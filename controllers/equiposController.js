const equiposModel = require('../models/equiposSchema.js')

const equiposListar= async (req, res)=>{
    const equipos = await equiposModel.find()
    res.status(200).send(equipos)
}

const equiposGuardar = async (req,res)=>{
    console.log(req.body);
    const nombre = req.body.nombre//Extraer el nombre de la consulta y guardarlo en variable nombre
    let respuesta={}
    if(nombre==''){
        respuesta = {'msj':'Equipos Vacio, el nombre es requerido'}
         res.status(400).json(respuesta)
    }else{
        try{
        const equipos = new equiposModel(req.body);
        equipos.save()
        respuesta = {'msj':'Equipo almacenado con exito'};
        res.status(200).json(respuesta);
        }catch(error){
            console.log('El error de conexion es: ' + error);
        }
    }
}

const equiposObtener= async (req, res)=>{
    const id=req.params.id
    console.log(id)
    let grupo
    if(id == 1)
        grupo = {'1': 'GrupoA: Millonarios, Pereira, Santafe, Junior'}        
    if(id == 2)
        grupo = {"2":"GrupoB: Medellin, Aguilas Doradas, Pasto, America"}
    res.status(200).json(grupo)
}

const equiposActualizar=async(req, res)=>{
    console.log('put:')
    const {id, nombre}=req.body;
    try{
        if(id == ''){
            res.status(400).send('Error campo vacio, esta informacion es requerida')
        }
        if(nombre!=''){
            console.log('Equipos Actualizados')
            res.status(200).send('Equipos Actualizados con exito')
        }

    }catch(error){
        console.log('error' + error);
        res.status(400).send("Error al actualizar")
    }
}

const equiposEliminar=async(req, res)=>{
    console.log("del" + req.params.id)
    try{
        id=req.params.id
        if(id==''){
            res.status(400).send("error al eliminar")
        }
        console.log("Equipo eliminada")
        res.status(200).send("Equipo eliminado con exito")
             

    }catch(error){
        console.log("error"+error)
        res.status(400).send('Error al aliminar el equipo');
    }
}

module.exports={equiposListar, equiposGuardar, equiposObtener, equiposActualizar, equiposEliminar};