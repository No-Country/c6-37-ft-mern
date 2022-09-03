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
  const [dataToShow, setDataToShow] = useState([]);
  const [filterInfo, setFilterInfo] = useState({
    name: '',
    phone: '',
    address: '',
  });
  const dispatch = useDispatch();
  const [selectedClient, setSelectedClient] = useState(null);

  const handleChange = (e) => {
    setFilterInfo({
      ...filterInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = async (client) => {
    let clientData;

    await getClient(client.email).then((res) => (clientData = res.data));

    setSelectedClient(clientData);
  };

  const handleBack = () => {
    dispatch(delUserData());
  };

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

  const filter = async () => {
    let clientesFiltrados = [];

    if (
      !!filterInfo.name  &&
      !!filterInfo.phone  &&
      !!filterInfo.address 
    ) {
      rows.map((row) => {
        if (
          row.name.toLowerCase().includes(filterInfo.name.toLowerCase()) &&
          row.phoneNumber
            .toLowerCase()
            .includes(filterInfo.phone.toLowerCase()) &&
          row.address.toLowerCase().includes(filterInfo.address.toLowerCase())
        ) {
          clientesFiltrados.push(row);
        }
      });
    } else if (!!filterInfo.name) {
      if (!!filterInfo.phone) {
        rows.map((row) => {
          if (
            row.name.toLowerCase().includes(filterInfo.name.toLowerCase()) &&
            row.phoneNumber
              .toLowerCase()
              .includes(filterInfo.phone.toLowerCase())
          ) {
            clientesFiltrados.push(row);
          }
        });
      } else if (!!filterInfo.address) {
        rows.map((row) => {
          if (
            row.name.toLowerCase().includes(filterInfo.name.toLowerCase()) &&
            row.address.toLowerCase().includes(filterInfo.address.toLowerCase())
          ) {
            clientesFiltrados.push(row);
          }
        });
      } else {
        rows.map((row) => {
          if (row.name.toLowerCase().includes(filterInfo.name.toLowerCase())) {
            clientesFiltrados.push(row);
          }
        });
      }
    } else if (!!filterInfo.phone) {
      if (!!filterInfo.address) {
        rows.map((row) => {
          if (
            row.phoneNumber
              .toLowerCase()
              .includes(filterInfo.phone.toLowerCase()) &&
            row.address.toLowerCase().includes(filterInfo.address.toLowerCase())
          ) {
            clientesFiltrados.push(row);
          }
        });
      } else {
        rows.map((row) => {
          if (
            row.phoneNumber
              .toLowerCase()
              .includes(filterInfo.phone.toLowerCase())
          ) {
            clientesFiltrados.push(row);
          }
        });
      }
    } else if (!!filterInfo.address) {
      rows.map((row) => {
        if (
          row.address.toLowerCase().includes(filterInfo.address.toLowerCase())
        ) {
          clientesFiltrados.push(row);
        }
      });
    }else{

      clientesFiltrados = rows;

    }

    setDataToShow(clientesFiltrados);
  };

  useEffect(() => {
    !!!filterInfo.name || !!!filterInfo.phone || !!!filterInfo.address
      ? setDataToShow([])
      : setDataToShow(rows);
    filter();
  }, [filterInfo]);

  useEffect(() => {
    selectedClient && dispatch(setUserData(selectedClient));
  }, [selectedClient]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setDataToShow(rows);
  }, [rows]);

  return (
    <Stack w={{base:'100%', lg:'auto'}} px={{base:4, lg:0}}>
      {selectedClient && state.name !== '' ? (
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
            <SearchBar
              search={['name', 'phone', 'address']}
              handleChange={handleChange}
            />

            <DataTable
              columns={columns}
              rows={dataToShow}
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
