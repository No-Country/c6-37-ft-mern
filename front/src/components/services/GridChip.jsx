import React from 'react';
import GridChipItem from './GridChipItem';
import { Grid } from '@chakra-ui/react';
import { motion } from "framer-motion";

const GridChip = ({ data, fSize, fWeight, stars, widthChip, heightChip, gridColumn }) => {
  return (
    <Grid
      templateColumns={{base:gridColumn, sm:"repeat(3, 1fr)"}}
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

    </Grid>
  );
};

export default GridChip;
