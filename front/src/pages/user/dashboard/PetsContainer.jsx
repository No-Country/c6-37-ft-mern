import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Button,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import { BsPlus } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import PetChip from './PetChip';

const pet = {
  name: 'Firulais',
  specie: 'Canine',
  breed: 'Jack Russel',
  sex: 'Male',
  size: 'Mini',
  birth: '16/03/18',
  weight: '12',
  note: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ',
  img: '/assets/dog.png',
};

const PetsContainer = () => {
  return (
    <>
      <Flex width="100%" alignItems='center' justifyContent="space-between" p={8}>
        <Text color="blue.500" fontSize="3xl" fontWeight="bold" fontFamily='Anek Bangla, sans-serif'>
          MY PETS
        </Text>
        <Button colorScheme="blue" size="sm" borderRadius="full">
          <BsPlus fontSize="20px" />
          Add Pet
        </Button>
      </Flex>
      <Accordion allowToggle>
        <PetChip pet={pet}/>
        <PetChip pet={pet}/>
        <PetChip pet={pet}/>
        <PetChip pet={pet}/>
      </Accordion>
    </>
  );
};

export default PetsContainer;
