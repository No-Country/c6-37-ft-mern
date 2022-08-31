import { Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import DataTable from '../../../table/dataTable';
import appointmentsHook from '../../../../services/appointmentsHook';

const columns = [
  { key: 'type', title: 'Consult' },
  { key: 'time', title: 'Time' },
  { key: 'day', title: 'Day' },
];
function PetAppointments() {
  const {getPetAppointments} = appointmentsHook();
  const state = useSelector((state) => state.petData);
  const [rows, setRows] = useState([]);

  const getPetAppointmentsData = async () => {
    await getPetAppointments(state._id)
      .then((res) => setRows(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    state._id && getPetAppointmentsData();
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

export default PetAppointments;
