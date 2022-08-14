import React from 'react';
import { Flex, Stack } from '@chakra-ui/react';
import UserChip from './UserChip';
import PetsContainer from './PetsContainer';

const Dashboard = () => {
  return (
    <Stack mt="100" alignItems="center">
      <UserChip />
      <Flex
        boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)"
        width="440px"
        pb={0}
        direction="column"
      >
        <PetsContainer />
      </Flex>
    </Stack>
  );
};

export default Dashboard;
