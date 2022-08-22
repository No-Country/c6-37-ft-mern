import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

function InfoCard(props) {
  return (
    <Flex direction='column'>
      <Text textTransform='capitalize' fontWeight='bold' fontSize='14px' fontFamily='Anek Bangla, sans-serif'>{props.title}</Text>
      <Text fontSize='15px' fontWeight='light'>{props.text}</Text>
    </Flex>
  )
}

export default InfoCard