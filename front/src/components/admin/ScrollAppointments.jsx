import { Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import appointmentsHook from '../../services/appointmentsHook';
import DataTable from '../table/dataTable';

const columns = [
  { key: 'type', title: 'Consult' },
  { key: 'pet', title: 'Pet' },
  { key: 'time', title: 'Time' },
  { key: 'day', title: 'Day' },
];
function ScrollAppointments() {
  const { appointmentWithPet, getClientAppointments } = appointmentsHook();
  const state = useSelector((state) => state.userData);
  const [rows, setRows] = useState([]);

  useEffect(()=>{

    getClientAppointments(state.email);

  },[])

  useEffect(() => {
    appointmentWithPet.length && setRows(appointmentWithPet);
  }, [appointmentWithPet]);

  return (
    <Stack width="100%">
      <DataTable
        title="Appointments"
        columns={columns}
        rows={rows}
        handleSelect={(pet) => handleSelect(pet)}
        isClickable={false}
        maxH="350px"
      />
    </Stack>
  );
}

export default ScrollAppointments;
