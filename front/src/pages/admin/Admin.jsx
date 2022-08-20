import { Heading, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import Dashboard from './Dashboard';
import ClientsList from './ClientsList';
import PetsList from './PetsList';
import Appointments from './Appointments';
import Menu from './menu';

const Admin = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <Stack mt="140px">
      <Menu activeItem={activeItem} setActiveItem={setActiveItem}>
        {activeItem === 'dashboard' && <Dashboard />}
        {activeItem === 'clients' && <ClientsList />}
        {activeItem === 'pets' && <PetsList />}
        {activeItem === 'appointments' && <Appointments />}
      </Menu>
    </Stack>
  );
};

export default Admin;
