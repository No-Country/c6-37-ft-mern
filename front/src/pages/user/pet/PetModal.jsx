import {
  chakra,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Flex,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import { MdEdit } from 'react-icons/md';
import useUser from './../../../hooks/useUser';
import { createPet, updatePet } from './../../../services/pets';

const species = ['Dog', 'Cat'];
const breeds = {
  Dog: ['Chihuahua', 'Pug', 'Pitbull'],
  Cat: ['Persa', 'Siames', , 'Maine Coon'],
};
const sizes = ['Small', 'Medium', 'Large'];

const EditPet = ({ pet, refresh, setRefresh }) => {
  const { user } = useUser();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedSpecie, setSelectedSpecie] = useState(pet ? pet.specie : '');
  const [newPet, setNewPet] = useState(
    pet
      ? pet
      : {
          name: '',
          specie: '',
          breed: '',
          sex: '',
          size: '',
          birth: '',
          weight: '',
          note: '',
          owner: user.email,
        }
  );

  const handleChange = (e) => {
    setNewPet({ ...newPet, [e.target.name]: e.target.value });
  };

  const handleSpecieChange = (e) => {
    setSelectedSpecie(e.target.value);
    setNewPet({ ...newPet, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      !!!newPet.name ||
      !!!newPet.specie ||
      !!!newPet.breed ||
      !!!newPet.sex
    ) {
      toast({
        title: 'Error',
        description: 'Please fill all required fields',
        status: 'error',
        duration: 9000,
        position: 'bottom-right',
        isClosable: true,
      });

      return;
    }
    pet ? editPetData() : createPetData();
  };

  const createPetData = async () => {
    await createPet(newPet)
      .then(() => {
        toast({
          title: 'Success',
          description: 'Pet added successfully',
          status: 'success',
          duration: 6000,
          position: 'bottom-right',
          isClosable: true,
        });
      })
      .then(() => {
        onClose();
      })
      .catch((err) => console.log(err));

    refreshPets();
  };
  
  const editPetData = async () => {
    await updatePet(newPet)
      .then(() => {
        toast({
          title: 'Success',
          description: 'Pet updated successfully',
          status: 'success',
          duration: 6000,
          position: 'bottom-right',
          isClosable: true,
        });
      })
      .then(() => {
        onClose();
      })
      .catch((err) => console.log(err));
    refreshPets();
  };

  const refreshPets = () => {
    setRefresh(refresh + 1);
  };

  return (
    <>
      <Button
        fontFamily="Anek Bangla, sans-serif"
        colorScheme="blue"
        size="sm"
        borderRadius="full"
        onClick={onOpen}
        leftIcon={
          pet ? (
            <MdEdit fontWeight="bold" />
          ) : (
            <BsPlus fontSize="20px" fontWeight="bold" />
          )
        }
      >
        {pet ? 'Edit Pet' : 'Add Pet'}
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            display="flex"
            justifyContent="center"
            fontFamily="Anek Bangla, sans-serif"
            color="#0B8CBF"
            fontWeight="600"
            fontSize="1.7rem"
          >
            {pet ? 'EDIT PET' : 'ADD PET'}

          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <chakra.form
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap='20px'
              mx="20px"
            >
              <FormControl isRequired>
                <FormLabel
                  fontFamily="Anek Bangla, sans-serif"
                  fontSize="1.1rem"
                  fontWeight="600"
                >
                  Name
                </FormLabel>
                <Input
                  name="name"
                  fontFamily="Anek Bangla, sans-serif"
                  borderRadius="5px"
                  size="sm"
                  w="100%"
                  type="text"
                  placeholder="E.g.: Firulais"
                  value={newPet.name}
                  onChange={handleChange}
                />
              </FormControl>

              <Flex gap="15px" w="100%">
                <FormControl isRequired>
                  <FormLabel
                    fontFamily="Anek Bangla, sans-serif"
                    fontSize="1.1rem"
                    fontWeight="600"
                  >
                    Specie
                  </FormLabel>
                  <Select
                    name="specie"
                    fontFamily="Anek Bangla, sans-serif"
                    borderRadius="5px"
                    size="sm"
                    placeholder="Select a Specie"
                    onChange={handleSpecieChange}
                    value={newPet.specie}
                  >
                    {species.map((specie) => (
                      <option key={specie} value={specie}>
                        {specie}
                      </option>
                    ))}
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel
                    fontFamily="Anek Bangla, sans-serif"
                    fontSize="1.1rem"
                    fontWeight="600"
                  >
                    Breed
                  </FormLabel>
                  <Select
                    name="breed"
                    fontFamily="Anek Bangla, sans-serif"
                    borderRadius="5px"
                    size="sm"
                    placeholder="Select a breed"
                    disabled={selectedSpecie ? false : true}
                    onChange={handleChange}
                    value={newPet.breed}
                  >
                    {Object.keys(breeds).map(
                      (breed) =>
                        breed === selectedSpecie &&
                        breeds[breed].map((i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))
                    )}
                  </Select>
                </FormControl>
              </Flex>

              <Flex gap="15px" w="100%">
                <FormControl isRequired>
                  <FormLabel
                    fontFamily="Anek Bangla, sans-serif"
                    fontSize="1.1rem"
                    fontWeight="600"
                  >
                    Sex
                  </FormLabel>
                  <Select
                    name="sex"
                    fontFamily="Anek Bangla, sans-serif"
                    borderRadius="5px"
                    size="sm"
                    placeholder="Select an option"
                    onChange={handleChange}
                    value={newPet.sex}
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel
                    fontFamily="Anek Bangla, sans-serif"
                    fontSize="1.1rem"
                    fontWeight="600"
                  >
                    Size
                  </FormLabel>
                  <Select
                    name="size"
                    fontFamily="Anek Bangla, sans-serif"
                    borderRadius="5px"
                    size="sm"
                    placeholder="Select an option"
                    onChange={handleChange}
                    value={newPet.size}
                  >
                    {sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </Flex>

              <Flex gap="15px" w="100%">
                <FormControl fontFamily="Anek Bangla, sans-serif">
                  <FormLabel
                    fontFamily="Anek Bangla, sans-serif"
                    fontSize="1.1rem"
                    fontWeight="600"
                  >
                    Birth
                  </FormLabel>
                  <Input
                    name="birth"
                    borderRadius="5px"
                    size="sm"
                    placeholder="Select Date and Time"
                    type="date"
                    onChange={handleChange}
                    value={newPet.birth}
                  />
                </FormControl>

                <FormControl fontFamily="Anek Bangla, sans-serif">
                  <FormLabel
                    fontFamily="Anek Bangla, sans-serif"
                    fontSize="1.1rem"
                    fontWeight="600"
                  >
                    Weight
                  </FormLabel>
                  <Input
                    name="weight"
                    borderRadius="5px"
                    size="sm"
                    type="number"
                    placeholder="Kg."
                    onChange={handleChange}
                    value={newPet.weight}
                  />
                </FormControl>
              </Flex>

              <FormControl>
                <FormLabel
                  mt="15px"
                  fontFamily="Anek Bangla, sans-serif"
                  fontSize="1.1rem"
                  fontWeight="600"
                >
                  Note:
                </FormLabel>
                <Textarea
                  name="note"
                  fontSize="0.9rem"
                  fontFamily="Anek Bangla, sans-serif"
                  borderRadius="5px"
                  resize="none"
                  onChange={handleChange}
                  value={newPet.note}
                ></Textarea>
              </FormControl>
            </chakra.form>
          </ModalBody>
          <ModalFooter justifyContent="center" gap="15px" my="10px">
            <Button
              fontFamily="Anek Bangla, sans-serif"
              fontSize="0.8rem"
              colorScheme="white"
              color="#0B8CBF"
              border="2px solid #0B8CBF"
              size="xs"
              borderRadius="full"
              w="90px"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              fontFamily="Anek Bangla, sans-serif"
              fontSize="0.8rem"
              colorScheme="blue"
              size="xs"
              borderRadius="full"
              w="90px"
              onClick={handleSubmit}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditPet;
