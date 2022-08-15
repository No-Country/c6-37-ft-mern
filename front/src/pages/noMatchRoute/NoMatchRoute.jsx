
import { Box, Stack, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export default function NoMatchRoute () {
  return (
    <>
      <Stack justifyContent='center' alignItems='center' mt={100}>
        <Text variant='h1' color='primary' sx={{ textTransform: 'uppercase' }}>
          Error 404 age Not Found
        </Text>
        <Text variant='h2' color='initial' sx={{ textTransform: 'uppercase', mt: 2 }}>
          Maybe the page was eliminated or the URL is wrong
        </Text>
      </Stack>
    </>
  )
}
