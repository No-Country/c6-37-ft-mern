import React from 'react';
import {
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ search }) => {
  return (
    <Grid templateColumns={'repeat(3, 1fr)'} gap={8}>
      {search.map((item, index) => (
        <GridItem mb="20px" key={index}>
          <InputGroup h="42px">
            <InputLeftElement
              pointerEvents="none"
              children={<FaSearch color="#718096" />}
            />
            <Input fontSize="sm" placeholder={'Search ' + item} bg="#E6E6E6" />
          </InputGroup>
        </GridItem>
      ))}
    </Grid>
  );
};

export default SearchBar;
