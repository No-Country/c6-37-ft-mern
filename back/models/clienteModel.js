import mongoose from "mongoose";

const clienteSchema = mongoose.Schema({
    name: String,
    lastName: String,
    phoneNumber: String,
    email: String,
    address: String,
    password: String
});

const clienteModel = mongoose.model('clienteModel', clienteSchema);

export default clienteModel;