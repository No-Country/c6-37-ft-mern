import { Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import appointmentsHook from '../../services/appointmentsHook';
import { getClient, getClients } from '../../services/clients';
import petsHook from '../../services/petsHook';
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
  const {getPets, pets} = petsHook(); 
  const { appointmentWithClients, getAppointments } = appointmentsHook();
  const [appointments, setAppointments] = useState([]);
  const [clients, setClients] = useState([]);

  const getAppointmentsData = async () => {
    let citas = appointmentWithClients;
    let citasFiltradas= [];
    let now = new Date().toISOString().substring(0, 10);

     await Promise.all(
      citas.map(async (cita) => {
        let date = new Date(cita.day + ' ' + cita.time)
          .toISOString()
          .substring(0, 10);
         date === now && citasFiltradas.push(cita);
      })
    );

    setAppointments(citasFiltradas);
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

  useEffect(() => {
    getAppointments();
    getClientsData();
    getPets();
  }, []);

  useEffect(() => {
    appointmentWithClients.length > 0 && getAppointmentsData();
  }, [appointmentWithClients]);

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
