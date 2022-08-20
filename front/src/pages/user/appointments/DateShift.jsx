import React from "react";
import { Box, Avatar, Text, Divider } from "@chakra-ui/react";
import { HiMinusCircle } from "react-icons/hi";


const DateShift = (props) => {
  return (
    <>
    
    <Box  overflow='hidden' display='flex' paddingX='15px' paddingY='4px'  >
        <Avatar size='xs' />
        <Text w='170px' marginLeft='10px' fontSize='1rem' fontWeight='bold' fontFamily="Anek Bangla, sans-serif">{props.name}</Text>
        <Text w='120px' marginLeft='10px' fontSize='1rem' fontWeight='bold' fontFamily="Anek Bangla, sans-serif">Day: {props.date}</Text>
        <Text w='105px' marginLeft='10px' fontSize='1rem' fontWeight='bold' fontFamily="Anek Bangla, sans-serif">Hour: {props.hour}</Text>
        <HiMinusCircle fontSize='23px' color='#DC3545' cursor='pointer'/>
    </Box>
    <Divider />
    
    </>
  );
};

export default DateShift;
