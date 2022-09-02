import { Stack, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import DataTable from '../../../table/dataTable';
import appointmentsHook from '../../../../services/appointmentsHook';
import AppointmentModal from '../../AppointmentModal';

const columns = [
  { key: 'type', title: 'Consult' },
  { key: 'time', title: 'Time' },
  { key: 'day', title: 'Day' },
];
function PetAppointments() {
  const state = useSelector((state) => state.petData);
  const [selectedAppointment, setSelectedAppointment] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getPetAppointments, appointmentWithClients } = appointmentsHook();
  const finalRef = useRef(null);

  const handleSelect = (appointment) => {
    setSelectedAppointment(appointment);
    onOpen();
  };

  useEffect(() => {
    state._id && getPetAppointments(state._id);
  }, [state]);

  return (
    <Stack width="100%">
      <DataTable
        title="Appointments"
        columns={columns}
        rows={appointmentWithClients}
        isClickable={true}
        handleSelect={(appointment) => handleSelect(appointment)}
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

export default PetAppointments;
