import { Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
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
  const {appointmentWithClients, getAppointments} = appointmentsHook();

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <Stack gap="48px">
      <Heading>Appointments</Heading>

      <Stack px={8} py={6} boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)">
        <SearchBar search={['consult', 'client', 'pet']} />
        <DataTable columns={columns} rows={appointmentWithClients} isClickable={false} />
      </Stack>
    </Stack>
  );
};

export default AppointmentsList;
