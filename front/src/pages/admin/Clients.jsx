import { Button, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import DataTable from '../../components/table/dataTable';
// import { FiArrowLeft } from 'react-icons/fi';
import SearchBar from './SearchBar';

let data = {
  columns: [
    { key: '1', title: 'Name' },
    { key: '2', title: 'Last Name' },
    { key: '3', title: 'Phone' },
    { key: '4', title: 'Address' },
  ],
  rows: [
    {
      name: 'John Antonio',
      lastName: 'Doe Gonzales',
      phone: '+01 984 039 492',
      address: 'Contoso Ltd 215 E Tasman CA San Jose',
    },
    {
      name: 'Maria Antonieta',
      lastName: 'Gomez Smith',
      phone: '+01 971 123 999',
      address: 'San Jose Tasman Contoso Ltd 215',
    },
    {
      name: 'John Antonio',
      lastName: 'Doe Gonzales',
      phone: '+01 984 039 492',
      address: 'Contoso Ltd 215 E Tasman CA San Jose',
    },
    {
      name: 'Maria Antonieta',
      lastName: 'Gomez Smith',
      phone: '+01 971 123 999',
      address: 'San Jose Tasman Contoso Ltd 215',
    },
    {
      name: 'John Antonio',
      lastName: 'Doe Gonzales',
      phone: '+01 984 039 492',
      address: 'Contoso Ltd 215 E Tasman CA San Jose',
    },
    {
      name: 'Maria Antonieta',
      lastName: 'Gomez Smith',
      phone: '+01 971 123 999',
      address: 'San Jose Tasman Contoso Ltd 215',
    },
    {
      name: 'John Antonio',
      lastName: 'Doe Gonzales',
      phone: '+01 984 039 492',
      address: 'Contoso Ltd 215 E Tasman CA San Jose',
    },
    {
      name: 'Maria Antonieta',
      lastName: 'Gomez Smith',
      phone: '+01 971 123 999',
      address: 'San Jose Tasman Contoso Ltd 215',
    },
    {
      name: 'John Antonio',
      lastName: 'Doe Gonzales',
      phone: '+01 984 039 492',
      address: 'Contoso Ltd 215 E Tasman CA San Jose',
    },
    {
      name: 'Maria Antonieta',
      lastName: 'Gomez Smith',
      phone: '+01 971 123 999',
      address: 'San Jose Tasman Contoso Ltd 215',
    },
    {
      name: 'John Antonio',
      lastName: 'Doe Gonzales',
      phone: '+01 984 039 492',
      address: 'Contoso Ltd 215 E Tasman CA San Jose',
    },
    {
      name: 'Maria Antonieta',
      lastName: 'Gomez Smith',
      phone: '+01 971 123 999',
      address: 'San Jose Tasman Contoso Ltd 215',
    },
    {
      name: 'John Antonio',
      lastName: 'Doe Gonzales',
      phone: '+01 984 039 492',
      address: 'Contoso Ltd 215 E Tasman CA San Jose',
    },
    {
      name: 'Maria Antonieta',
      lastName: 'Gomez Smith',
      phone: '+01 971 123 999',
      address: 'San Jose Tasman Contoso Ltd 215',
    },
    {
      name: 'John Antonio',
      lastName: 'Doe Gonzales',
      phone: '+01 984 039 492',
      address: 'Contoso Ltd 215 E Tasman CA San Jose',
    },
    {
      name: 'Maria Antonieta',
      lastName: 'Gomez Smith',
      phone: '+01 971 123 999',
      address: 'San Jose Tasman Contoso Ltd 215',
    },
    {
      name: 'John Antonio',
      lastName: 'Doe Gonzales',
      phone: '+01 984 039 492',
      address: 'Contoso Ltd 215 E Tasman CA San Jose',
    },
    {
      name: 'Maria Antonieta',
      lastName: 'Gomez Smith',
      phone: '+01 971 123 999',
      address: 'San Jose Tasman Contoso Ltd 215',
    },
  ],
};

const Clients = () => {
  return (
    <Stack gap="48px">
      {/* <Button
        variantColor="blue"
        variant="outline"
        w="100px"
        mt="20px"
        leftIcon={<FiArrowLeft />}
      >
        Back
      </Button> */}

      <Heading>Clients</Heading>

      <Stack px={8} py={6} boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)">
        <SearchBar search={['name', 'phone', 'address']} />
        <DataTable data={data} />
      </Stack>
    </Stack>
  );
};

export default Clients;
