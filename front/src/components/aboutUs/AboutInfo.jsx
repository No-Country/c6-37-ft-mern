import { Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const AboutInfo = () => {
  return (
    <VStack gap='10' alignItems={{ sm:'end', base: 'center'}} userSelect='none' justifySelf='center'>
      <Heading as='h1' fontFamily='Anek Bangla, sans-serif' fontSize={{ sm:'64px', base: '50px'}} fontWeight='bold'>About Us</Heading>
      <Stack  gap={10} fontWeight='500'>
        <Text textAlign={{ sm:'end', base: 'justify'}} fontSize='16px' w={{sm:'613px', base:'320px'}}>Pet Society is a company dedicated to pet care, we offer all kinds of specialized services of the best quality, always thinking about the health and well-being of pets and the tranquility of our users. </Text>
        <Text textAlign={{ sm:'end', base: 'justify'}} fontSize='16px' w={{sm:'613px', base:'320px'}}>As a result we are able to offer to echa of our clients a comprehensive service attended by professionals of the highest quality, we think our patients are beings who deserve the best attention and special care.</Text>
      </Stack>

    </VStack>
  )
}

export default AboutInfo