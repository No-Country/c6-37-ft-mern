import { Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getAppointments } from '../../services/appointments';
import { getClient, getClients } from '../../services/clients';
import { getPets } from '../../services/pets';
import DataTable from './../../components/table/dataTable';
import useUser from './../../hooks/useUser';
import CounterChip from './CounterChip';

const columns = [
  { key: 'type', title: 'Consult' },
  { key: 'client', title: 'Client' },
  { key: 'pet', title: 'Pet' },
  { key: 'time', title: 'Time' },
  { key: 'day', title: 'Day' },
];

const Dashboard = () => {
  const { user } = useUser();
  const [appointments, setAppointments] = useState([]);
  const [clients, setClients] = useState([]);
  const [pets, setPets] = useState([]);

  const getAppointmentsData = async () => {
    let citas = [];
    let now = new Date().toISOString().substring(0, 10);

    await getAppointments()
      .then((res) => {
        res.data.map((data) => {
          let date = new Date(data.day + ' ' + data.time)
            .toISOString()
            .substring(0, 10);
          date === now && citas.push(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });

    setAppointments(citas);
  };

  const getClientsData = async () => {
    await getClients()
      .then((res) => {
        setClients(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPetsData = async () => {
    await getPets()
      .then((res) => {
        setPets(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAppointmentsData();
    getClientsData();
    getPetsData();
  }, []);

  return (
    <Stack gap="48px">
      <Heading>Welcome</Heading>
      <Stack>
        <Grid templateColumns="repeat(3, 1fr)" gap="16px">
          <GridItem>
            <CounterChip
              title="Today Apointments"
              count={appointments.length}
            />
          </GridItem>
          <GridItem>
            <CounterChip title="Registered Clients" count={clients.length} />
          </GridItem>
          <GridItem>
            <CounterChip title="Registered Pets" count={pets.length} />
          </GridItem>
        </Grid>
      </Stack>
      <Stack px={8} py={6} boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)">
        <DataTable
          title={'Today Appointments'}
          columns={columns}
          rows={appointments}
          isClickable={false}
        />
      </Stack>
    </Stack>
  );
};

export default Dashboard;
