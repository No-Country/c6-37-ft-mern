import {
  Box,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { BsFillXCircleFill, BsPlus } from "react-icons/bs";
import NewAppointment from "./../appointments/NewApointment";
import Shifts from "./../appointments/Shifts";


function NextShifts() {


  return (
    <>
      <Stack w="100%" p="20px" paddingY="20px">
        <Box display="flex" justifyContent="center" p="5px">
          <Text
            fontFamily="Anek Bangla, sans-serif"
            color="#0B8CBF"
            fontWeight="600"
            fontSize="1.7rem"
          >
            NEXT SHIFTS
          </Text>
        </Box>

        <Box display="flex" w="100%">
          <Box >
          <Shifts 
            type='Grooming'
            hour='02:00pm'
            date='01/10/22'/>
          </Box>

          <Box marginLeft="auto" display="flex">
            <BsFillXCircleFill
              color="#0B8CBF"
              fontSize="1.2rem"
              fontWeight="bold"
            />
            <Link>
              <Text
                fontFamily="Anek Bangla, sans-serif"
                marginLeft="5px"
                color="#0B8CBF"
                fontSize="0.9rem"
                fontWeight="bold"
              >
                Cancel
              </Text>
            </Link>
          </Box>
        </Box>

        <Box display="flex" w="100%">
          <Box >
            <Shifts 
            type='Grooming'
            hour='02:00pm'
            date='01/10/22'/>
          </Box>

          <Box marginLeft="auto" display="flex">
            <BsFillXCircleFill
              color="#0B8CBF"
              fontSize="1.2rem"
              fontWeight="bold"
            />
            <Link>
              <Text
                fontFamily="Anek Bangla, sans-serif"
                marginLeft="5px"
                color="#0B8CBF"
                fontSize="0.9rem"
                fontWeight="bold"
              >
                Cancel
              </Text>
            </Link>
          </Box>
        </Box>

        <Box display="flex" justifyContent="center">
        <NewAppointment/>
        </Box>
      </Stack>
      
    </>
  );
}

export default NextShifts;
