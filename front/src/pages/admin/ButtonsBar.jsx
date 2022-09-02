import React from "react";
import { Button, Flex, Heading, Stack, useDisclosure } from '@chakra-ui/react';



const ButtonsBar = ({activeItem, setActiveItem }) => {
    return ( 

        <Flex gap="5" pb='2'>
            <Button
              size="sm"
              px="7"
              borderRadius="0"
              bgColor="#C8C8C8"
              fontFamily="Anek Bangla, sans-serif"
              _hover={{ bg: 'blue.500', color: 'white' }}
              _active={{ bg: 'blue.500', color: 'white' }}
              _focus={{ bg: 'blue.500', color: 'white' }}
              isActive={activeItem === 1}
              onClick={() => setActiveItem(1)}
            >
              Today
            </Button>
            <Button
              size="sm"
              px="7"
              borderRadius="0"
              bgColor="#C8C8C8"
              fontFamily="Anek Bangla, sans-serif"
              _hover={{ bg: 'blue.500', color: 'white' }}
              _active={{ bg: 'blue.500', color: 'white' }}
              _focus={{ bg: 'blue.500', color: 'white' }}
              isActive={activeItem === 2}
              onClick={() => setActiveItem(2)}
            >
              Next
            </Button>
            <Button
              size="sm"
              px="7"
              borderRadius="0"
              bgColor="#C8C8C8"
              fontFamily="Anek Bangla, sans-serif"
              _hover={{ bg: 'blue.500', color: 'white' }}
              _active={{ bg: 'blue.500', color: 'white' }}
              _focus={{ bg: 'blue.500', color: 'white' }}
              isActive={activeItem === 3}
              onClick={() => setActiveItem(3)}
            >
              Previous
            </Button>
          </Flex>

     );
}
 
export default ButtonsBar;