import { Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import DataTable from '../../components/table/dataTable';
import SearchBar from './SearchBar';

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

const Pets = () => {
  return (
    <Stack gap="48px">
      <Heading>Pets</Heading>
      <Stack px={8} py={6} boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)">
        <SearchBar search={['name', 'owner']} />
        <DataTable data={data} />
      </Stack>
    </Stack>
  );
};

export default Pets;
