import { Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import Info from './Info';

function OwnerCont() {
  return (
    <Stack w='100%' gap='5'>
      <Heading
        as="h2"
        pl="2"
        fontFamily="Anek Bangla, sans-serif"
        fontWeight="bold"
        fontSize="24px"
      >
        Owner
      </Heading>
      <Info />
    </Stack>
  );
}

export default OwnerCont;
