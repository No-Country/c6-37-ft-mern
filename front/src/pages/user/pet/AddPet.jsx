import {
  Text,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Select,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { BsPlus } from 'react-icons/bs';

const AddPet = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        colorScheme="blue"
        size="sm"
        borderRadius="full"
        fontFamily="Anek Bangla, sans-serif"
        fontSize="lg"
        onClick={onOpen}
      >
        <BsPlus fontSize="20px" fontWeight="bold" />
        Add Pet
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
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
            ADD PET
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center">
            <FormControl w="80%">
              <FormLabel
                fontFamily="Anek Bangla, sans-serif"
                fontSize="1.1rem"
                fontWeight="600"
              >
                Name
              </FormLabel>
              <Input
                fontFamily="Anek Bangla, sans-serif"
                borderRadius="5px"
                size="sm"
                w="100%"
                type="Text"
                placeholder="Firulais"
              />

              <Box w="calc(100%/2 -10px)" display="flex" gap="5px" mt="15px">
                <Box>
                  <FormLabel
                    fontFamily="Anek Bangla, sans-serif"
                    fontSize="1.1rem"
                    fontWeight="600"
                  >
                    Specie
                  </FormLabel>
                  <Select
                    fontFamily="Anek Bangla, sans-serif"
                    borderRadius="5px"
                    size="sm"
                    w="184px"
                    placeholder="Select a Specie"
                  >
                    <option>Cat</option>
                    <option>Dog</option>
                    <option>Horse</option>
                  </Select>
                </Box>

                <Box>
                  <FormLabel
                    fontFamily="Anek Bangla, sans-serif"
                    fontSize="1.1rem"
                    fontWeight="600"
                  >
                    Breed
                  </FormLabel>
                  <Select
                    fontFamily="Anek Bangla, sans-serif"
                    borderRadius="5px"
                    size="sm"
                    w="184px"
                    placeholder="Select a breed"
                  >
                    <option>Chihuahua</option>
                    <option>Pug</option>
                    <option>Pitbull</option>
                  </Select>
                </Box>
              </Box>

              <Box w="calc(100%/2 -10px)" display="flex" gap="5px" mt="15px">
                <Box>
                  <FormLabel
                    fontFamily="Anek Bangla, sans-serif"
                    fontSize="1.1rem"
                    fontWeight="600"
                  >
                    Sex
                  </FormLabel>
                  <Select
                    fontFamily="Anek Bangla, sans-serif"
                    borderRadius="5px"
                    size="sm"
                    w="184px"
                    placeholder="Select an option"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </Select>
                </Box>

                <Box>
                  <FormLabel
                    fontFamily="Anek Bangla, sans-serif"
                    fontSize="1.1rem"
                    fontWeight="600"
                  >
                    Size
                  </FormLabel>
                  <Select
                    fontFamily="Anek Bangla, sans-serif"
                    borderRadius="5px"
                    size="sm"
                    w="184px"
                    placeholder="Select an option"
                  >
                    <option>Teacup</option>
                    <option>Toy dogs</option>
                    <option>Small</option>
                    <option>Large</option>
                    <option>Giant</option>
                  </Select>
                </Box>
              </Box>

              <Box w="calc(100%/2 -10px)" display="flex" gap="5px" mt="15px">
                <Box fontFamily="Anek Bangla, sans-serif">
                  <FormLabel
                    fontFamily="Anek Bangla, sans-serif"
                    fontSize="1.1rem"
                    fontWeight="600"
                  >
                    Birth
                  </FormLabel>
                  <Input
                    borderRadius="5px"
                    size="sm"
                    w="184px"
                    placeholder="Select Date and Time"
                    type="date"
                  />
                </Box>

                <Box fontFamily="Anek Bangla, sans-serif">
                  <FormLabel
                    fontFamily="Anek Bangla, sans-serif"
                    fontSize="1.1rem"
                    fontWeight="600"
                  >
                    Weight
                  </FormLabel>
                  <Input
                    borderRadius="5px"
                    size="sm"
                    w="184px"
                    type="number"
                    placeholder="Kg."
                  />
                </Box>
              </Box>

              <FormLabel
                mt="15px"
                fontFamily="Anek Bangla, sans-serif"
                fontSize="1.1rem"
                fontWeight="600"
              >
                Note:
              </FormLabel>
              <Textarea
                fontSize="0.9rem"
                fontFamily="Anek Bangla, sans-serif"
                borderRadius="5px"
                resize="none"
              ></Textarea>
            </FormControl>
          </ModalBody>
          <ModalFooter justifyContent="center" gap="5px" my="10px">
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
              onClick={onClose}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddPet;
