import mongoose from "mongoose";

const clienteSchema = mongoose.Schema({
    documento: String,
    nombre: String,
    apellidoPaterno: String,
    apellidoMaterno: String,
    telefono: String,
    direccion: String,
    mascotas: [
        {
            nombre: String,
            fechaNacimiento: String,
            tamaño: String,
            peso: String
        }
    ]
});

const clienteModel = mongoose.model('clienteModel', clienteSchema);

export default clienteModel;