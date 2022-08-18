import { Input, Stack, Text } from '@chakra-ui/react'


const EditCard = (props) => {


  return (
    <Stack w='209px' h='51px'>
      <Text fontWeight='bold' fontFamily='Anek Bangla, sans-serif' fontsize='15px'>{props.title}</Text>
      <Input fontSize='16px' pl='5' value={props.value} name={props.name} onChange={props.handleChange} variant='unstyled' shadow='lg' w='240px' h='30px' rounded={0} placeholder={props.logic} _placeholder={{fontSize: '12px'}}/>
    </Stack>
  )
}

export default EditCard