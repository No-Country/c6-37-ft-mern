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
  Flex,
  useToast,
  Center,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsPlus, BsPlusCircle } from 'react-icons/bs';
import Pets from './Pets';
import DateShift from './DateShift';
import { useEffect } from 'react';
import useUser from '../../../hooks/useUser';
import petsHook from '../../../services/petsHook';
import appointmentsHook from '../../../services/appointmentsHook';

const NewAppointment = ({ refreshShifts }) => {
  const {createAppointment} = appointmentsHook();
  const {getOwnerPets} = petsHook();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useUser();
  const [pets, setPets] = useState();
  const [activePet, setActivePet] = useState();
  const [consult, setConsult] = useState({
    type: '',
    day: '',
    time: '',
    pet: '',
    client: user.email,
  });
  const [consultList, setConsultList] = useState([]);
  const now = new Date().toISOString().substring(0, 10);

  const handleChange = (e) => {
    setConsult({ ...consult, [e.target.name]: e.target.value });
  };

  const getPetsData = async () => {
    await getOwnerPets(user.email)
      .then((res) => setPets(res.data))
      .catch((error) => console.log(error));
  };

  const handleAdd = () => {
    if (
      !!!consult.type ||
      !!!consult.day ||
      !!!consult.time ||
      !!!consult.pet
    ) {
      toast({
        title: 'Error',
        description: 'Please fill all required fields',
        status: 'error',
        duration: 6000,
        position: 'bottom-right',
        isClosable: true,
      });

      return;
    }
    // console.log(consult);
    setConsultList([...consultList, consult]);
  };

  const deleteShiftData = (selectedConsult) => {
    let result = consultList.filter(
      (consult) => consult.pet._id !== selectedConsult.pet._id
    );

    result && setConsultList(result);
  };

  const handleSubmit = () => {
    if (consultList.length < 1) {
      toast({
        title: 'Error',
        description: 'Please add some appointments to the list',
        status: 'error',
        duration: 6000,
        position: 'bottom-right',
        isClosable: true,
      });
      return;
    }
    consultList.map((consult) => {
      consult.pet = consult.pet._id;
      createConsult(consult);
    });
    toast({
      title: 'Success',
      description: 'Appointments Were Successfully Created',
      status: 'success',
      duration: 6000,
      position: 'bottom-right',
      isClosable: true,
    });
    setConsultList([]);
    setActivePet(null);
    onClose();
  };

  const createConsult = async (consult) => {
    await createAppointment(consult)
      .then(() => refreshShifts())
      .catch((err) => err.message);
  };

  useEffect(() => {
    activePet && setConsult({ ...consult, pet: activePet });
  }, [activePet]);

  useEffect(() => {
    getPetsData();
    setConsult;
  }, []);

  return (
    <>
      <Button
        fontFamily="Anek Bangla, sans-serif"
        mt="15px"
        colorScheme="blue"
        size="sm"
        borderRadius="full"
        onClick={onOpen}
        leftIcon={<BsPlus fontSize="20px" fontWeight="bold" />}
      >
        Book a shift
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
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
            NEW APPOINTMENT
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent="center" gap="15px">
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
                gap="5px"
              >
                <Text
                  fontFamily="Anek Bangla, sans-serif"
                  fontSize="1.1rem"
                  fontWeight="600"
                >
                  Select your Pet
                </Text>
                <Box
                  boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.15)"
                  w="165px"
                  h="190px"
                  overflowY="auto"
                >
                  {pets ? (
                    pets.map((pet, index) => (
                      <Pets
                        key={index}
                        pet={pet}
                        activePet={activePet}
                        setActivePet={setActivePet}
                      />
                    ))
                  ) : (
                    <Text>Loading data...</Text>
                  )}
                </Box>
              </Flex>

              <Flex direction="column" alignItems="center" mt="20px" gap="20px">
                <FormControl>
                  <FormLabel
                    fontFamily="Anek Bangla, sans-serif"
                    fontSize="1.1rem"
                    fontWeight="600"
                  >
                    Type of consult:
                  </FormLabel>
                  <Input
                    fontFamily="Anek Bangla, sans-serif"
                    name="type"
                    borderRadius="5px"
                    size="sm"
                    type="Text"
                    placeholder="Ex. Grooming"
                    onChange={handleChange}
                  />
                </FormControl>
                <Flex gap="15px">
                  <FormControl>
                    <FormLabel
                      fontFamily="Anek Bangla, sans-serif"
                      fontSize="1.1rem"
                      fontWeight="600"
                    >
                      Select a day:
                    </FormLabel>
                    <Input
                      fontFamily="Anek Bangla, sans-serif"
                      borderRadius="5px"
                      name="day"
                      size="sm"
                      type="date"
                      min={now}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel
                      fontFamily="Anek Bangla, sans-serif"
                      fontSize="1.1rem"
                      fontWeight="600"
                    >
                      Select a time:
                    </FormLabel>
                    <Input
                      fontFamily="Anek Bangla, sans-serif"
                      borderRadius="5px"
                      name="time"
                      size="sm"
                      placeholder="Select a time"
                      type="time"
                      min="09:00"
                      max="18:00"
                      onChange={handleChange}
                    />
                  </FormControl>
                </Flex>

                <Button
                  paddingX="19px"
                  paddingY="13px"
                  colorScheme="blue"
                  size="xs"
                  borderRadius="full"
                  fontFamily="Anek Bangla, sans-serif"
                  fontSize="0.9rem"
                  rightIcon={<BsPlusCircle fontSize="15px" />}
                  onClick={handleAdd}
                >
                  Add
                </Button>
              </Flex>
            </Flex>

            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              mt="20px"
              gap="10px"
            >
              <Text
                fontFamily="Anek Bangla, sans-serif"
                color="#0B8CBF"
                fontWeight="600"
                fontSize="1.2rem"
              >
                APPOINTMENT LIST
              </Text>
              <Box
                boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.15)"
                w="100%"
                h="90px"
                overflowY="auto"
              >
                {consultList.length > 0 ? (
                  consultList.map((consult, index) => (
                    <DateShift
                      key={index}
                      consult={consult}
                      haveDeleteModal={false}
                      isDeleteable={true}
                      deleteShiftData={(selectedConsult) =>
                        deleteShiftData(selectedConsult)
                      }
                    />
                  ))
                ) : (
                  <Center h="100%">
                    <Text m="center" opacity=".5">
                      Add some consults...
                    </Text>
                  </Center>
                )}
              </Box>
            </Flex>
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
              onClick={handleSubmit}
            >
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewAppointment;
