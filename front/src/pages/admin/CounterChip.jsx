import { Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const CounterChip = ({item}) => {
    return ( 

        <Stack px='20px' py='10px' boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)"> 
            <Heading as="h3" fontSize="24px">
                {item.title}
            </Heading>
            <Text fontSize="36px" fontWeight="bold" alignSelf="flex-end">
                {item.count}
            </Text>
        </Stack>

     );
}
 
export default CounterChip;