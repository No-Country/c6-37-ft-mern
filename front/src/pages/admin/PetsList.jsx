import { Button, Heading, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import DataTable from '../../components/table/dataTable';
import SearchBar from './SearchBar';
import PetProfileContainer from './../../components/admin/pet_profile/PetProfileContainer';
let data = {
  columns: [
    { key: '1', title: 'Name' },
    { key: '2', title: 'Owner' },
    { key: '3', title: 'Specie' },
    { key: '4', title: 'Breed' },
  ],
  rows: [
    {
      name: 'Firulais',
      owner: 'Doe Gonzales',
      specie: 'Dog',
      breed: 'Jack Russell Terrier',
    },
    {
      name: 'Toby',
      owner: 'Gomez Smith',
      specie: 'Cat',
      breed: 'Persian',
    },
    {
      name: 'Dana',
      owner: 'Doe Gonzales',
      specie: 'Dog',
      breed: 'Labrador',
    },
    {
      name: 'Firulais',
      owner: 'Doe Gonzales',
      specie: 'Dog',
      breed: 'Jack Russell Terrier',
    },
    {
      name: 'Toby',
      owner: 'Gomez Smith',
      specie: 'Cat',
      breed: 'Persian',
    },
    {
      name: 'Dana',
      owner: 'Doe Gonzales',
      specie: 'Dog',
      breed: 'Labrador',
    },
    {
      name: 'Firulais',
      owner: 'Doe Gonzales',
      specie: 'Dog',
      breed: 'Jack Russell Terrier',
    },
    {
      name: 'Toby',
      owner: 'Gomez Smith',
      specie: 'Cat',
      breed: 'Persian',
    },
    {
      name: 'Dana',
      owner: 'Doe Gonzales',
      specie: 'Dog',
      breed: 'Labrador',
    },
    {
      name: 'Firulais',
      owner: 'Doe Gonzales',
      specie: 'Dog',
      breed: 'Jack Russell Terrier',
    },
    {
      name: 'Toby',
      owner: 'Gomez Smith',
      specie: 'Cat',
      breed: 'Persian',
    },
    {
      name: 'Dana',
      owner: 'Doe Gonzales',
      specie: 'Dog',
      breed: 'Labrador',
    },
    {
      name: 'Firulais',
      owner: 'Doe Gonzales',
      specie: 'Dog',
      breed: 'Jack Russell Terrier',
    },
    {
      name: 'Toby',
      owner: 'Gomez Smith',
      specie: 'Cat',
      breed: 'Persian',
    },
    {
      name: 'Dana',
      owner: 'Doe Gonzales',
      specie: 'Dog',
      breed: 'Labrador',
    },
    {
      name: 'Firulais',
      owner: 'Doe Gonzales',
      specie: 'Dog',
      breed: 'Jack Russell Terrier',
    },
    {
      name: 'Toby',
      owner: 'Gomez Smith',
      specie: 'Cat',
      breed: 'Persian',
    },
    {
      name: 'Dana',
      owner: 'Doe Gonzales',
      specie: 'Dog',
      breed: 'Labrador',
    },
    {
      name: 'Firulais',
      owner: 'Doe Gonzales',
      specie: 'Dog',
      breed: 'Jack Russell Terrier',
    },
    {
      name: 'Toby',
      owner: 'Gomez Smith',
      specie: 'Cat',
      breed: 'Persian',
    },
    {
      name: 'Dana',
      owner: 'Doe Gonzales',
      specie: 'Dog',
      breed: 'Labrador',
    },
    {
      name: 'Firulais',
      owner: 'Doe Gonzales',
      specie: 'Dog',
      breed: 'Jack Russell Terrier',
    },
    {
      name: 'Toby',
      owner: 'Gomez Smith',
      specie: 'Cat',
      breed: 'Persian',
    },
    {
      name: 'Dana',
      owner: 'Doe Gonzales',
      specie: 'Dog',
      breed: 'Labrador',
    },
    {
      name: 'Firulais',
      owner: 'Doe Gonzales',
      specie: 'Dog',
      breed: 'Jack Russell Terrier',
    },
    {
      name: 'Toby',
      owner: 'Gomez Smith',
      specie: 'Cat',
      breed: 'Persian',
    },
    {
      name: 'Dana',
      owner: 'Doe Gonzales',
      specie: 'Dog',
      breed: 'Labrador',
    },
  ],
};

const PetsList = () => {
  const [selectedPet, setSelectedPet] = useState(null);

  function handleSelect(pet) {
    setSelectedPet(pet);
  }

  return (
    <Stack>
      {selectedPet ? (
        <>
          <Button
            variantColor="blue"
            variant="outline"
            mb="28px"
            mt="20px"
            w="100px"
            leftIcon={<FiArrowLeft />}
            onClick={() => setSelectedPet(null)}
          >
            Back
          </Button>

          <PetProfileContainer />
        </>
      ) : (
        <>
          <Heading mb="48px">Pets</Heading>
          <Stack
            px={8}
            py={6}
            boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)"
          >
            <SearchBar search={['name', 'owner']} />
            <DataTable
              data={data}
              handleSelect={(pet) => handleSelect(pet)}
            />
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default PetsList;
