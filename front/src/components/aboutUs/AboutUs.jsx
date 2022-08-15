import { Stack, HStack } from '@chakra-ui/react'
import React from 'react'
import AboutInfo from './AboutInfo'

function AboutUs() {
  return (
    <HStack minH='720px' pr='10'>
      <Stack w='xl' h='720px' bgImage={'/assets/about-us-dog.png'} bgSize='cover' bgPosition='center' bgRepeat='no-repeat' >
      </Stack>
      <AboutInfo />
    </HStack>
  )
}

export default AboutUs