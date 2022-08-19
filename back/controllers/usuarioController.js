import usuarioModel from '../models/usuarioModel.js';

export const verifyUsuario = async (req, res) => {
    try {
        const { usuario, contrasena } = req.body;
        const usuarioEncontrado = await usuarioModel.findOne({usuario: usuario});
        if(!usuarioEncontrado) {res.status(404).json({mesagge: 'Usuario no encontrado'}); return;}
        if(usuarioEncontrado.contrasena === contrasena) res.status(200).json({mesagge: 'Usuario autorizado'});
        else res.status(404).json({mesagge: 'Contraseña incorrecta'});
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createUsuario = async (req, res) => {
    const usuario = req.body;
    const newUsuario = new usuarioModel(usuario);
    try {
        await newUsuario.save();
        res.status(201).json(newUsuario);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}