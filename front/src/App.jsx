import { Stack } from '@chakra-ui/react'
import Header from './components/header/Header'
import Navbar from './layout/Navbar'
import Footer from './layout/footer/Footer'


function App() {

  return (
    <Stack alignItems='center' minH='100vh' >
      <Stack spacing='0px'>
        <Navbar />
        <Header />
      </Stack>
      
      <Footer />
    </Stack>
  )
}

export default App
