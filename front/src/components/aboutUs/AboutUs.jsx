import { Stack, HStack } from '@chakra-ui/react'
import React from 'react'
import AboutInfo from './AboutInfo'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
function AboutUs() {
  
  return (
    <HStack  minH='720px' pr='10' data-aos="zoom-in-up">
      <Stack w='xl' h='720px' bgImage={'/assets/about-us-dog.png'} bgSize='cover' bgPosition='center' bgRepeat='no-repeat' >
      </Stack>
      <AboutInfo />
    </HStack>
  )
}

export default AboutUs