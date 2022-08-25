import { Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import DataTable from './../../components/table/dataTable';
import SearchBar from './SearchBar';

const columns = [
  { key: '1', title: 'Consult' },
  { key: '2', title: 'Client' },
  { key: '3', title: 'Pet' },
  { key: '4', title: 'Hour' },
  { key: '5', title: 'Day' },
];
const rows = [
  {
    consult: 'Grooming',
    client: 'Doe Gonzales',
    pet: 'Firulais',
    time: '03:00pm',
    day: '16/08/22',
  },
  {
    consult: 'Spa session',
    client: 'Maria Antonieta',
    pet: 'Doby',
    time: '03:30pm',
    day: '16/08/22',
  },
  {
    consult: 'Medical checkup',
    client: 'Cruz Cruces',
    pet: 'pihuicho',
    time: '04:30pm',
    day: '21/02/22',
  },
  {
    consult: 'Grooming',
    client: 'Doe Gonzales',
    pet: 'Firulais',
    time: '03:00pm',
    day: '16/08/22',
  },
  {
    consult: 'Spa session',
    client: 'Maria Antonieta',
    pet: 'Doby',
    time: '03:30pm',
    day: '16/08/22',
  },
  {
    consult: 'Medical checkup',
    client: 'Cruz Cruces',
    pet: 'pihuicho',
    time: '04:30pm',
    day: '21/02/22',
  },
  {
    consult: 'Grooming',
    client: 'Doe Gonzales',
    pet: 'Firulais',
    time: '03:00pm',
    day: '16/08/22',
  },
  {
    consult: 'Spa session',
    client: 'Maria Antonieta',
    pet: 'Doby',
    time: '03:30pm',
    day: '16/08/22',
  },
  {
    consult: 'Medical checkup',
    client: 'Cruz Cruces',
    pet: 'pihuicho',
    time: '04:30pm',
    day: '21/02/22',
  },
  {
    consult: 'Grooming',
    client: 'Doe Gonzales',
    pet: 'Firulais',
    time: '03:00pm',
    day: '16/08/22',
  },
  {
    consult: 'Spa session',
    client: 'Maria Antonieta',
    pet: 'Doby',
    time: '03:30pm',
    day: '16/08/22',
  },
  {
    consult: 'Medical checkup',
    client: 'Cruz Cruces',
    pet: 'pihuicho',
    time: '04:30pm',
    day: '21/02/22',
  },
];

const Appointments = () => {
  return (
    <Stack gap="48px">
      <Heading>Appointments</Heading>

      <Stack px={8} py={6} boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)">
        <SearchBar search={['consult', 'client', 'pet']} />
        <DataTable columns={columns} rows={rows} />
      </Stack>
    </Stack>
  );
};

export default Appointments;
