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
        }
      }
    }
  }
})

export default theme;