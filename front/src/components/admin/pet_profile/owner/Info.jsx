import { Avatar, Stack } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import InfoCard from './InfoCard';

function Info() {
  const state = useSelector((state) => state.userData);

  return (
    <Stack
      direction={{ lg: 'row', base: 'column' }}
      gap={{ lg: '16', base: '8' }}
      alignItems={{ lg: 'start', base: 'center' }}
    >
      <Avatar name={state.name} src={state.img} size="xl" />

      <Stack direction='column' >
        <Stack direction={{sm:'row', base: 'column'}} w='100%' gap={{sm:10, base:0}}>
          <InfoCard title="name" text={state.name} />
          <InfoCard title="lastName" text={state.lastName} />
        </Stack>

        <Stack direction={{sm:'row', base: 'column'}} w='100%' gap={{sm:10, base:0}}>
          <InfoCard title="phone" text={state.phoneNumber} />
          <InfoCard title="email" text={state.email} />
        </Stack>
        <Stack>
          <InfoCard title="address" text={state.address} />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Info;
