import React from 'react';
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react';
import DatosCard from './DatosCard';

function AppointmentModal(props) {
  return (
    <Modal
      finalFocusRef={props.ref}
      isOpen={props.isOpen}
      onClose={props.onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">{props.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack my="5" gap="5">
            <DatosCard title="Consult" text={props.appointment.type} />
            <Flex>
              <DatosCard title="Client" text={props.appointment.client} />
              <DatosCard title="Pet" text={props.appointment.pet} />
            </Flex>
            <Flex>
              <DatosCard title="Time" text={props.appointment.time} />
              <DatosCard title="Day" text={props.appointment.day} />
            </Flex>
          </Stack>
        </ModalBody>

        <ModalFooter justifyContent="center">
          <Button colorScheme="blue" onClick={props.onClose}>
            {props.cancel}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AppointmentModal;
