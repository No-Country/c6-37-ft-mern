import React from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import useUser from './../../../hooks/useUser';
import { BiEdit } from 'react-icons/bi';
import { BsPlus } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';

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

const Dashboard = () => {
  const { user } = useUser();

  return (
    <Stack mt="100" alignItems="center">
      {/* Profile */}
      <Flex
        alignItems="center"
        gap={4}
        p={4}
        boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)"
      >
        <Image
          src={user.imgUrl}
          alt={user.name}
          boxSize="90px"
          borderRadius="full"
        />
        <Flex direction="column">
          <Text fontSize="2xl" fontWeight="bold">
            {user.name}
          </Text>
          <Text fontSize="xs" color="rgba(0,0,0,.5)">
            {user.phone}
          </Text>
          <Text fontSize="xs" color="rgba(0,0,0,.5)">
            {user.address}
          </Text>
        </Flex>
        <Flex alignSelf="flex-start" justifySelf="flex-end">
          <IconButton
            aria-label="Edit Profile"
            icon={<BiEdit fontSize="18px" />}
            size="sm"
            colorScheme="blue"
            color="white"
            borderRadius="full"
          />
        </Flex>
      </Flex>
      {/* End Profile */}

      <Flex
        boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)"
        width="440px"
        pb={0}
        direction="column"
      >
        <Flex width="100%" justifyContent="space-between" p={8}>
          <Text fontSize="2xl" fontWeight="bold">
            MY PETS
          </Text>
          <Button colorScheme="blue" size="sm" borderRadius="full">
            <BsPlus fontSize="20px" />
            Add Pet
          </Button>
        </Flex>
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Flex flex="1" textAlign="left" alignItems="center" gap={2}>
                <Avatar src={pet.img} name={pet.name} size="sm" />
                <Text fontSize="lg" fontWeight="bold">
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
                    <Text fontWeight="bold">{pet.specie}</Text>
                  </Flex>
                </GridItem>
                <GridItem>
                  <Flex gap={3} alignItems="baseline">
                    <Text fontSize="sm">Breed:</Text>
                    <Text fontWeight="bold">{pet.breed}</Text>
                  </Flex>
                </GridItem>
                <GridItem>
                  <Flex gap={3} alignItems="baseline">
                    <Text fontSize="sm">Sex:</Text>
                    <Text fontWeight="bold">{pet.sex}</Text>
                  </Flex>
                </GridItem>
                <GridItem>
                  <Flex gap={3} alignItems="baseline">
                    <Text fontSize="sm">Size:</Text>
                    <Text fontWeight="bold">{pet.size}</Text>
                  </Flex>
                </GridItem>
                <GridItem>
                  <Flex gap={3} alignItems="baseline">
                    <Text fontSize="sm">Birth:</Text>
                    <Text fontWeight="bold">{pet.birth}</Text>
                  </Flex>
                </GridItem>
                <GridItem>
                  <Flex gap={3} alignItems="baseline">
                    <Text fontSize="sm">Weight:</Text>
                    <Text fontWeight="bold">{pet.weight}</Text>
                    <Text fontSize="sm" fontWeight="bold">
                      Kg.
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem colSpan={2}>
                  <Flex direction="column" gap={1} alignItems="baseline">
                    <Text fontSize="sm">Note:</Text>
                    <Text fontWeight="bold">{pet.note}</Text>
                  </Flex>
                </GridItem>
                <GridItem colSpan={2} justifySelf="center">
                  <Button
                    colorScheme="blue"
                    size="sm"
                    borderRadius="full"
                    px={8}
                  >
                    Edit
                  </Button>
                </GridItem>
                <IconButton
                  icon={<MdDelete fontSize="18px" />}
                  size="sm"
                  borderRadius="full"
                  colorScheme='red'
                  color="white"
                  position="absolute"
                  bottom="17px"
                  right="8px"
                />
              </Grid>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Flex flex="1" textAlign="left" alignItems="center" gap={2}>
                <Avatar src={pet.img} name={pet.name} size="sm" />
                <Text fontSize="lg" fontWeight="bold">
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
                    <Text fontWeight="bold">{pet.specie}</Text>
                  </Flex>
                </GridItem>
                <GridItem>
                  <Flex gap={3} alignItems="baseline">
                    <Text fontSize="sm">Breed:</Text>
                    <Text fontWeight="bold">{pet.breed}</Text>
                  </Flex>
                </GridItem>
                <GridItem>
                  <Flex gap={3} alignItems="baseline">
                    <Text fontSize="sm">Sex:</Text>
                    <Text fontWeight="bold">{pet.sex}</Text>
                  </Flex>
                </GridItem>
                <GridItem>
                  <Flex gap={3} alignItems="baseline">
                    <Text fontSize="sm">Size:</Text>
                    <Text fontWeight="bold">{pet.size}</Text>
                  </Flex>
                </GridItem>
                <GridItem>
                  <Flex gap={3} alignItems="baseline">
                    <Text fontSize="sm">Birth:</Text>
                    <Text fontWeight="bold">{pet.birth}</Text>
                  </Flex>
                </GridItem>
                <GridItem>
                  <Flex gap={3} alignItems="baseline">
                    <Text fontSize="sm">Weight:</Text>
                    <Text fontWeight="bold">{pet.weight}</Text>
                    <Text fontSize="sm" fontWeight="bold">
                      Kg.
                    </Text>
                  </Flex>
                </GridItem>
                <GridItem colSpan={2}>
                  <Flex direction="column" gap={1} alignItems="baseline">
                    <Text fontSize="sm">Note:</Text>
                    <Text fontWeight="bold">{pet.note}</Text>
                  </Flex>
                </GridItem>
                <GridItem colSpan={2} justifySelf="center">
                  <Button
                    colorScheme="blue"
                    size="sm"
                    borderRadius="full"
                    px={8}
                  >
                    Edit
                  </Button>
                </GridItem>
                <IconButton
                  icon={<MdDelete fontSize="18px" />}
                  size="sm"
                  borderRadius="full"
                  colorScheme='red'
                  color="white"
                  position="absolute"
                  bottom="17px"
                  right="8px"
                />
              </Grid>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Stack>
  );
};

export default Dashboard;
