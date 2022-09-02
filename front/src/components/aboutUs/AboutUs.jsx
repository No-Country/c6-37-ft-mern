import { Stack, HStack } from '@chakra-ui/react'
import React from 'react'
import AboutInfo from './AboutInfo'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
function AboutUs() {
  
  return (
    <Stack  minH='720px' pr={{ sm:'10', base: '0'}} data-aos="zoom-in-up" direction={{ sm:'row', base:'column-reverse'}} alignItems='center' >
      <Stack w={{base:'100%', sm: 'xl'}} maxWidth={{ sm:'xl', base: '500px'}} h={{sm:'720px', base: '300px'}} bgImage={'/assets/about-us-dog.png'} bgSize='cover' bgPosition='center' bgRepeat='no-repeat' >
      </Stack>
      <AboutInfo />
    </Stack>
  )
}

export default AboutUs