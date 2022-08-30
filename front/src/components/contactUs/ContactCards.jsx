import { HStack, Link, Text, VStack } from "@chakra-ui/react"
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi'
import { FiPhoneCall } from 'react-icons/fi'
import {FaFacebookSquare,FaInstagramSquare } from 'react-icons/fa'


const ContactCards = () => {
  return (
    <VStack gap='5' bg='#0B8CBF' rounded='20' w='422px' h='399px' zIndex='1' alignItems='center' justifyContent='center' >

      <HStack alignItems='center' justifyContent='center' w='366px' color='white' gap='5' fontSize='54px'>
        <HiOutlineLocationMarker />
        <Text fontFamily='Anek Bangla' fontSize='17px' fontWeight='bold' w='285px'>Apolo avenue 250, Industrial, 64440 Monterrey, N.L.</Text>
      </HStack>

      <HStack color='white' w='366px' fontSize='54px' alignItems='center' justifyContent='left' gap='5'>
        <FiPhoneCall />
        <Text fontFamily='Anek Bangla' fontSize='17px' fontWeight='bold'>+52 123 456 7891</Text>
      </HStack>

      <HStack color='white' w='366px' fontSize='54px' alignItems='center' justifyContent='left' gap='5' >
        <HiOutlineMail />
        <Text fontFamily='Anek Bangla' fontSize='17px' fontWeight='bold'>PetSociety@correo.com</Text>
      </HStack>

      <HStack color='white' w='366px' fontSize='54px' alignItems='center' justifyContent='center' gap='2' userSelect='none' >
        <Link isExternal>
          <FaInstagramSquare />
        </Link>
        <Link isExternal>
          <FaFacebookSquare />
        </Link>
      </HStack>
    </VStack>
  )
}

export default ContactCards