import { Avatar, HStack, Stack } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import PetProfileEdit from './../editable/PetProfileEdit';
import DataContainer from './DataContainer';
import EditToolPet from './EditToolPet';

function PetProfile() {
  const petData = useSelector((state) => state.petData);

  return (
    <Stack
      direction={{ lg: 'row', base: 'column' }}
      w="100%"
      alignItems={{ lg: 'flex-start', base: 'center' }}
      justifyContent="center"
      gap={{lg:"16",base:'8'}}
    >
      <Avatar src={petData.imgUrl} name={petData.name} size="xl" />

      <Stack w="100%" justifyContent="center">
        {petData.editable ? (
          <PetProfileEdit />
        ) : (
          <DataContainer petData={petData} />
        )}
      </Stack>
    </Stack>
  );
}

export default PetProfile;
