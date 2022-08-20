import { Button, Heading, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import DataTable from '../../components/table/dataTable';
import { FiArrowLeft } from 'react-icons/fi';
import SearchBar from './SearchBar';
import ClientProfile from './ClientProfile';

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

const ClientsList = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  function handleSelect(client) {
    setSelectedClient(client);
  }

  return (
    <Stack>
      {selectedClient ? (
        <>
          <Button
            variantColor="blue"
            variant="outline"
            mb="28px"
            mt="20px"
            w="100px"
            leftIcon={<FiArrowLeft />}
            onClick={() => setSelectedClient(null)}
          >
            Back
          </Button>

          <ClientProfile />
        </>
      ) : (
        <>
          <Heading mb="48px">Clients</Heading>
          <Stack
            px={8}
            py={6}
            boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)"
          >
            <SearchBar search={['name', 'phone', 'address']} />
            <DataTable
              data={data}
              handleSelect={(client) => handleSelect(client)}
            />
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default ClientsList;
