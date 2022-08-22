import usuarioModel from '../models/usuarioModel.js';

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioModel.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUsuario = async (req, res) => {
  const usuario = req.params.usuario;
  try {
    const usuarioEncontrado = await usuarioModel.findOne({ usuario });
    res.status(200).json(usuarioEncontrado);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const verifyUsuario = async (req, res) => {
  try {
    const { usuario, contrasena } = req.body;
    const usuarioEncontrado = await usuarioModel.findOne({ usuario: usuario });
    if (!usuarioEncontrado) {
      res.status(404).json({ mesagge: 'User not found' });
      return;
    }
    if (usuarioEncontrado.contrasena === contrasena)
      res.status(200).json(usuarioEncontrado);
    else res.status(404).json({ mesagge: 'Incorrect password' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUsuario = async (req, res) => {
  const usuario = req.body;
  const newUsuario = new usuarioModel(usuario);
  try {
    await newUsuario.save();
    res.status(201).json(newUsuario);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteUsuario = async (req, res) => {
  const usuario = req.params.usuario;
  try {
    await usuarioModel.deleteOne({ usuario });
    res.status(200).json({ message: 'Deleted' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
