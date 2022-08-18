import React from 'react';
import { Box, Text }from '@chakra-ui/react';
import { MdOutlinePets } from 'react-icons/md';

const Shifts = (props) => {
  return (

      <Box display="flex" justifyContent="flex-start">
            <MdOutlinePets fontWeight="bold" fontSize="1.2rem" />
            <Text
              fontFamily="Anek Bangla, sans-serif"
              fontWeight="bold"
              marginLeft="5px"
              fontSize="0.9rem"
            >
            {props.type} - {props.hour} - {props.date}
            </Text>
        </Box>
  );
};

export default Shifts;