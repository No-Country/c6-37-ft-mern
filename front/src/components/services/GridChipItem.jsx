import React from "react";
import {
  Text,
  Image,
  Avatar,
  Flex,
  GridItem,
} from "@chakra-ui/react";

const GridChipItem = ({
  img,
  text,
  fSize,
  fWeight,
  stars = false,
  client = "",
  date = "",
  widthChip,
  heightChip
}) => {
  return (
    <GridItem
      w={widthChip}
      boxShadow="0px 5px 8px rgba(0, 0, 0, 0.25)"
      rounded="xl"
      p="25px"
      
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap="14px"
        h={heightChip}
        
      >
        {stars ? <Avatar name='Dan Abrahmov' src={img} /> : 
        <Image src={img} w="60px"></Image>}
        {stars && <Image src="/assets/stars.png" w="73px" />}
        <Text fontSize={fSize} fontWeight={fWeight} textAlign="center" fontFamily='Anek Bangla, sans-serif'>
          {text}
        </Text>
        {client != "" && (
          <Text fontSize="16px" fontWeight="bold" fontFamily='Anek Bangla, sans-serif'>
            {client}
          </Text>
        )}
        {date != "" && (
          <Text fontSize="12px" opacity="0.7">
            {date}
          </Text>
        )}
      </Flex>
    </GridItem>
  );
};

export default GridChipItem;
