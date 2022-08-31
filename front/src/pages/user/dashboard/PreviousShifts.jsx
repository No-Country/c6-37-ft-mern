import { Stack, Text, Flex, Center } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import useUser from '../../../hooks/useUser';
import appointmentsHook from '../../../services/appointmentsHook';
import petsHook from '../../../services/petsHook';
import DateShift from '../appointments/DateShift';
import HistorialAppointment from './../appointments/HistorialAppointment';

function PreviousShifts() {
  const {getClientAppointments,appointmentWithPet} = appointmentsHook();
  const { user } = useUser();
  const [consultsData, setConsultsData] = useState([]);

  const getAppointmentsData = async () => {
    let citas = appointmentWithPet;
    let citasFiltradas = [];
    let now = new Date();

    await Promise.all(
      citas.map(async (cita) => {
        let date = new Date(cita.day + ' ' + cita.time);
        date < now && citasFiltradas.push(cita);
      })
    ).catch((err) => console.log(err));

    setConsultsData(citasFiltradas);

  };

  useEffect(() => {
    getClientAppointments(user.email);
  }, []);

  useEffect(() => {
    appointmentWithPet.length > 0 && getAppointmentsData();
  }, [appointmentWithPet]);

  return (
    <Stack py="20px">
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="10px"
      >
        <Text
          fontFamily="Anek Bangla, sans-serif"
          color="#0B8CBF"
          fontWeight="600"
          fontSize="1.7rem"
        >
          PREVIOUS SHIFTS
        </Text>

        <Flex direction="column" w="100%">
          {consultsData.length > 0 ? (
            consultsData.map((consult, index) => (
              <DateShift
                key={index}
                consult={consult}
                isDeleteable={false}
                haveDeleteModal={false}
                deleteShiftData={(selectedConsult) =>
                  deleteShiftData(selectedConsult)
                }
              />
            ))
          ) : (
            <Center>
              <Text opacity="0.5">You shifts historial is already empty</Text>
            </Center>
          )}
        </Flex>
        <HistorialAppointment consultsData={consultsData} />
      </Flex>
    </Stack>
  );
}

export default PreviousShifts;
