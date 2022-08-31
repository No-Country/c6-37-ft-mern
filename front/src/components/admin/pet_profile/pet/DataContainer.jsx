import { Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import DataCard from './DataCard';
import EditToolPet from './EditToolPet';

function DataContainer({ petData }) {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap="20"
      >
        <Flex direction="column" gap="5">
          <DataCard label="name" text={petData.name} />
          <DataCard label="specie" text={petData.specie} />
          <DataCard label="weight" text={petData.weight} />
        </Flex>
        <Flex direction="column" gap="5">
          <DataCard label="breed" text={petData.breed} />
          <DataCard label="birth" text={petData.birth} />
        </Flex>
        <Flex direction="column" gap="5">
          <DataCard label="sex" text={petData.sex} />
          <DataCard label="size" text={petData.size} />
        </Flex>
        <EditToolPet />
      </Stack>

      <Stack direction="column" spacing="0px">
        <Text
          textTransform="capitalize"
          fontWeight="bold"
          fontFamily="Anek Bangla, sans-serif"
          fontSize="14px"
        >
          Note:
        </Text>
        <Text fontSize="15px" fontWeight="light" maxW='450px'>
          {petData.note}
        </Text>
      </Stack>
    </>
  );
}

export default DataContainer;
