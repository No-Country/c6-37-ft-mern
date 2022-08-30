import { Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const AboutInfo = () => {
  return (
    <VStack gap='10' alignItems='end' userSelect='none'>
      <Heading as='h1' fontFamily='Anek Bangla, sans-serif' fontSize='64px' fontWeight='bold'>About Us</Heading>
      <Stack  gap={10} fontWeight='500'>
        <Text textAlign='end' fontSize='16px' w='613px' h='60px'>Pet Society is a company dedicated to pet care, we offer all kinds of specialized services of the best quality, always thinking about the health and well-being of pets and the tranquility of our users. </Text>
        <Text textAlign='end' fontSize='16px' w='613px' h='60px'>As a result we are able to offer to echa of our clients a comprehensive service attended by professionals of the highest quality, we think our patients are beings who deserve the best attention and special care.</Text>
      </Stack>

    </VStack>
  )
}

export default AboutInfo