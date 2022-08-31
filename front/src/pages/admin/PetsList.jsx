import { Button, Heading, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import DataTable from './../../components/table/dataTable';
import SearchBar from './SearchBar';
import PetProfileContainer from './../../components/admin/pet_profile/PetProfileContainer';
import { useDispatch, useSelector } from 'react-redux';
import { setPetData } from './../../redux/features/petSlice';
import { useEffect } from 'react';
import { getClient } from './../../services/clients';
import { setUserData } from './../../redux/features/userSlice';
import petsHook from '../../services/petsHook';

const columns = [
  { key: 'name', title: 'Name' },
  { key: 'owner', title: 'Owner' },
  { key: 'specie', title: 'Specie' },
  { key: 'breed', title: 'Breed' },
];

const PetsList = () => {
  const { petsWithOwner, getPets,getPet } = petsHook();
  const state = useSelector((state) => state.petData);
  const [selectedPet, setSelectedPet] = useState(null);
  const [selectedClient, setSelectedClient] = useState(null);
  const dispatch = useDispatch();

  const handleSelect = async (pet) => {
    let petData;
    let clientData;

    await getPet(pet._id).then((pet) => (petData = pet.data));
    await getClient(petData.owner).then((client) => (clientData = client.data));

    setSelectedPet(petData);
    setSelectedClient(clientData);
  };

  useEffect(() => {
    getPets();
  }, []);

  useEffect(() => {
    selectedPet && dispatch(setPetData(selectedPet));
  }, [selectedPet]);

  useEffect(() => {
    selectedClient && dispatch(setUserData(selectedClient));
  }, [selectedClient]);

  return (
    <Stack>
      {selectedPet && state.name !== '' ? (
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
              columns={columns}
              rows={petsWithOwner}
              handleSelect={(pet) => handleSelect(pet)}
              isClickable={true}
            />
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default PetsList;
