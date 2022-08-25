import React from 'react';
import { Accordion, Flex, Text } from '@chakra-ui/react';
import PetChip from './PetChip';
import { getOwnerPets } from './../../../services/pets';
import { useEffect } from 'react';
import { useState } from 'react';
import EditPet from './../pet/EditPet';
import useUser from './../../../hooks/useUser';

const PetsContainer = () => {
  const { user } = useUser();
  const [pets, setPets] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const getOwnerPetsData = async () => {

    await getOwnerPets(user.email).then((pets) => setPets(pets.data));
  };

  useEffect(() => {
    getOwnerPetsData();
    console.log(refresh);
  }, [refresh]);

  return (
    <>
      <Flex
        width="100%"
        alignItems="center"
        justifyContent="space-between"
        p={8}
      >
        <Text
          color="blue.500"
          fontSize="3xl"
          fontWeight="bold"
          fontFamily="Anek Bangla, sans-serif"
        >
          MY PETS
        </Text>
        <EditPet email={'pepe@example.com'} />
      </Flex>
      {pets.length > 0 ? (
        <Accordion allowToggle>
          {pets.map((pet) => (
            <PetChip key={pet.name} pet={pet} refresh={refresh} setRefresh={setRefresh} />
          ))}
        </Accordion>
      ) : (
        <Text m="6">No pets</Text>
      )}
    </>
  );
};

export default PetsContainer;
