import { Heading, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Clients from './Clients';
import Pets from './Pets';
import Appointments from './Appointments';
import Menu from './menu';

const Admin = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <Stack mt="140px">
      <Menu activeItem={activeItem} setActiveItem={setActiveItem}>
        {activeItem === 'dashboard' && <Dashboard />}
        {activeItem === 'clients' && <Clients />}
        {activeItem === 'pets' && <Pets />}
        {activeItem === 'appointments' && <Appointments />}
      </Menu>
    </Stack>
  );
};

export default Admin;
