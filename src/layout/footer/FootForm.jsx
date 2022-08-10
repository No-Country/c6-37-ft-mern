import { Stack, chakra, Heading, Input, Box } from '@chakra-ui/react'
import { BsTelegram } from 'react-icons/bs'

const FootForm = () => {
  return (
    <Stack direction='row' alignItems='center' justifyContent='center' py='5' gap={4}>
      <Heading as='h3' color='#fff' fontFamily='Anek Bangla, sans-serif' fontSize='18px' fontWeight='500'>Newsletter</Heading>
      <chakra.form onSubmit={(e) => e.preventDefault()} bgColor='#fff' borderRadius='36' w='337.78px' h='60.5px' display='flex' alignItems='center' justifyContent='space-between' px='3'>
        <Input placeholder='Your email' pl='4' color='#0A142F' type='email' variant='unstyled' />
        <Box as='button' color='#0B8CBF' fontSize='40px' type='submit'>
          <BsTelegram />
        </Box>
      </chakra.form>
    </Stack>
  )
}

export default FootForm