import { Heading, Stack, VStack } from "@chakra-ui/react"
import Container from "./Container"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
function PetShopCarousel() {


  return (
    <div data-aos="zoom-in-up">
      <VStack bg='#0B8CBF' w='1280px' h='720px' borderTopLeftRadius='50' borderBottomRightRadius='50' py='6' gap='5' alignItems='center' justifyContent='center' mt='0' >
        <Heading color='#fff' fontSize='40px' fontWeight='bold' letterSpacing='2px' fontFamily='Anek Bangla, sans-serif' >PetShop</Heading>
        <Container />
      </VStack></div>
  )
}

export default PetShopCarousel