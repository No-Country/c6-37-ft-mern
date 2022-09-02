import { Stack, HStack } from '@chakra-ui/react';
import React from 'react';
import AboutInfo from './AboutInfo';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
function AboutUs() {
  return (
    <Stack
      minH="720px"
      pr={{ md: '10', base: '0' }}
      data-aos="zoom-in-up"
      direction={{ md: 'row', base: 'column-reverse' }}
      alignItems="center"
    >
      <Stack
        w={{ base: '100%', md: 'xl' }}
        alignSelf={{ md: 'end', lg: 'auto' }}
        maxWidth={{ md: 'xl', base: '500px' }}
        h={{ lg: '720px',md:'460px', base: '300px' }}
        bgImage={'/assets/about-us-dog.png'}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      ></Stack>
      <AboutInfo />
    </Stack>
  );
}

export default AboutUs;
