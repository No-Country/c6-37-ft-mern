import React from 'react';
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Flex,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';
import { MdDelete } from 'react-icons/md';
import PetModal from '../pet/PetModal';
import { useEffect } from 'react';
import DeletePetButton from './DeletePetButton';

const PetChip = ({ pet,refresh, setRefresh }) => {
  return (
    <AccordionItem>
      <AccordionButton>
        <Flex flex="1" textAlign="left" alignItems="center" gap={2}>
          <Avatar src={pet.img} name={pet.name} size="sm" />
          <Text
            fontSize="xl"
            fontWeight="bold"
            fontFamily="Anek Bangla, sans-serif"
          >
            {pet.name}
          </Text>
        </Flex>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={0} bgColor="#e7e7e7">
        <Grid
          h="300px"
          pt={4}
          templateColumns="repeat(2,1fr)"
          position="relative"
        >
          <GridItem>
            <Flex gap={3} alignItems="baseline">
              <Text fontSize="sm">Specie:</Text>
              <Text
                fontWeight="bold"
                fontFamily="Anek Bangla, sans-serif"
                fontSize="lg"
              >
                {pet.specie}
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex gap={3} alignItems="baseline">
              <Text fontSize="sm">Breed:</Text>
              <Text
                fontWeight="bold"
                fontFamily="Anek Bangla, sans-serif"
                fontSize="lg"
              >
                {pet.breed}
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex gap={3} alignItems="baseline">
              <Text fontSize="sm">Sex:</Text>
              <Text
                fontWeight="bold"
                fontFamily="Anek Bangla, sans-serif"
                fontSize="lg"
              >
                {pet.sex}
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex gap={3} alignItems="baseline">
              <Text fontSize="sm">Size:</Text>
              <Text
                fontWeight="bold"
                fontFamily="Anek Bangla, sans-serif"
                fontSize="lg"
              >
                {pet.size}
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex gap={3} alignItems="baseline">
              <Text fontSize="sm">Birth:</Text>
              <Text
                fontWeight="bold"
                fontFamily="Anek Bangla, sans-serif"
                fontSize="lg"
              >
                {pet.birth}
              </Text>
            </Flex>
          </GridItem>
          <GridItem>
            <Flex gap={3} alignItems="baseline">
              <Text fontSize="sm">Weight:</Text>
              <Text
                fontWeight="bold"
                fontFamily="Anek Bangla, sans-serif"
                fontSize="lg"
              >
                {pet.weight}
              </Text>
              <Text fontSize="sm" fontWeight="bold">
                Kg.
              </Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <Flex direction="column" gap={1} alignItems="baseline">
              <Text fontSize="sm">Note:</Text>
              <Text
                fontWeight="bold"
                fontFamily="Anek Bangla, sans-serif"
                fontSize="lg"
              >
                {pet.note}
              </Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={2} justifySelf="center" alignSelf='center'>
            <PetModal pet={pet} refresh={refresh} setRefresh={setRefresh} />
          </GridItem>

          <DeletePetButton pet={pet} refresh={refresh} setRefresh={setRefresh} />
          
        </Grid>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default PetChip;
