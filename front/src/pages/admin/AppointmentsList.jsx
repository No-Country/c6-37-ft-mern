import { Button, Flex, Heading, Stack, useDisclosure } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AppointmentModal from '../../components/admin/AppointmentModal';
import DataTable from '../../components/table/dataTable';
import appointmentsHook from '../../services/appointmentsHook';
import ButtonsBar from './ButtonsBar';
import SearchBar from './SearchBar';

const columns = [
  { key: 'type', title: 'Consult' },
  { key: 'client', title: 'Client' },
  { key: 'pet', title: 'Pet' },
  { key: 'time', title: 'Time' },
  { key: 'day', title: 'Day' },
];

const AppointmentsList = () => {
  const { appointmentWithClients, getAppointments } = appointmentsHook();
  const [selectedAppointment, setSelectedAppointment] = useState();
  const [dataToShow, setDataToShow] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeItem, setActiveItem] = useState(1);
  const finalRef = useRef(null);

  const handleActive = async () => {
    let citasFiltradas = [];
    let now = new Date().toISOString().substring(0, 10);

    await Promise.all(
      appointmentWithClients.map(async (cita) => {
        let date = new Date(cita.day + ' ' + cita.time)
          .toISOString()
          .substring(0, 10);
        activeItem === 1 && date === now && citasFiltradas.push(cita);
        activeItem === 2 && date > now && citasFiltradas.push(cita);
        activeItem === 3 && date < now && citasFiltradas.push(cita);
      })
    ).catch((err) => console.log(err));

    setDataToShow(citasFiltradas);
  };

  const handleSelect = (appointment) => {
    setSelectedAppointment(appointment);
    onOpen();
  };

  useEffect(() => {
    getAppointments();
  }, []);

  useEffect(() => {
    handleActive();
  }, [appointmentWithClients]);

  useEffect(() => {
    dataToShow.length > 0 && setDataToShow([]);
    handleActive();
  }, [activeItem]);

  return (
    <>
      <Stack gap="48px">
        <Heading>Appointments</Heading>

        <Stack
          px={8}
          py={6}
          boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)"
        >
          <ButtonsBar activeItem={activeItem} setActiveItem={setActiveItem} />
          <SearchBar search={['consult', 'client', 'pet']} />
          <DataTable
            columns={columns}
            rows={dataToShow}
            isClickable={true}
            handleSelect={(appointment) => handleSelect(appointment)}
          />
        </Stack>
      </Stack>
      {selectedAppointment && (
        <AppointmentModal
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          title={'Appointment Details'}
          appointment={selectedAppointment}
          cancel={'Close'}
        />
      )}
    </>
  );
};

export default AppointmentsList;
