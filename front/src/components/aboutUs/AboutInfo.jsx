import { Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const AboutInfo = () => {
  return (
    <VStack gap='10' alignItems='end' userSelect='none'>
      <Heading as='h1' fontFamily='Anek Bangla, sans-serif' fontSize='64px' fontWeight='bold'>About Us</Heading>
      <Stack  gap={10} fontWeight='500'>
        <Text textAlign='end' fontSize='16px' w='613px' h='60px'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</Text>
        <Text textAlign='end' fontSize='16px' w='613px' h='60px'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</Text>
      </Stack>

    </VStack>
  )
}

export default AboutInfo