import { Button, Flex, Image, Stack, Text } from '@chakra-ui/react'


const Navbar = () => {


  return (
    <Stack bg='rgba(88, 88, 88, 0.315)'  position='fixed' h='64px' w='1280px' direction='row' justifyContent='space-between' alignItems='center' px='5' >
      <Flex w='150px'>
        <Image src='/assets/logo.png' alt='logo' w='75px'/>
      </Flex>

      <Flex gap={10}>
        <Text variant='nav'>home</Text>
        <Text variant='nav'>services</Text>
        <Text variant='nav'>shop</Text>
        <Text variant='nav'>booking</Text>
        <Text variant='nav'>contact</Text>
      </Flex>

      <Flex gap='5'>
        <Button borderRadius='64' color='#0B8CBF' w='90px' h='38px'>Login</Button>
        <Button bg='transparent' color='white' _hover={{bg: 'none'}} >Sign Up</Button>
      </Flex>
    </Stack>
  )
}

export default Navbar;