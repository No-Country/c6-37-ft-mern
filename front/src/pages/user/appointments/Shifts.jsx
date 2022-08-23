import React from 'react';
import { Box, Flex, Text }from '@chakra-ui/react';
import { MdOutlinePets } from 'react-icons/md';

const Shifts = (props) => {
  return (

      <Flex justifyContent="flex-start" gap='12px'>
            <MdOutlinePets fontWeight="bold" fontSize="5px" />
            <Text
              fontFamily="Anek Bangla, sans-serif"
              fontWeight="bold"
              fontSize="0.9rem"
            >
            {props.type}  -  {props.hour}  -  {props.date}
            </Text>
        </Flex>
  );
};

export default Shifts;