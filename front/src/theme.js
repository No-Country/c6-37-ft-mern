import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components : {
    Text: {
      variants : {
        'nav': {
          color: '#035AA6',
          fontSize: '16px',
          fontWeight: 'bold',
          textTransform:'capitalize'
        },
        'footbar': {
          color: '#fff',
          fontWeight: 'light',
          textTransform: 'capitalize',
          fontSize: {md:'16px', base:'14px'}
        }
      }
    }
  }
})

export default theme;