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
      <Flex
        alignItems={{lg:"start", base:'center'}}
        justifyItems={{lg:"start", base:'center'}}
        direction={{base:'column', lg:'row'}}
        gap="25px"
      >
        <Flex w={{lg:"195px", base:'auto'}} ml={{base:0, lg:4}} mt='100px' boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)">
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
        </Flex>

        <Flex w='100%' justifyContent={{base:'center', lg: 'flex-start'}}>{children}</Flex>
      </Flex>
    </Stack>
  );
};

export default Menu;
