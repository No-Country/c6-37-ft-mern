import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema({
    type: String,
    date: String,
    pet: String
})

const clienteModel = mongoose.model('clienteModel', appointmentSchema);

export default appointmentSchema;