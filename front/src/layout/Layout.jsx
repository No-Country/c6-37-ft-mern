import { Stack } from '@chakra-ui/react';
import React from 'react';
import Navbar from './Navbar';
import useUser from './../hooks/useUser';
import Footer from './footer/Footer';

function Layout({ children }) {
  const { isLogged } = useUser();

  return (
    <Stack minH="100vh" alignItems="center" spacing="0px" w="1280px" m="0 auto">
      <Navbar />
      <Stack
        minH="50vh"
        w="1280px"
        bgImage="/assets/top_wave.png"
        bgRepeat="no-repeat"
      >
        {children}
      </Stack>
      <Footer />
    </Stack>
  );
}

export default Layout;
