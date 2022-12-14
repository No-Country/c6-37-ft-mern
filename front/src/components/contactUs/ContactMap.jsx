import { Image, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import ContactCards from './ContactCards'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const ContactMap = () => {
  return (
    <Stack bgImage='/assets/mapaTest.png' h='720px' w= '100%' maxW='1180px' bgRepeat='no-repeat' zIndex='-1' bgPosition='right' justifyContent='end' py={16} 
    direction='column' flexWrap='wrap'
    >
      <Stack 
      alignItems='left' spacing='-50px' direction='column'
      >
        <div data-aos='fade-right' data-aos-duration="1300">
        <Image src='/assets/contact-cat.png'  w='312px' />
        </div>
        <ContactCards />
      </Stack>
    </Stack>

    )
}

export default ContactMap