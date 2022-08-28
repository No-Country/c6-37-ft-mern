import React from 'react';
import { Avatar, Divider, Flex, Text, Button } from '@chakra-ui/react';

const Pets = ({ pet, activePet, setActivePet }) => {
  return (
    <>
      <Flex
        as={Button}
        w="100%"
        justifyContent="flex-start"
        borderRadius={0}
        bgColor="white"
        _hover={{ background: '#0B8CBF', color: 'white', cursor: 'pointer' }}
        _active={{ bg: '#0B8CBF', color: 'white' }}
        _focus={{ bg: '#0B8CBF', color: 'white' }}
        isActive={activePet && pet._id === activePet._id}
        onClick={() => setActivePet(pet)}
      >
        <Avatar size="xs" name={pet.name} />
        <Text
          marginLeft="10px"
          fontSize="1rem"
          fontWeight="bold"
          fontFamily="Anek Bangla, sans-serif"
        >
          {pet.name}
        </Text>
      </Flex>
      <Divider />
    </>
  );
};

export default Pets;
