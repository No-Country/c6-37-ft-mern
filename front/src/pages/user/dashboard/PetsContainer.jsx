import React from 'react';
import { Accordion, Flex, Text } from '@chakra-ui/react';
import PetChip from './PetChip';
import AddPet from '../pet/AddPet';
import { getOwnerPets } from './../../../services/pets';
import { useEffect } from 'react';
import { useState } from 'react';
import PetModal from '../pet/PetModal';
import useUser from '../../../hooks/useUser';

const petEx = {
  name: 'Firulais',
  specie: 'Canine',
  breed: 'Jack Russel',
  sex: 'Male',
  size: 'Mini',
  birth: '16/03/18',
  weight: '12',
  note: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
  img: '/assets/dog.png',
};

const PetsContainer = () => {
  const { user } = useUser();
  const [pets, setPets] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const getOwnerPetsData = async () => {
    await getOwnerPets(user.email).then((pets) => setPets(pets.data));
  };

  useEffect(() => {
    getOwnerPetsData();
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
        <PetModal refresh={refresh} setRefresh={setRefresh} email={'pepe@example.com'} />
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
