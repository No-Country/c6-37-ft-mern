import { Box, Flex, VStack, Stack, Text, Heading } from '@chakra-ui/react'
import { BsArrowDownCircle } from 'react-icons/bs'

const Info = () => {
  return (
    <VStack gap='5' userSelect='none' h='720px' alignItems='center' justifyContent='center'>
      <Flex direction='column' alignItems='center' lineHeight='1px' w='204px'>
        <Text fontFamily='Anek Bangla, sans-serif' fontSize='26px'>The</Text>
        <Heading fontFamily='Anek Bangla, sans-serif' fontSize='70px' fontWeight='bold'>Best</Heading>
        <Text fontFamily='Anek Bangla, sans-serif' fontSize='26px' >For your</Text>
        <Heading fontFamily='Anek Bangla, sans-serif' fontSize='113px' fontWeight='bold'>Pet</Heading>
      </Flex>

      <Box w='370px' >
        <Text textAlign='center' fontWeight='500' fontSize='16px'>Lorem ipsu is simply dummy text of the printing and typesetting industry. lorem ipsu has</Text>
      </Box>

      <Stack as='button' w='192px' h='48px' borderRadius='50' bg='#035AA6' alignItems='center' direction='row' justifyContent='center' color='#fff' gap='4' cursor='pointer'>
        <Text fontSize='22px' >See more</Text>
        <Box fontSize='26px'>
          <BsArrowDownCircle />
        </Box>
      </Stack>
    </VStack>
  )
}

export default Info