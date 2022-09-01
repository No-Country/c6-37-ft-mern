import React from 'react';
import GridChip from './../services/GridChip';
import { Stack, Text } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
let datos = [
  {
    id: 1,
    img: 'https://bit.ly/dan-abramov',
    text: '“Excellent service, excellent veterinary doctor and nice facilities. Highly recommended ”',
    client: 'Aaron S. Bliss',
    date: '29/08/2022',
  },

  {
    id: 2,
    img: 'https://bit.ly/prosper-baba',
    text: '“The vet is an excellent person and very accurate in his diagnoses, very kind and careful with pets.”',
    client: 'Howard Smith',
    date: '16/08/2022',
  },

  {
    id: 3,
    img: 'https://bit.ly/sage-adebayo',
    text: '“The doctor answered all my questions, he is really good, my cat recovered well. Also good prices.”',
    client: 'Robert J.',
    date: '02/08/2022',
  },

  {
    id: 4,
    img: 'https://bit.ly/code-beast',
    text: '“We always brought our puppy here, they take care of him as much as we do, highly recommended.”',
    client: 'Nicholas King',
    date: '25/07/2022',
  },

  {
    id: 5,
    img: 'https://bit.ly/ryan-florence',
    text: '“Very good attention, they took care of Firulais very well and also they have really affordable prices”',
    client: 'Aaron Silva',
    date: '12/07/2022',
  },

  {
    id: 6,
    img: 'https://bit.ly/kent-c-dodds',
    text: '“Excellent place and very good attention. They are friendly and know how to treat pets.”',
    client: 'John E. Green',
    date: '11/07/2022',
  },
];

const CustomerReviews = () => {
  return (
    <div data-aos="zoom-in-up">
    <Stack alignItems="center" justifyContent="center" w="1280px" gap="60px" py={20} >
      <Stack>
        <Text
          fontSize="36px"
          fontFamily="Anek Bangla, sans-serif"
          fontWeight="bold"
        >
          CUSTOMERS REVIEWS
        </Text>
      </Stack>

      <GridChip
        data={datos}
        fSize={'16px'}
        fWeight={'regular'}
        stars={true}
        widthChip="310px"
        heightChip="230px"
        gapChip="25px"
      />
      <Stack name='contact'></Stack>
    </Stack>
    </div>
  );
};

export default CustomerReviews;
