import React from "react";
import { HStack, Input, InputGroup, InputRightElement, Stack, Text } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchShop = () => {
    return (
        <Stack direction='column' alignItems='center' justifyContent='center' py='5' mb="80px">
            <InputGroup w="394px" h="42px" direction="row"  alignItems='center' justifyContent='center' mb="20px">
                <Input placeholder='Search...' borderRadius='50' boxShadow="0px 5px 8px #0B8CBF" bg="#E6E6E6"/>
                <InputRightElement 
                pointerEvents="none"
                children={<FaSearch color="#718096"/>}/>
            </InputGroup>
            <HStack gap="33px">
                <Text fontSize="20px" fontFamily="Anek Bangla, sans-serif">Food</Text>
                <Text fontSize="20px" fontFamily="Anek Bangla, sans-serif">Clothing</Text>
                <Text fontSize="20px" fontFamily="Anek Bangla, sans-serif">Leash / Collar</Text>
                <Text fontSize="20px" fontFamily="Anek Bangla, sans-serif">Toys</Text>
                <Text fontSize="20px" fontFamily="Anek Bangla, sans-serif">Bedding</Text>
            </HStack>
        </Stack> )}

export default SearchShop;
