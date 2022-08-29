import { Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const DatosCard = (props) => {
  return (
    <Flex direction="column" w="100%" h="51px">
      <Text
        fontWeight="bold"
        fontFamily="Anek Bangla, sans-serif"
        fontSize="15px"
      >
        {props.title}:
      </Text>
      <Text fontWeight="light" fontSize="16px">
        {props.text}
      </Text>
    </Flex>
  );
};

export default DatosCard;
