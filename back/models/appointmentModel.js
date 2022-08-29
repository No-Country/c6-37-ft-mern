import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema({
    type: String,
    day: String,
    time: String,
    pet: String,
    client: String,
})

const appointmentModel = mongoose.model('appointmentModel', appointmentSchema);

export default appointmentModel;