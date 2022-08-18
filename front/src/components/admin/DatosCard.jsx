import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const DatosCard = (props) => {
  return (
    <Flex direction='column' w='209px' h='51px'>
      <Text fontWeight='bold' fontFamily='Anek Bangla, sans-serif' fontsize='15px'>{props.title}:</Text>
      <Text fontWeight='light' fontSize='16px'>{props.text}</Text>
    </Flex>
    )
}

export default DatosCard