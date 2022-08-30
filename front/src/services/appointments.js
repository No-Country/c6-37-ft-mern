import axios from 'axios';

const URL = import.meta.env.VITE_URL + 'appointment/';

export const getAppointments = async () => {
  const resp = await axios.get(URL);
  return resp;
};

export const getAppointment = async (_id) => {
  const resp = await axios.get(URL, { _id: _id });
  return resp;
};

export const getPetAppointments = async (_id) => {
  const resp = await axios.get(URL + 'pet/' + _id);
  return resp;
};

export const getClientAppointments = async (email) => {
  const resp = await axios.get(URL + 'client/' + email);
  return resp;
};

export const createAppointment = async (appointment) => {
  const resp = await axios.post(URL, appointment);
  return resp;
};

export const deleteAppointment = async (_id) => {
  const resp = await axios.delete(URL + _id);
  return resp;
};

export const deleteClientAppointments = async (client) => {
  const resp = await axios.delete(URL +'client/' + client);
  return resp;
};

export const deletePetAppointments = async (pet) => {
  const resp = await axios.delete(URL +'pet/' + pet);
  return resp;
};
