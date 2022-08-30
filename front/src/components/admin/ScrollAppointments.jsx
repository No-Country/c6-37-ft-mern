import { Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getClientAppointments } from '../../services/appointments';
import DataTable from '../table/dataTable';

const columns = [
  { key: 'type', title: 'Consult' },
  { key: 'pet', title: 'Pet' },
  { key: 'time', title: 'Time' },
  { key: 'day', title: 'Day' },
];
function ScrollAppointments() {
  const state = useSelector((state) => state.userData);
  const [rows, setRows] = useState([]);

  const getClientAppointmentsData = async () => {
    await getClientAppointments(state.email)
      .then((pets) => setRows(pets.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    state.email && getClientAppointmentsData();
  }, [state]);

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
