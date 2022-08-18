import { Button,Modal,ModalBody,ModalCloseButton,ModalContent,ModalFooter,ModalHeader,ModalOverlay,useDisclosure, Box, FormControl, FormLabel, Input, Select, Textarea, IconButton, Avatar, } from "@chakra-ui/react";
import React from "react";
import { BiEdit } from "react-icons/bi";


const EditProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      
      <Modal isOpen={isOpen} onClose={onClose} size='sm'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display='flex' justifyContent='center' fontFamily="Anek Bangla, sans-serif" color="#0B8CBF" fontWeight="600" fontSize="1.7rem">EDIT PROFILE</ModalHeader>
          <ModalCloseButton />
          <ModalBody display='flex' justifyContent='center'>

					<FormControl w='90%' fontFamily="Anek Bangla, sans-serif">
 					<Box display='flex' justifyContent='center' >
          <Avatar size='lg'></Avatar>
          </Box>
						
						<Box w='calc(100%/2 -10px)' display='flex' gap='5px' mt='25px'>
						<Box fontFamily="Anek Bangla, sans-serif">
						<FormLabel fontFamily="Anek Bangla, sans-serif" fontSize='1.1rem' fontWeight='600'>Name:</FormLabel>
  					<Input borderRadius='5px' size='sm' w='100%' type='Text' placeholder="John"/>
						</Box>

						<Box fontFamily="Anek Bangla, sans-serif">
						<FormLabel fontFamily="Anek Bangla, sans-serif" fontSize='1.1rem' fontWeight='600'>Last Name:</FormLabel>
  					<Input borderRadius='5px' size='sm' w='100%' type='Text' placeholder="Doe"/>
						</Box>
						</Box>

						<Box w='calc(100%/2 -10px)' display='flex' gap='5px' mt='15px'>
						<Box fontFamily="Anek Bangla, sans-serif">
						<FormLabel fontFamily="Anek Bangla, sans-serif" fontSize='1.1rem' fontWeight='600'>Phone Number:</FormLabel>
  					<Input borderRadius='5px' size='sm' w='100%' type='tel' placeholder="+01 964 039 492"/>
						</Box>

						<Box fontFamily="Anek Bangla, sans-serif">
            <FormLabel fontFamily="Anek Bangla, sans-serif" fontSize='1.1rem' fontWeight='600'>Email:</FormLabel>
  					<Input borderRadius='5px' size='sm' w='100%' type='Text' placeholder="johndoe03@mail.com"/>
						
						</Box>
						</Box>

						<FormLabel mt='15px' fontFamily="Anek Bangla, sans-serif" fontSize='1.1rem' fontWeight='600'>Address</FormLabel>
  					<Input borderRadius='5px' size='sm' w='100%' type='Text' placeholder="Contoso Ltd 215 E Tasman CA San Jose"/>


					</FormControl>

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
						onClick={onClose}>Cancel</Button>
            <Button 
						fontFamily="Anek Bangla, sans-serif"
						fontSize='0.8rem'
						colorScheme="blue"
						size="xs"
						borderRadius="full"
						w='90px' 
						onClick={onClose}>Continue</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditProfile;