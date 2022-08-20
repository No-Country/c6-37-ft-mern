import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import Info from './Info'

function OwnerCont() {
  return (
    <Stack pr='40' >
      <Stack w='625px' h='259px'>
        <Heading as='h2' pl='2' fontFamily='Anek Bangla, sans-serif' fontWeight='bold' fontSize='24px' >Owner</Heading>
        <Info />
      </Stack>
    </Stack>
  )
}

export default OwnerCont