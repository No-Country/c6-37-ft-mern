import { Heading, Image, HStack, VStack, Text } from '@chakra-ui/react'
import { AiOutlineLine } from 'react-icons/ai'

const ShopCard = (props) => {
  return (
    <VStack cursor='pointer' h='450px' w='300px' bg='#fff' borderRadius={20} justifyContent='center' spacing='0px' pb='5'>
      <Image src={props.src} alt='product image' maxW='262px' h='170px' objectFit='contain' />

      <HStack fontSize='50px'>
        <AiOutlineLine />
        <Heading as='h2' textTransform='uppercase' fontWeight='bold' fontFamily='Anek Bangla, sans-serif' fontSize='24px' >{props.name}</Heading>
        <AiOutlineLine />
      </HStack>

      <VStack>
        <HStack w='209px' h='122px' justifyContent='center'>
          <Heading as='h2' fontWeight='bold' fontFamily='Anek Bangla, sans-serif' fontSize='96px'>{props.off}</Heading>
          <VStack fontWeight='bold' fontSize='48px' fontFamily='Anek Bangla, sans-serif' spacing='0px' justifyContent='center' alignItems='flex-start' >
            <Text h='40px'>%</Text>
            <Text>OFF</Text>
          </VStack>
        </HStack>

        <VStack lineHeight='25px' fontSize='24px' fontWeight='500' alignItems='center'>
          <Text fontWeight='700' fontFamily='Anek Bangla'>{props.text1}</Text>
          <Text  fontFamily='Anek Bangla'>{props.text2}</Text>
          <Text fontFamily='Anek Bangla'>{props.text3}</Text>
        </VStack>

      </VStack>

    </VStack>
  )
}

export default ShopCard