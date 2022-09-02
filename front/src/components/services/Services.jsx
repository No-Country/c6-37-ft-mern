import React from 'react';
import GridChip from './GridChip';
import { Stack, Text } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
let datos = [
  {id: 1, img: '/assets/bath_icono.png', text: 'SPA AND GROOMING' },
  {id: 2, img: '/assets/cat_icono.png', text: 'CAT SPECIALISTS' },
  {id: 3, img: '/assets/dog_icono.png', text: 'DOG SPECIALISTS' },
  {id: 4, img: '/assets/food_icono.png', text: 'PETSHOP' },
  {id: 5, img: '/assets/hotel_icono.png', text: 'PET DAYCARE' },
  {id: 6, img: '/assets/vet_icono.png', text: 'PET APOINTMENTS' },
];

const Services = () => {
  return (
    <div data-aos='zoom-in-up'>
    <Stack alignItems="center" justifyContent="center" maxW="1280px" w='100%' gap="60px" py={20} name='services'>
      <Stack>
        <Text
          fontSize="36px"
          fontFamily="Anek Bangla, sans-serif"
          fontWeight="bold"
        >
          SERVICES
        </Text>
      </Stack>

      <GridChip
        data={datos}
        fSize={'20px'}
        fWeight={'bold'}
        widthChip={{ sm:"225px", base:'150px'}}
        heightChip={{ sm:"150px", base: '100px'}}
        gridColumn="repeat(2,1fr)"
      />
    </Stack>
    </div>
  );
};

export default Services;
