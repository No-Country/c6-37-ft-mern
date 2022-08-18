import { Stack } from '@chakra-ui/react'
import BoxesShop from './pscomponents/BoxesShop'
import SearchShop from './pscomponents/SearchShop';

function PetShop() {
    return (
        <Stack mt="140px">
            <SearchShop/>
            <BoxesShop/>
        </Stack>
    )
}

export default PetShop;
