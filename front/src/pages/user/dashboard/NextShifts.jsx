import { Stack, Text, Flex, useToast, Center } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import useUser from '../../../hooks/useUser';
import appointmentsHook from '../../../services/appointmentsHook';
import petsHook from '../../../services/petsHook';
import DateShift from '../appointments/DateShift';
import NewAppointment from './../appointments/NewApointment';

function NextShifts() {
  const { deleteAppointment, getClientAppointments } = appointmentsHook();
  const { getPet } = petsHook();
  const toast = useToast();
  const { user } = useUser();
  const [consults, setConsults] = useState([]);
  const [consultsData, setConsultsData] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [citas, setCitas] = useState([]);

  const getAppointmentsData = async () => {
    let now = new Date();
    await getClientAppointments(user.email)
      .then((res) => {
        res.data.map((data) => {
          let date = new Date(`${data.day} ${data.time}`);
          date >= now && setCitas(data);
          console.log(data);
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

  const deleteShiftData = async (selectedConsult) => {
    await deleteAppointment(selectedConsult._id)
      .then(() => {
        toast({
          title: 'Success',
          description: 'Appointment deleted successfully',
          status: 'success',
          duration: 6000,
          position: 'bottom-right',
          isClosable: true,
        });
      })
      .then(refreshShifts())
      .catch((err) => console.log(err));
  };

  const refreshShifts = () => {
    setRefresh(refresh + 1);
  };

  useEffect(() => {
    // consultsData.map((consult) => getPetData(consult));
    console.log(consultsData);
  }, [consultsData]);

  useEffect(() => {
    getAppointmentsData();
    // console.log('entro');
  }, [refresh]);

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
          NEXT SHIFTS
        </Text>

        <Flex direction="column" w="100%">
          {consultsData.length > 0 ? (
            consultsData.map((consult) => (
              <DateShift
                key={consult._id}
                consult={consult}
                isDeleteable={true}
                haveDeleteModal={true}
                deleteShiftData={(selectedConsult) =>
                  deleteShiftData(selectedConsult)
                }
              />
            ))
          ) : (
            <Center>
              <Text opacity="0.5">
                You don't have shifts. please create one
              </Text>
            </Center>
          )}
        </Flex>

        <NewAppointment refreshShifts={() => refreshShifts()} />
      </Flex>
    </Stack>
  );
}

export default NextShifts;
