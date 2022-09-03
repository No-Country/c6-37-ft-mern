import { Avatar, Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import DatosCard from './DatosCard';
import EditTool from './EditTool';
import { useSelector } from 'react-redux';

function ProfileContainer() {
  const state = useSelector((state) => state.userData);

  return (
    <Stack
      direction={{ lg: 'row', base: 'column' }}
      justifyContent="center"
      alignItems={{ base: 'center', lg: 'start' }}
      gap={{ lg: '20', base: '10' }}
      px={{md:"10", base: '5' }}
    >
      <Stack direction={{ lg: 'row', base: 'column' }} gap="6">
        <Avatar size="xl" src={state.imgUrl} name={state.name} />

        <Stack gap="2">
          <Flex direction={{ sm: 'row', base: 'column' }} gap="6">
            <DatosCard title="Name" text={state.name} />
            <DatosCard title="Last Name" text={state.lastName} />
          </Flex>

          <Flex direction={{ sm: 'row', base: 'column' }} gap="6">
            <DatosCard title="Phone Number" text={state.phoneNumber} />
            <DatosCard title="Email" text={state.email} />
          </Flex>

          <Flex direction="column">
            <Text
              fontSize="14px"
              fontWeight="bold"
              fontFamily="Anek Bangla, sans-serif"
            >
              Address:
            </Text>
            <Text fontWeight="light" fontSize="16px">
              {state.address}
            </Text>
          </Flex>
        </Stack>
      </Stack>

      <EditTool />
    </Stack>
  );
}

export default ProfileContainer;
