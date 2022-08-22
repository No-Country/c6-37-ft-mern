import { Button, Heading, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import DataTable from '../../components/table/dataTable';
import { FiArrowLeft } from 'react-icons/fi';
import SearchBar from './SearchBar';
import ClientProfile from './ClientProfile';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../redux/features/userSlice';

const columns = [
  { key: '1', title: 'Name' },
  { key: '2', title: 'Last Name' },
  { key: '3', title: 'Phone' },
  { key: '4', title: 'Address' },
];
const rows = [
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
];

const ClientsList = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [datos, setDatos] = useState([]);
  const dispatch = useDispatch();

  const state = useSelector((state) => state.userData);

  const handleSelect = async (client) => {
    await axios
      .get('https://pet-society-backend.herokuapp.com/clientes')
      .then((res) => {
        res.data.map((item) => {
          item.name === client.name && setSelectedClient(item);
        });
      })
      .catch((err) => {
        console.log(err);
      });

  };

  selectedClient && dispatch(setUserData(selectedClient));

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let array = [];

    await axios
      .get('https://pet-society-backend.herokuapp.com/clientes')
      .then((res) => {
        res.data.map((client) => {
          client.name &&
            array.push({
              name: client.name,
              lastName: client.lastName,
              phone: client.phoneNumber,
              address: client.address,
            });
        });
        setDatos(array);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

            {datos.length > 0 ? (
              <DataTable
                columns={columns}
                rows={datos}
                handleSelect={(client) => handleSelect(client)}
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

export default ClientsList;
