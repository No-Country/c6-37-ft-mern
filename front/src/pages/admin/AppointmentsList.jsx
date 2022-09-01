import { Heading, Stack, useDisclosure } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AppointmentModal from '../../components/admin/AppointmentModal';
import DataTable from '../../components/table/dataTable';
import appointmentsHook from '../../services/appointmentsHook';
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
  const [ selectedAppointment, setSelectedAppointment ] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);

  const handleSelect = (appointment) => {
    setSelectedAppointment(appointment);
    onOpen();
  };

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <>
      <Stack gap="48px">
        <Heading>Appointments</Heading>

        <Stack
          px={8}
          py={6}
          boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)"
        >
          <SearchBar search={['consult', 'client', 'pet']} />
          <DataTable
            columns={columns}
            rows={appointmentWithClients}
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
