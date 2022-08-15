import { Image, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import ContactCards from './ContactCards'
const ContactMap = () => {
  return (
    <Stack bgImage='/assets/mapaTest.png' h='720px' w='1180px' bgRepeat='no-repeat' zIndex='-1' bgPosition='right' justifyContent='end' py={16} >
      <VStack alignItems='left' spacing='-50px'>
        <Image src='/assets/contact-cat.png' h='333px' w='312px' />
        <ContactCards />
      </VStack>
    </Stack>
    )
}

export default ContactMap