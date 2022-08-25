import {
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
  Select,
  Textarea,
  IconButton,
  Avatar,
  useToast,
  Flex,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import useUser from '../../../hooks/useUser';
import { updateClient } from '../../../services/clients';

const EditProfile = () => {
  const { user, login } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [newUser, setNewUser] = useState(user);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      !!!newUser.name ||
      !!!newUser.lastName ||
      !!!newUser.phoneNumber ||
      !!!newUser.email ||
      !!!newUser.address
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

    createUserData();
  };

  const createUserData = async () => {
    await updateClient(newUser)
      .then((res) => {
        login(res.data.updatedClient);

        toast({
          title: 'Success',
          description: 'User Updated successfully',
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
  };

  return (
    <>
      <IconButton
        aria-label="Edit Profile"
        icon={<BiEdit fontSize="18px" />}
        size="sm"
        colorScheme="blue"
        color="white"
        borderRadius="full"
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} size="sm">
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
            EDIT PROFILE
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center">
            <Flex direction="column" alignItems="center" gap="20px">
              <Avatar size="lg" />

              <Flex gap="15px">
                <FormControl>
                  <FormLabel
                    fontFamily="Anek Bangla, sans-serif"
                    fontSize="1.1rem"
                    fontWeight="600"
                  >
                    Name:
                  </FormLabel>
                  <Input
                    borderRadius="5px"
                    size="sm"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={newUser.name}
                    onChange={handleChange}
                    fontFamily="Anek Bangla, sans-serif"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel
                    fontFamily="Anek Bangla, sans-serif"
                    fontSize="1.1rem"
                    fontWeight="600"
                  >
                    Last Name:
                  </FormLabel>
                  <Input
                    borderRadius="5px"
                    size="sm"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    fontFamily="Anek Bangla, sans-serif"
                    value={newUser.lastName}
                    onChange={handleChange}
                  />
                </FormControl>
              </Flex>

              <Flex gap="15px">
                <FormControl>
                  <FormLabel
                    fontFamily="Anek Bangla, sans-serif"
                    fontSize="1.1rem"
                    fontWeight="600"
                  >
                    Phone Number:
                  </FormLabel>
                  <Input
                    borderRadius="5px"
                    size="sm"
                    type="tel"
                    placeholder="+01 123 456 789"
                    name="phoneNumber"
                    fontFamily="Anek Bangla, sans-serif"
                    value={newUser.phoneNumber}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel
                    fontFamily="Anek Bangla, sans-serif"
                    fontSize="1.1rem"
                    fontWeight="600"
                  >
                    Email:
                  </FormLabel>
                  <Input
                    borderRadius="5px"
                    size="sm"
                    type="text"
                    name="email"
                    placeholder="johndoe03@mail.com"
                    fontFamily="Anek Bangla, sans-serif"
                    value={newUser.email}
                    onChange={handleChange}
                    isDisabled
                  />
                </FormControl>
              </Flex>
              <FormControl>
                <FormLabel
                  fontFamily="Anek Bangla, sans-serif"
                  fontSize="1.1rem"
                  fontWeight="600"
                >
                  Address
                </FormLabel>
                <Input
                  borderRadius="5px"
                  size="sm"
                  type="text"
                  name="address"
                  placeholder="Contoso Ltd 215 E Tasman CA San Jose"
                  fontFamily="Anek Bangla, sans-serif"
                  value={newUser.address}
                  onChange={handleChange}
                />
              </FormControl>
            </Flex>
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
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditProfile;
