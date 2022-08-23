import appointmentModel from '../models/appointmentModel.js';

export const getAppointments = async (req, res) => {
    try {
        const appointments = await appointmentModel.find();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getAppointment = async (req, res) => {
    const _id = req.params._id;
    try {
        const appointmentEncontrado = await appointmentModel.findOne({_id});
        res.status(200).json(appointmentEncontrado);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createAppointment = async (req, res) => {
    const appointment = req.body;
    const newAppointment = new appointmentModel(appointment);
    try {
        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const deleteAppointment = async (req, res) => {
    const _id = req.params._id;
    try {
        await appointmentModel.deleteOne({_id});
        res.status(200).json({message: 'Deleted'});
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}