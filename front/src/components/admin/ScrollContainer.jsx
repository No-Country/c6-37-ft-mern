import {
  Heading,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getOwnerPets } from './../../services/pets';
import DataTable from './../table/dataTable';

const columns = [
  { key: 'name', title: 'Name' },
  { key: 'specie', title: 'Specie' },
  { key: 'breed', title: 'Breed' },
];

const ScrollContainer = () => {
  const state = useSelector((state) => state.userData);
  const [rows, setRows] = useState([]);

  const getOwnerPetsData = async () => {
    await getOwnerPets(state.email)
      .then((pets) => setRows(pets.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    state.email && getOwnerPetsData();
  }, [state]);

  return (
    <Stack width="100%">
      <DataTable
        title="Pets"
        columns={columns}
        rows={rows}
        handleSelect={(pet) => handleSelect(pet)}
        isClickable={false}
        maxH="350px"
      />
    </Stack>
  );
};

export default ScrollContainer;
