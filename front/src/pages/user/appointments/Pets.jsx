import React from "react";
import { Avatar, Box, Divider, Text, Tooltip } from "@chakra-ui/react";

const Pets = (props) => {
  return (
    <>
    <Box w='400px' overflow='hidden' display='flex' paddingX='15px' paddingY='4px'  _hover={{ background: "#0B8CBF", color: "White", cursor:"pointer",}}>
            <Avatar size='xs' />
            <Text id='namePet' marginLeft='10px' fontSize='1rem' fontWeight='bold' fontFamily="Anek Bangla, sans-serif">{props.name}</Text>
          </Box>
          <Divider />
    </>
  );
};

export default Pets;


