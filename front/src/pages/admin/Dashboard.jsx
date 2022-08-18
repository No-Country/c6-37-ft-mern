import { Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import DataTable from '../../components/table/dataTable';
import useUser from '../../hooks/useUser';
import CounterChip from './CounterChip';

let chipItems = [
  { key: '1', title: 'Today Appointments', count: '09' },
  { key: '2', title: 'Registered Users', count: '64' },
  { key: '3', title: 'Registered Pets', count: '82' },
];

let data = {
  columns: [
    { key: '1', title: 'Consult' },
    { key: '2', title: 'Client' },
    { key: '3', title: 'Pet' },
    { key: '4', title: 'Time' },
    { key: '5', title: 'Day' },
  ],
  rows: [
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet: 'Firulais',
      hour: '03:30pm',
      day: '16/08/22',
    },
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet: 'Firulais',
      hour: '03:30pm',
      day: '16/08/22',
    },
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet: 'Firulais',
      hour: '03:30pm',
      day: '16/08/22',
    },
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet: 'Firulais',
      hour: '03:30pm',
      day: '16/08/22',
    },
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet: 'Firulais',
      hour: '03:30pm',
      day: '16/08/22',
    },
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet: 'Firulais',
      hour: '03:30pm',
      day: '16/08/22',
    },
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet: 'Firulais',
      hour: '03:30pm',
      day: '16/08/22',
    },
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet: 'Firulais',
      hour: '03:30pm',
      day: '16/08/22',
    },
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet: 'Firulais',
      hour: '03:30pm',
      day: '16/08/22',
    },
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet: 'Firulais',
      hour: '03:30pm',
      day: '16/08/22',
    },
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet: 'Firulais',
      hour: '03:30pm',
      day: '16/08/22',
    },
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet: 'Firulais',
      hour: '03:30pm',
      day: '16/08/22',
    },
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet: 'Firulais',
      hour: '03:30pm',
      day: '16/08/22',
    },
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet: 'Firulais',
      hour: '03:30pm',
      day: '16/08/22',
    },
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet: 'Firulais',
      hour: '03:30pm',
      day: '16/08/22',
    },
    {
      consult: 'grooming',
      client: 'Maria Antonieta',
      pet: 'Firulais',
      hour: '03:30pm',
      day: '16/08/22',
    },
  ],
};

const Dashboard = () => {
  const { user } = useUser();

  return (
    <Stack gap="48px">
      <Heading>Welcome Dr. {user.name}</Heading>
      <Stack>
        <Grid templateColumns="repeat(3, 1fr)" gap="16px">
          {chipItems.map((item) => (
            <GridItem key={item.key}>
              <CounterChip item={item} />
            </GridItem>
          ))}
        </Grid>
      </Stack>
      <Stack px={8} py={6} boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)">
        <DataTable title={'Today Appointments'} data={data} />
      </Stack>
    </Stack>
  );
};

export default Dashboard;
