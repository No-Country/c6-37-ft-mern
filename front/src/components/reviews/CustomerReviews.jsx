import React from 'react';
import GridChip from './../services/GridChip';
import { Stack, Text } from '@chakra-ui/react';

let datos = [
  {
    id: 1,
    img: 'https://bit.ly/dan-abramov',
    text: '“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasLorem Ipsum is simply”',
    client: 'Lorem Ipsum',
    date: '01/08/2022',
  },

  {
    id: 2,
    img: 'https://bit.ly/prosper-baba',
    text: '“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasLorem Ipsum is simply”',
    client: 'Lorem Ipsum',
    date: '01/08/2022',
  },

  {
    id: 3,
    img: 'https://bit.ly/sage-adebayo',
    text: '“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasLorem Ipsum is simply”',
    client: 'Lorem Ipsum',
    date: '01/08/2022',
  },

  {
    id: 4,
    img: 'https://bit.ly/code-beast',
    text: '“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasLorem Ipsum is simply”',
    client: 'Lorem Ipsum',
    date: '01/08/2022',
  },

  {
    id: 5,
    img: 'https://bit.ly/ryan-florence',
    text: '“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasLorem Ipsum is simply”',
    client: 'Lorem Ipsum',
    date: '01/08/2022',
  },

  {
    id: 6,
    img: 'https://bit.ly/kent-c-dodds',
    text: '“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasLorem Ipsum is simply”',
    client: 'Lorem Ipsum',
    date: '01/08/2022',
  },
];

const CustomerReviews = () => {
  return (
    <Stack alignItems="center" justifyContent="center" w="1280px" gap="60px" py={20}>
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
    </Stack>
  );
};

export default CustomerReviews;
