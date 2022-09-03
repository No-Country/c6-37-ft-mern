import { Image, Stack } from '@chakra-ui/react';
import React from 'react';
import Navbar from './Navbar';
import useUser from './../hooks/useUser';
import Footer from './footer/Footer';

function Layout({ children }) {
  return (
    <Stack
      minH="100vh"
      alignItems="center"
      spacing="0px"
      w="100%"
      maxW="1280px"
      m="0 auto"
    >
      <Navbar />
      <Stack
        maxWidth='1280px'
        w="100%"
        spacing={0}>
        <Stack 
        display={{ base: 'none', lg: 'flex' }}
        maxWidth='1280px'
        w="100%">
        <Image src='/assets/top_wave.png'/>
        </Stack>
        {children}
      </Stack>
      <Footer />
    </Stack>
  );
}

export default Layout;
