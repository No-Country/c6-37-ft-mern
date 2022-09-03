import {
  Box,
  Heading,
  VStack,
  Text,
  Image,
  Button,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const ChipBoxesShop = ({
  priceNumber,
  descriptionPetshop,
  imagePetshop,
  titlePetshop,
  descriptionUnder,
}) => {
  return (
    <motion.button whileHover={{ scale: 1.1 }}>
      <VStack
        p="5"
        w="250px"
        h="440px"
        borderRadius="14"
        boxShadow="3px 5px 40px 2px rgba(0, 0, 0, 0.25)"
        spacing="0"
        position="relative"
      >
        <Flex
          bg="#0B8CBF"
          w="80px"
          h="80px"
          color="white"
          rounded="full"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top="-45px"
          left="-30px"
        >
          10% OFF!
        </Flex>
        <Image src={imagePetshop} h="250px" />
        <Heading fontSize="22px" fontWeight="bold" py="10px">
          {titlePetshop}
        </Heading>
        <Text>{descriptionPetshop}</Text>
        <Text textAlign="center">{descriptionUnder}</Text>
        <Text fontSize="24px" fontWeight='bold'py="3">
          {priceNumber}
        </Text>
        {/* <Box>
          <Button
            p="0px 10px"
            borderRadius="50px"
            bg="#0B8CBF"
            color="white"
            fontWeight="regular"
            transition="all linear 0.4s"
            _hover={{ color: '#fff', bg: 'gray.700' }}
          >
            + Add to cart
          </Button>
        </Box> */}
      </VStack>
    </motion.button>
  );
};

export default ChipBoxesShop;
