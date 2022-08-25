import React from 'react';
import GridChip from './GridChip';
import { Stack, Text } from '@chakra-ui/react';

let datos = [
  {id: 1, img: '/assets/bath_icono.png', text: 'SPA AND GROOMING' },
  {id: 2, img: '/assets/cat_icono.png', text: 'CAT SPECIALISTS' },
  {id: 3, img: '/assets/dog_icono.png', text: 'DOG SPECIALISTS' },
  {id: 4, img: '/assets/food_icono.png', text: 'PETSHOP' },
  {id: 5, img: '/assets/hotel_icono.png', text: 'PET DAYCARE' },
  {id: 6, img: '/assets/vet_icono.png', text: 'PET APOINTMENTS' },
];

// sfc shortcut
const Services = () => {
  return (
    <Stack alignItems="center" justifyContent="center" w="1280px" gap="60px" py={20} id='services'>
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
        widthChip="225px"
        heightChip="150px"
      />
    </Stack>
  );
};

export default Services;
