import { Stack } from '@chakra-ui/react'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout(props) {
  return (
    <Stack minH='100vh'>
      <Stack minH='100vh' w='1280px' bgImage='/assets/hero_background.png' bgRepeat='no-repeat' bgSize='contain' bgPosition='top'>
        <Navbar />
        {props.children}
      </Stack>
      <Footer />
    </Stack>
  )
}

export default Layout