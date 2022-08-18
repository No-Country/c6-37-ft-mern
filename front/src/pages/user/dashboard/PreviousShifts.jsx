import { Box, Button, Stack, Text, Link } from "@chakra-ui/react";
import React from "react";
import { BsFillXCircleFill, BsPlus } from "react-icons/bs";
import { MdOutlinePets } from "react-icons/md";
import HistorialAppointment from "../appointments/HistorialAppointment";
import Shifts from "../appointments/Shifts";

function PreviousShifts() {
  return (
    <Stack w="100%" p="20px" paddingY='20px' >
      <Box display="flex" justifyContent="center" p="5px">
        <Text
          fontFamily="Anek Bangla, sans-serif"
          color="#0B8CBF"
          fontWeight="600"
          fontSize="1.7rem"
        >
          PREVIOUS SHIFTS
        </Text>
      </Box>

      <Box display="flex" w="100%" justifyContent='center'>
        <Box >
        <Shifts 
            type='Grooming'
            hour='02:00pm'
            date='01/10/22'/>
        </Box>
      </Box>
      <Box display="flex" w="100%" justifyContent='center'>
        <Box>
        <Shifts 
            type='Grooming'
            hour='02:00pm'
            date='01/10/22'/>
        </Box>
      </Box>



      <Box display="flex" justifyContent="center">
        <HistorialAppointment />
      </Box>
    </Stack>
  );
}

export default PreviousShifts;
