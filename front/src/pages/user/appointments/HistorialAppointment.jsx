import { Text,Button,Modal,ModalBody,ModalCloseButton,ModalContent,ModalFooter,ModalHeader,ModalOverlay,useDisclosure, Box, FormControl, FormLabel, Input, FormHelperText, Select, Textarea, } from "@chakra-ui/react";
import React from "react";
import Shifts from "./Shifts";

const HistorialAppointment = () => {
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
        
        <Modal isOpen={isOpen} onClose={onClose} size='md'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display='flex' justifyContent='center' fontFamily="Anek Bangla, sans-serif" color="#0B8CBF" fontWeight="600" fontSize="1.7rem">SHIFTS HISTORIAL</ModalHeader>
          <ModalCloseButton />
          <ModalBody display='flex' justifyContent='center' >
						
					<Box w='100%' h='130px' overflowY='scroll'
           __css={{
            '&::-webkit-scrollbar': {
              w: '2',
            },
            '&::-webkit-scrollbar-track': {
              background: `#e1e1e1`,
              borderRadius: `4px`,
            },
            '&::-webkit-scrollbar-thumb': {
              borderRadius: '10',
              bg: `#0B8CBF`,
              color: `blue`,
            },
            
          }}
          >
          <Shifts type='Grooming' hour='02:00pm' date='01/10/22'/>
          <Shifts type='Grooming' hour='02:00pm' date='01/10/22'/>
          <Shifts type='Grooming' hour='02:00pm' date='01/10/22'/>
          <Shifts type='Grooming' hour='02:00pm' date='01/10/22'/>
          <Shifts type='Grooming' hour='02:00pm' date='01/10/22'/>
          <Shifts type='Grooming' hour='02:00pm' date='01/10/22'/>
          <Shifts type='Grooming' hour='02:00pm' date='01/10/22'/>
          <Shifts type='Grooming' hour='02:00pm' date='01/10/22'/>
          <Shifts type='Grooming' hour='02:00pm' date='01/10/22'/>
          <Shifts type='Grooming' hour='02:00pm' date='01/10/22'/>


          </Box>

          </ModalBody>
          <ModalFooter justifyContent='center' gap='5px' my='10px'>
						<Button
						fontFamily="Anek Bangla, sans-serif"
						fontSize='0.8rem'
						colorScheme="white"
						color='#0B8CBF'
						border='2px solid #0B8CBF'
						size="xs"
						borderRadius="full"
						w='90px' 
						onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HistorialAppointment;