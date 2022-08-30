import { Avatar, HStack, Stack } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import PetProfileEdit from './../editable/PetProfileEdit';
import DataContainer from './DataContainer';
import EditToolPet from './EditToolPet';

function PetProfile() {
  const petData = useSelector((state) => state.petData);

  return (
    <HStack w='100%' alignItems="center" justifyContent="center" gap='16'>
      <Avatar
        src={petData.imgUrl}
        name={petData.name}
        size="xl"
        alignSelf="center"
      />

      <Stack w='100%' justifyContent="center">
        {petData.editable ? (
          <PetProfileEdit />
        ) : (
          <DataContainer petData={petData} />
        )}
      </Stack>

      <EditToolPet />
    </HStack>
  );
}

export default PetProfile;
