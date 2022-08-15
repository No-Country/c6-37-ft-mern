import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
    usuario: String,
    contrasena: String,
    isAdmin: Boolean
});

const usuarioModel = mongoose.model('usuarioModel', usuarioSchema);

export default usuarioModel;