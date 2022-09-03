import React from 'react';
import {
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ search, handleChange }) => {
  return (
    <Grid templateColumns={{md:'repeat(3, 1fr)', base:'repeat(1, 1fr)'}} gap={{md:8, base: 0}}>
      {search.map((item, index) => (
        <GridItem mb="20px" key={index} maxW='250px'>
          <InputGroup h="42px">
            <InputLeftElement
              pointerEvents="none"
              children={<FaSearch color="#718096" />}
            />
            <Input fontSize="sm" placeholder={'Search ' + item} bg="#E6E6E6" name={item} onChange={handleChange} />
          </InputGroup>
        </GridItem>
      ))}
    </Grid>
  );
};

export default SearchBar;
