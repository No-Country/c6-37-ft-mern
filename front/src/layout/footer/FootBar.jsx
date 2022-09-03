import { HStack, Stack, Text, VStack } from "@chakra-ui/react"
import {FaFacebookSquare,FaInstagramSquare } from 'react-icons/fa'

const FootBar = () => {
  return (
    <VStack gap='5'>
      <Stack direction='row' gap={{md:'10', base:'3'}}>
        <Text variant='footbar' >Home</Text>
        <Text variant='footbar' >services</Text>
        <Text variant='footbar' >about us</Text>
        <Text variant='footbar' >petshop</Text>
        <Text variant='footbar' >contact</Text>
      </Stack>
      <HStack color='white' gap='3' fontSize='24px'>
        <FaInstagramSquare />
        <FaFacebookSquare />
      </HStack>
    </VStack>
  )
}

export default FootBar