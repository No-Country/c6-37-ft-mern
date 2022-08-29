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
  Flex,
  Center,
} from '@chakra-ui/react';
import React from 'react';
import DateShift from './DateShift';

const HistorialAppointment = ({ consultsData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        fontFamily="Anek Bangla, sans-serif"
        mt="15px"
        colorScheme="blue"
        size="sm"
        borderRadius="full"
        paddingY="5px"
        onClick={onOpen}
      >
        See Historial
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="md" isCentered>
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
            SHIFTS HISTORIAL
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center">
            <Flex direction="column" w="100%" h="230px">
              {consultsData.length > 0 ? (
                consultsData.map((consult, index) => (
                  <DateShift
                    key={index}
                    consult={consult}
                    isDeleteable={false}
                    haveDeleteModal={false}
                    deleteShiftData={(selectedConsult) =>
                      deleteShiftData(selectedConsult)
                    }
                  />
                ))
              ) : (
                <Center>
                  <Text opacity="0.5">
                    You shifts historial is already empty
                  </Text>
                </Center>
              )}
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
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HistorialAppointment;
