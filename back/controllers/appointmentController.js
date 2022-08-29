import appointmentModel from '../models/appointmentModel.js';

export const getAppointments = async (req, res) => {
  try {
    const appointments = await appointmentModel.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAppointment = async (req, res) => {
  const { _id } = req.params;
  try {
    const appointmentEncontrado = await appointmentModel.findOne({ _id });
    res.status(200).json(appointmentEncontrado);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPetAppointments = async (req, res) => {
  const { pet } = req.params;
  try {
    const petAppointments = await appointmentModel.find({ pet });
    res.status(200).json(petAppointments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getClientAppointments = async (req, res) => {
  const { client } = req.params;
  try {
    const clientAppointments = await appointmentModel.find({ client });
    res.status(200).json(clientAppointments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createAppointment = async (req, res) => {
  const appointment = req.body;
  const newAppointment = new appointmentModel(appointment);
  try {
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteAppointment = async (req, res) => {
  const { _id } = req.params;
  try {
    await appointmentModel.deleteOne({ _id });
    res.status(200).json({ message: 'Deleted' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteClientAppointments = async (req, res) => {
  const { client } = req.params;
  try {
    await appointmentModel.deleteMany({ client });
    res.status(200).json({ message: 'Deleted' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePetAppointments = async (req, res) => {
  const { pet } = req.params;
  try {
    await appointmentModel.deleteMany({ pet });
    res.status(200).json({ message: 'Deleted' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


