import React from 'react';
import GridChipItem from './GridChipItem';
import { Grid } from '@chakra-ui/react';
import { motion } from "framer-motion";

const GridChip = ({ data, fSize, fWeight, stars, widthChip, heightChip }) => {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      alignItems="center"
      justifyItems="center"
      gap="25px"
    >
      
      {data.map((dato) => (
        <motion.div
        whileHover={{ scale: [null, 1.1, 1.1] }}
        transition={{ duration: 0.3 }}
        >
        <GridChipItem
          key={dato.id}
          img={dato.img}
          text={dato.text}
          fSize={fSize}
          fWeight={fWeight}
          client={dato.client}
          stars={stars}
          date={dato.date}
          widthChip={widthChip}
          heightChip={heightChip}
        />
        </motion.div>
      ))}

      {/* stars={true} */}

      {/* <GridChipItem img={"/assets/bath_icono.png"} text={"SPA AND GROOMING"}/> */}

      {/* <GridItem w="226px" boxShadow="0px 5px 8px rgba(0, 0, 0, 0.25)" rounded='xl'>
        <Flex direction="column" alignItems="center" justifyContent="center" gap="14px" h="150px">
          <Image src="/assets/bath_icono.png" w="60px"></Image>
          <Text fontSize="20px">SPA AND GROOMING</Text>
        </Flex>
      </GridItem>

      <GridItem w="226px" boxShadow="0px 5px 8px rgba(0, 0, 0, 0.25)" rounded='xl'>
        <Flex direction="column" alignItems="center" justifyContent="center" gap="14px" h="150px">
          <Image src="/assets/cat_icono.png" w="60px"></Image>
          <Text fontSize="20px">CAT SPECIALISTS</Text>
        </Flex>
      </GridItem>

      <GridItem w="226px" boxShadow="0px 5px 8px rgba(0, 0, 0, 0.25)" rounded='xl'>
        <Flex direction="column" alignItems="center" justifyContent="center" gap="14px" h="150px">
          <Image src="/assets/dog_icono.png" w="60px"></Image>
          <Text fontSize="20px">DOG SPECIALISTS</Text>
        </Flex>
      </GridItem>

      <GridItem w="226px" boxShadow="0px 5px 8px rgba(0, 0, 0, 0.25)" rounded='xl'>
        <Flex direction="column" alignItems="center" justifyContent="center" gap="14px" h="150px">
          <Image src="/assets/food_icono.png" w="60px"></Image>
          <Text fontSize="20px">PETSHOP</Text>
        </Flex>
      </GridItem>

      <GridItem w="226px" boxShadow="0px 5px 8px rgba(0, 0, 0, 0.25)" rounded='xl'>
        <Flex direction="column" alignItems="center" justifyContent="center" gap="14px" h="150px">
          <Image src="/assets/hotel_icono.png" w="60px"></Image>
          <Text fontSize="20px">PETDAYCARE</Text>
        </Flex>
      </GridItem>

      <GridItem w="226px" boxShadow="0px 5px 8px rgba(0, 0, 0, 0.25)" rounded='xl'>
        <Flex direction="column" alignItems="center" justifyContent="center" gap="14px" h="150px">
          <Image src="/assets/vet_icono.png" w="60px"></Image>
          <Text fontSize="20px">PET APPOINTMENTS</Text>
        </Flex>
    </GridItem> */}
    </Grid>
  );
};

export default GridChip;
