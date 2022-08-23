import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema({
    type: String,
    date: String,
    pet: String
})

const appointmentModel = mongoose.model('appointmentModel', appointmentSchema);

export default appointmentModel;