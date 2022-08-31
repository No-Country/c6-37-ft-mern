import { Stack, Text, Flex, Center } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import useUser from '../../../hooks/useUser';
import appointmentsHook from '../../../services/appointmentsHook';
import petsHook from '../../../services/petsHook';
import DateShift from '../appointments/DateShift';
import HistorialAppointment from './../appointments/HistorialAppointment';

function PreviousShifts() {
  const {getClientAppointments} = appointmentsHook();
  const { getPet } = petsHook();
  const { user } = useUser();
  const [consults, setConsults] = useState([]);
  const [consultsData, setConsultsData] = useState([]);

  const getAppointmentsData = async () => {
    let citas = [];
    let now = new Date();

    await getClientAppointments(user.email)
      .then((res) => {
        res.data.map((data) => {
          let date = new Date(data.day + ' ' + data.time);
          date < now && citas.push(data);
        });
      })
      .then(() => setConsultsData(citas))
      .catch((err) => console.log(err));
  };

  const getPetData = async (consult) => {
    await getPet(consult.pet).then((res) => {
      consult.pet = res.data;
      setConsults([...consults, consult]);
    });
  };

  useEffect(() => {
    consultsData.map((consult) => getPetData(consult));
  }, [consultsData]);

  useEffect(() => {
    getAppointmentsData();
  }, []);

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
