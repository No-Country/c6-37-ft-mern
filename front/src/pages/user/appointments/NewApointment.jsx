import { Text,Button,Modal,ModalBody,ModalCloseButton,ModalContent,ModalFooter,ModalHeader,ModalOverlay,useDisclosure, } from "@chakra-ui/react";
import React from "react";
import { BsPlus } from "react-icons/bs";
import { MdConstruction, } from "react-icons/md";

const NewAppointment = () => {
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
        <BsPlus fontSize="20px" fontWeight="bold" />
        Book a shift
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display='flex'><MdConstruction fontSize='25px'/>En construccion </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Vuelva pronto</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewAppointment;
