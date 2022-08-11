import { Box, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import Info from './Info'

function Header() {
  return (
    <Stack direction='row' bgImage='/assets/hero_background.png' w='1280px' h='720px' alignItems='center' justifyContent='center' gap='36' >
      <Info />
      <Box h='720px' bgImage='/assets/dog_hero.png' w='500px' bgRepeat='no-repeat' bgSize='contain' bgPosition='bottom' />
    </Stack>
  )
}

export default Header