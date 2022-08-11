import mongoose from "mongoose";

const productoSchema = mongoose.Schema({
    codigo: String,
    nombre: String,
    cantidad: String,
    precio: String,
    costo: String,
    stock: String
});

const productoModel = mongoose.model('productoModel', productoSchema);

export default productoModel;