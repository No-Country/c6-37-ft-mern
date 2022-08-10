import { HStack, Stack, Text, VStack } from "@chakra-ui/react"
import { TiSocialInstagram, TiSocialFacebook } from 'react-icons/ti'

const FootBar = () => {
  return (
    <VStack gap='5'>
      <Stack direction='row' gap='10'>
        <Text variant='footbar' >Home</Text>
        <Text variant='footbar' >services</Text>
        <Text variant='footbar' >about us</Text>
        <Text variant='footbar' >petshop</Text>
        <Text variant='footbar' >contact</Text>
      </Stack>
      <HStack color='white' gap='3' fontSize='24px'>
        <TiSocialInstagram />
        <TiSocialFacebook />
      </HStack>
    </VStack>
  )
}

export default FootBar