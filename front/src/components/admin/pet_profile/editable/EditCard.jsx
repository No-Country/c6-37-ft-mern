import { Input, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

function EditCard(props) {

  
  
  return (
    <Stack>
      <Text textTransform='capitalize' fontWeight='bold' fontSize='14px' fontFamily='Anek Bangla, sans-serif' >{props.label}</Text>
      <Input onChange={props.handleChange} fontSize='15px' fontWeight='semibold' _placeholder={{fontWeight:'light'}} placeholder={props.data ? props.data : props.label} name={props.label} />
    </Stack>
  )
}

export default EditCard