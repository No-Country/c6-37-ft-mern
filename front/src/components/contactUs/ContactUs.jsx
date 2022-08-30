import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import ContactMap from './ContactMap'
import Container from './Container'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
function ContactUs() {
  return (
    <div data-aos='zoom-in-up'>
    <Stack h='720px' w='1280px' py='5' alignItems='center' position='relative' >
      <Heading fontFamily='Anek Bangla, sans-serif' fontSize='36px' fontWeight='bold' textAlign='center' >Contact Us</Heading>
        <Container />
        <ContactMap />
    </Stack></div>
  )
}

export default ContactUs