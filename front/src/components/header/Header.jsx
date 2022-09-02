import { Box, Image, Stack } from '@chakra-ui/react'
import React from 'react'
import Info from './Info'

function Header() {
  return (
    <Stack direction={{ sm:'row', base: 'column'}} bgImage='/assets/hero_background.png' maxW='1280px' w='100%' h='720px' alignItems='center' mt={{sm:'0', base: '50px'}}
    justifyContent='center' gap={{sm:'36', base:'5'}} name="home">
      <Info />
      <Box h='720px' bgImage='/assets/dog_hero.png' w='100%' maxW='500px' bgRepeat='no-repeat' bgSize='contain' bgPosition='bottom' />
    </Stack>
  )
}

export default Header