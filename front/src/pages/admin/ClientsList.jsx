import { Button, Heading, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import DataTable from './../../components/table/dataTable';
import { FiArrowLeft } from 'react-icons/fi';
import SearchBar from './SearchBar';
import ClientProfile from './ClientProfile';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delUserData, setUserData } from './../../redux/features/userSlice';
import { getClient, getClients } from './../../services/clients';

const columns = [
  { key: 'name', title: 'Name' },
  { key: 'lastName', title: 'Last Name' },
  { key: 'phoneNumber', title: 'Phone' },
  { key: 'address', title: 'Address' },
];

const ClientsList = () => {
  const state = useSelector((state) => state.userData);
  const [rows, setRows] = useState([]);
  const dispatch = useDispatch();

  const handleSelect = (client) => {
    dispatch(setUserData(client));
  };

  const handleBack = () => {
    dispatch(delUserData());
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let array = [];

    await getClients()
      .then((res) => {
        res.data.map((client) => {
          client.name && array.push(client);
        });
        setRows(array);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Stack>
      {state.name !== '' ? (
        <>
          <Button
            variantColor="blue"
            variant="outline"
            mb="28px"
            mt="20px"
            w="100px"
            leftIcon={<FiArrowLeft />}
            onClick={() => handleBack()}
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
              columns={columns}
              rows={rows}
              handleSelect={(client) => handleSelect(client)}
              isClickable={true}
            />
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default ClientsList;
