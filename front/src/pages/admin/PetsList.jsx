import { Button, Heading, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import DataTable from '../../components/table/dataTable';
import SearchBar from './SearchBar';
import PetProfileContainer from './../../components/admin/pet_profile/PetProfileContainer';
import { useDispatch } from 'react-redux';
import { setPetData } from '../../redux/features/petSlice';
import { useEffect } from 'react';
import { getPet, getPets } from '../../services/pets';
import { getClient } from '../../services/clients';
const columns = [
  { key: 'name', title: 'Name' },
  { key: 'owner', title: 'Owner' },
  { key: 'specie', title: 'Specie' },
  { key: 'breed', title: 'Breed' },
];
const rows = [
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
];

const PetsList = () => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);
  const [rows, setRows] = useState([]);
  const dispatch = useDispatch();

  const handleSelect = async (pet) => {
    let petData;
    let clientData;

    await getPet(pet._id).then((pet) => (petData = pet.data));

    await getClient(petData.owner).then((client) => (clientData = client.data));

    console.log(petData);
    console.log(clientData);

    setSelectedPet(petData);
    setSelectedClient(clientData);

  };

  const getPetsData = async (pets) => {
    await getPets()
      .then((res) => {
        res.data.map((pet) => {
          pets.push(pet);
        });
      })
      .catch((error) => console.log(error));

    return pets;
  };

  const getOwnerData = async (pet) => {
    let client;
    await getClient(pet.owner)
      .then((res) => {
        client = res.data;
      })
      .catch((error) => console.log(error));

    return client;
  };

  useEffect(() => {
    let pets = [];
    getPetsData(pets).then((res) => {
      res.map((pet) => {
        getOwnerData(pet)
          .then((owner) => {

            pet.owner = owner.name + ' ' + owner.lastName;
          })
          .catch((error) => console.log(error));
      });

      setRows(pets);
    });
  }, []);

  useEffect(() => {
    selectedPet && dispatch(setPetData(selectedPet));
  }, [selectedPet]);

  useEffect(() => {
    selectedClient && dispatch(setUserData(selectedClient));
  }, [selectedClient]);

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

            {rows.length > 0 ? (
              <DataTable
                columns={columns}
                rows={rows}
                handleSelect={(pet) => handleSelect(pet)}
              />
            ) : (
              <Text>Loading data...</Text>
            )}
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default PetsList;
