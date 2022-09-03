import React from 'react';
import { Box, Flex, Stack } from '@chakra-ui/react';
import UserChip from './UserChip';
import PetsContainer from './PetsContainer';
import PreviousShifts from './PreviousShifts';
import NextShifts from './NextShifts';

const Dashboard = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      margin="auto 0"
      pt="160px"
    >
      <Stack justifyContent="center" gap='60px'>
        <Box width="440px">
          <UserChip />
        </Box>

        <Flex justifyContent="center" gap="40px" direction={{ base:'column', xl: 'row'}} userSelect='none'>
          <Flex
            boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)"
            width="440px"
            pb={0}
            h="100%"
            direction="column"
          >
            <Box>
              <PetsContainer />
            </Box>
          </Flex>
          <Flex gap="40px" direction="column">
            <Flex
              boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)"
              width="440px"
              pb={0}
              direction="column"
            >
              <NextShifts />
            </Flex>
            <Flex
              boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)"
              width="440px"
              pb={0}
              direction="column"
              marginTop="10px"
            >
              <PreviousShifts />
            </Flex>
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default Dashboard;
