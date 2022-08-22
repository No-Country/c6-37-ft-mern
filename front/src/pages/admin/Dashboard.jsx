import { Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from '../../components/table/dataTable';
import useUser from '../../hooks/useUser';
import CounterChip from './CounterChip';

const columns = [
  { key: '1', title: 'Consult' },
  { key: '2', title: 'Client' },
  { key: '3', title: 'Pet' },
  { key: '4', title: 'Time' },
  { key: '5', title: 'Day' },
];
const rows = [
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
];

const appointmentsUrl =
  'https://pet-society-backend.herokuapp.com/appointments';
const usersUrl = 'https://pet-society-backend.herokuapp.com/clientes';
const petsUrl = 'https://pet-society-backend.herokuapp.com/mascotas';

const Dashboard = () => {
  const { user } = useUser();
  const [chipItems, setChipItems] = useState([]);

  useEffect(() => {
    getChipData();
  },[]);

  const getChipData = async () => {
    // await axios
    //   .all([
    //     axios.get(appointmentsUrl),
    //     axios.get(usersUrl),
    //     axios.get(petsUrl),
    //   ])
    //   .then((res) => {
    //     setChipItems([
    //       { title: 'Today Appointments', count: res[0].data.length },
    //       { title: 'Registered Users', count: res[1].data.length },
    //       { title: 'Registered Pets', count: res[2].data.length },
    //     ]);
    //   });

    await axios.get(usersUrl).then((res) => {
      setChipItems([
          { title: 'Today Appointments', count: 0 },
          { title: 'Registered Users', count: res.data.length },
          { title: 'Registered Pets', count: 0 },
      ]);
    });
  };

  return (
    <Stack gap="48px">
      <Heading>Welcome Dr. {user.name}</Heading>
      <Stack>
        <Grid templateColumns="repeat(3, 1fr)" gap="16px">
          {chipItems.map((item, index) => (
            <GridItem key={index}>
              <CounterChip item={item} />
            </GridItem>
          ))}
        </Grid>
      </Stack>
      <Stack px={8} py={6} boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)">
        <DataTable title={'Today Appointments'} columns={columns} rows={rows} />
      </Stack>
    </Stack>
  );
};

export default Dashboard;
