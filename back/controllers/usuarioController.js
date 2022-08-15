import usuarioModel from '../models/usuarioModel.js';

export const verifyUsuario = async (req, res) => {
    try {
        const { usuario, contrasena } = req.body;
        const usuarioEncontrado = await usuarioModel.findOne({usuario: usuario});
        if(!usuarioEncontrado) return;
        if(usuarioEncontrado.contrasena === contrasena) res.status(200).json({mesagge: 'Usuario autorizado'});
        else res.status(404).json({mesagge: 'Usuario no encontrado'});
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}