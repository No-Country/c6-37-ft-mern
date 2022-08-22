import { Text,Button,Modal,ModalBody,ModalCloseButton,ModalContent,ModalFooter,ModalHeader,ModalOverlay,useDisclosure, Box, FormControl, FormLabel, Input, FormHelperText, Select, Textarea, Avatar, Divider, } from "@chakra-ui/react";
import React from "react";
import { BsPlus, BsPlusCircle } from "react-icons/bs";
import Pets from "./Pets";
import DateShift from "./DateShift";

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
      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display='flex' justifyContent='center' fontFamily="Anek Bangla, sans-serif" color="#0B8CBF" fontWeight="600" fontSize="1.7rem">NEW SHIFT</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
          

          <Box display='flex' justifyContent='center' gap='15px' >
          <Box>
          <Box display='flex' justifyContent='center'>
          <Text fontFamily="Anek Bangla, sans-serif" fontSize='1.1rem' fontWeight='600'>Select your Pet</Text>
          </Box>
          <Box boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.15)" w='165px' h='190px' overflowX='hidden' overflowY='scroll' 
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
            
          }}>
          
          <Pets name='Firulais' />
          <Pets name='Firulais' />
          <Pets name='Firulais' />
    
          </Box>
          </Box>

						
					<FormControl w='60%' mt='20px' >
 						<FormLabel fontFamily="Anek Bangla, sans-serif" fontSize='1.1rem' fontWeight='600'>Type of consult:</FormLabel>
  					<Input fontFamily="Anek Bangla, sans-serif" borderRadius='5px' size='sm' w='100%' type='Text' placeholder="Ex. Grooming"/>

						
						<Box w='calc(100%/2 -10px)' display='flex' gap='5px' mt='15px'>
						<Box >
						<FormLabel fontFamily="Anek Bangla, sans-serif" fontSize='1.1rem' fontWeight='600'>Select a day:</FormLabel>
  					<Input fontFamily="Anek Bangla, sans-serif" borderRadius='5px' size='sm' w='156px' placeholder='Select a Specie' type='date'/>

						</Box>

						<Box>
						<FormLabel fontFamily="Anek Bangla, sans-serif" fontSize='1.1rem' fontWeight='600'>Select a time:</FormLabel>
  					<Select fontFamily="Anek Bangla, sans-serif" borderRadius='5px' size='sm' w='156px' placeholder='Select a time'>
    					<option>9:00</option>
   						<option>10:00</option>
							<option>11:00</option>
              <option>12:00</option>
              <option>13:00</option>
              <option>14:00</option>
              <option>15:00</option>
              <option>16:00</option>
              <option>17:00</option>
              <option>18:00</option>
  					</Select>
						</Box>
						</Box>

            <Box display='flex' justifyContent='center'>
            <Button
              paddingX='19px'
              paddingY='13px'
              mt='18px'
              colorScheme="blue"
              size="xs"
              borderRadius="full"
              fontFamily="Anek Bangla, sans-serif"
              fontSize='0.9rem'
              gap='6px'
            >
              Add
              <BsPlusCircle fontSize="15px" />
            </Button>
            </Box>

            </FormControl>
            </Box>

       
            <Box display='flex' justifyContent='center' mt='30px'>
            <Text fontFamily="Anek Bangla, sans-serif" color="#0B8CBF" fontWeight="600" fontSize="1.2rem">DATE SHIFT</Text>
            </Box>

            <Box display='flex' justifyContent='center'>
            <Box boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.15)" w='94%' h='90px' overflowY='scroll' 
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

          <DateShift name='Firulais' date='01/09/22' hour='18:00'/>
          <DateShift name='Firulais' date='01/09/22' hour='18:00'/>
          <DateShift name='Firulais' date='01/09/22' hour='18:00'/>
          <DateShift name='Firulais' date='01/09/22' hour='18:00'/>
          <DateShift name='Firulais' date='01/09/22' hour='18:00'/>
          <DateShift name='Firulais' date='01/09/22' hour='18:00'/>
          <DateShift name='Firulais' date='01/09/22' hour='18:00'/>
          
          </Box>
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
				onClick={onClose}>Cancel</Button>
            <Button 
				fontFamily="Anek Bangla, sans-serif"
				fontSize='0.8rem'
				colorScheme="blue"
				size="xs"
				borderRadius="full"
				w='90px' 
				onClick={onClose}>Continue
			</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewAppointment;
