import axios from 'axios';
import { useEffect, useState } from 'react';
import { getClient } from './clients';
import { getPet } from './pets';

const URL = import.meta.env.VITE_URL + 'appointment/';

const appointmentsHook = () => {
  const [appointments, setAppointments] = useState([]);
  const [appointmentWithPet, setAppointmentsWithPet] = useState([]);
  const [appointmentWithClients, setAppointmentsWithClients] = useState([]);

  const getAppointments = async () => {
    await axios.get(URL).then((res) => setAppointments(res.data));
  };

  const getAppointmentPet = async () => {
    const citas = appointments;

    const AppointmentAndPet = await Promise.all(
      citas.map(async (cita) => {
        await getPet(cita.pet).then((res) => (cita.pet = res.data.name)).catch((err)=>console.log(err));
        return cita;
      })
    );

    setAppointmentsWithPet(AppointmentAndPet);
  };

  const getAppointmentClient = async () => {
    const citas = appointments;

    const appointmentsAndClients = await Promise.all(
      citas.map(async (cita) => {
        await getClient(cita.client).then(
          (res) => (cita.client = `${res.data.name} ${res.data.lastName}`)
        );
        return cita;
      })
    );

    setAppointmentsWithClients(appointmentsAndClients);
  };

  const getAppointment = async (_id) => {
    const resp = await axios.get(URL, { _id: _id });
    return resp;
  };

  const getPetAppointments = async (_id) => {
    const resp = await axios.get(URL + 'pet/' + _id);
    return resp;
  };

  const getClientAppointments = async (email) => {
    await axios.get(URL + 'client/' + email).then((res) => setAppointments(res.data));
  };

  const createAppointment = async (appointment) => {
    const resp = await axios.post(URL, appointment);
    return resp;
  };

  const deleteAppointment = async (_id) => {
    const resp = await axios.delete(URL + _id);
    return resp;
  };

  const deleteClientAppointments = async (client) => {
    const resp = await axios.delete(URL + 'client/' + client);
    return resp;
  };

  const deletePetAppointments = async (pet) => {
    const resp = await axios.delete(URL + 'pet/' + pet);
    return resp;
  };

  useEffect(() => {
    appointments.length > 0 && getAppointmentPet();
  }, [appointments]);

  useEffect(() => {
    appointmentWithPet.length > 0 && getAppointmentClient();
  }, [appointmentWithPet]);

  return {
    getAppointments,
    getAppointment,
    getPetAppointments,
    getClientAppointments,
    createAppointment,
    deleteAppointment,
    deleteClientAppointments,
    deletePetAppointments,
    appointmentWithPet,
    appointmentWithClients,
  };
};

export default appointmentsHook;
