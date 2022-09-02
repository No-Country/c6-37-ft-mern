import { Stack, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import appointmentsHook from '../../services/appointmentsHook';
import DataTable from '../table/dataTable';
import AppointmentModal from './AppointmentModal';

const columns = [
  { key: 'type', title: 'Consult' },
  { key: 'pet', title: 'Pet' },
  { key: 'time', title: 'Time' },
  { key: 'day', title: 'Day' },
];
function ScrollAppointments() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedAppointment, setSelectedAppointment] = useState();
  const { appointmentWithPet, getClientAppointments } = appointmentsHook();
  const state = useSelector((state) => state.userData);
  const [rows, setRows] = useState([]);
  const finalRef = useRef(null);

  const handleSelect = (appointment) => {
    setSelectedAppointment(appointment);
    onOpen();
  };

  useEffect(() => {
    getClientAppointments(state.email);
  }, []);

  useEffect(() => {
    appointmentWithPet.length && setRows(appointmentWithPet);
  }, [appointmentWithPet]);

  return (
    <Stack width="100%">
      <DataTable
        title="Appointments"
        columns={columns}
        rows={rows}
        handleSelect={(appointment) => handleSelect(appointment)}
        isClickable={true}
        maxH="350px"
      />
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
    </Stack>
  );
}

export default ScrollAppointments;
