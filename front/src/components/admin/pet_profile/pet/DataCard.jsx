import { Stack, Text } from '@chakra-ui/react';
import React from 'react';

function DataCard(props) {
  return (
    <Stack direction="column" w="100%" spacing="0px" >
      <Text
        textTransform="capitalize"
        fontWeight="bold"
        fontFamily="Anek Bangla, sans-serif"
        fontSize="14px"
      >
        {props.label}:
      </Text>
      <Text textTransform="capitalize" fontSize="15px" fontWeight="light">
        {props.text}
      </Text>
    </Stack>
  );
}

export default DataCard;
