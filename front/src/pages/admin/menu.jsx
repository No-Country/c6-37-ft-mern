import React, { useState } from 'react';
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { MdOutlinePets } from 'react-icons/md';
import { BsFillCalendarWeekFill } from 'react-icons/bs';

let menuItems = [
  { key: '1', title: 'Dashboard', icon: <AiFillHome />, isActive: true },
  { key: '2', title: 'Clients', icon: <FaUserAlt />, isActive: false },
  { key: '3', title: 'Pets', icon: <MdOutlinePets />, isActive: false },
  { key: '4', title: 'Appointments', icon: <BsFillCalendarWeekFill />, isActive: false }
];

const Menu = ({activeItem, setActiveItem, children }) => {


  return (
    <Stack>
      <Grid
        templateColumns="repeat(12, 1fr)"
        alignItems="start"
        justifyItems="start"
        gap="25px"
      >
        <GridItem w="195px" ml={4} mt='100px' colSpan={2} boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)">
          <VStack alignItems="flex-start" spacing={0} >
            {menuItems.map((item) => (
              <Flex
                as={Button}
                alignItems="center"
                justifyContent="flex-start"
                gap={2}
                key={item.key}
                w="100%"
                borderRadius={0}
                py={6}
                bgColor="white"
                _hover={{ bg: 'blue.500', color:'white' }}
                _active={{ bg: 'blue.500', color:'white' }}
                _focus={{ bg: 'blue.500', color:'white' }}
                isActive={item.title.toLowerCase() === activeItem}
                onClick={() => setActiveItem(item.title.toLowerCase())}
              >
                {item.icon}
                <Text fontWeight="bold">{item.title}</Text>
              </Flex>
            ))}
          </VStack>
        </GridItem>

        <GridItem colSpan={10}>{children}</GridItem>
      </Grid>
    </Stack>
  );
};

export default Menu;
