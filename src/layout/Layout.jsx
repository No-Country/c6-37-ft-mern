import { Stack } from '@chakra-ui/react'
import React from 'react'
import Footer from './footer/Footer'
import Navbar from './Navbar'

function Layout(props) {
  return (
    <Stack minH='100vh'>
      <Stack minH='50vh' w='1280px' bgImage='/assets/top_wave.png' bgRepeat='no-repeat' >
        <Navbar />
        {props.children}
      </Stack>
      <Footer />
    </Stack>
  )
}

export default Layout