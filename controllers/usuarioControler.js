const usuarioModel = require ('../controllers/usuariosControler.js');
const bcryptjs = require ('bcryptjs');

const usuarioGuardar = async (req, res)=>{
    console.log('Guardando usuario')
    console.log(req.body);
    try {
        const usuario = new usuariosModel(req.body)
        usuario.contrasena = await bcryptjs.hash(usuario.contrasena, 10)
        await usuario.save()

        respuesta = {'msj':'El usuario se almaceno con exito'}
        res.status(200).json(respuesta)

    }catch (error){
        console,log ('el error es:' + error)
    }
}

module.exports = {
    usuarioGuardar
};