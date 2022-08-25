import { Box,  Stack, Text, Link, Flex } from '@chakra-ui/react';
import React from 'react';
import HistorialAppointment from './../appointments/HistorialAppointment';
import Shifts from './../appointments/Shifts';

function PreviousShifts() {
  return (
    <Stack w="100%" p="20px">
      <Flex justifyContent="center" p="5px">
        <Text
          fontFamily="Anek Bangla, sans-serif"
          color="#0B8CBF"
          fontWeight="600"
          fontSize="1.7rem"
        >
          PREVIOUS SHIFTS
        </Text>
      </Flex>

      <Flex w="100%" justifyContent="flex-start">
        <Box>
          <Shifts type="Grooming" hour="02:00pm" date="01/10/22" />
        </Box>
      </Flex>
      <Flex w="100%" justifyContent="flex-start">
        <Box>
          <Shifts type="Grooming" hour="02:00pm" date="01/10/22" />
        </Box>
      </Flex>

      <Flex justifyContent="center">
        <HistorialAppointment />
      </Flex>
    </Stack>
  );
}

export default PreviousShifts;
