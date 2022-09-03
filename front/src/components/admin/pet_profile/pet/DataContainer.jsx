import { Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import DataCard from './DataCard';
import EditToolPet from './EditToolPet';

function DataContainer({ petData }) {
  return (
    <>
      <Stack
        direction={{ lg: 'row', base: 'column' }}
        justifyContent={{ lg: 'flex-start', base: 'center' }}
        alignItems={{ lg: 'flex-start', base: 'center' }}
        gap={{lg:"20",base:'5'}}
      >
        <Stack
          direction={'column'}
          w="100%"
          gap="2"
          justifyContent={{ lg: 'start', base: 'center' }}
        >
          <Flex direction={{sm:"row", base:'column'}} gap="5">
            <DataCard label="name" text={petData.name} />
            <DataCard label="breed" text={petData.breed} />
            <DataCard label="specie" text={petData.specie} />
            
          </Flex>
          <Flex direction={{sm:"row", base:'column'}} gap="5">
            <DataCard label="sex" text={petData.sex} />
            <DataCard label="birth" text={petData.birth} />
            <DataCard label="size" text={petData.size} />
          </Flex>
          <Flex direction={{sm:"row", base:'column'}} gap="5">
          <DataCard label="weight" text={petData.weight} />
            
          </Flex>
          <Flex direction="column" spacing="0px">
            <Text
              textTransform="capitalize"
              fontWeight="bold"
              fontFamily="Anek Bangla, sans-serif"
              fontSize="14px"
            >
              Note:
            </Text>
            <Text fontSize="15px" fontWeight="light" maxW="450px">
              {petData.note}
            </Text>
          </Flex>
        </Stack>

        <EditToolPet />
      </Stack>
    </>
  );
}

export default DataContainer;
