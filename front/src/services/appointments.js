import axios from 'axios';

const URL = import.meta.env.VITE_URL + 'appointment/';

export const getAppointments = async () => {
  const resp = await axios.get(URL);
  return resp;
};

export const getAppointment = async ({ id }) => {
  const resp = await axios.post(URL, { _id: id });
  return resp;
};

export const createAppointment = async (appointment) => {
  const resp = await axios.post(URL, appointment);
  return resp;
};

export const deleteAppointment = async ({id}) => {
  const resp = await axios.delete(URL + id);
  return resp;
};
