import React from 'react';
import {
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import { motion } from 'framer-motion';

const SearchShop = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      py="5"
      mb="80px"
    >
      <InputGroup
        w="394px"
        h="42px"
        direction="row"
        alignItems="center"
        justifyContent="center"
        mb="20px"
      >
        <Input
          placeholder="Search..."
          borderRadius="50"
          boxShadow="0px 5px 8px #0B8CBF"
          bg="#E6E6E6"
        />
        <InputRightElement
          pointerEvents="none"
          children={<FaSearch color="#718096" />}
        />
      </InputGroup>
      <HStack gap="33px">

      <motion.div
          whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.8 }}>
        <Link
          activeClass="active"
          to="food"
          spy={true}
          offset={-100}
          smooth={true}
          duration={800}>
          <Text fontSize="20px" fontFamily="Anek Bangla, sans-serif" cursor='pointer'>
            Food
          </Text>
        </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.8 }}>
        <Link
          activeClass="active"
          to="clothing"
          spy={true}
          offset={-100}
          smooth={true}
          duration={900}>
          <Text fontSize="20px" fontFamily="Anek Bangla, sans-serif" cursor='pointer'>
            Clothing
          </Text>
        </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.8 }}>
        <Link
          activeClass="active"
          to="collar"
          spy={true}
          offset={-100}
          smooth={true}
          duration={1500}>
          <Text fontSize="20px" fontFamily="Anek Bangla, sans-serif" cursor='pointer'>
            Leash / Collar
          </Text>
        </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.8 }}>
        <Link
          activeClass="active"
          to="toys"
          spy={true}
          offset={-100}
          smooth={true}
          duration={1800}>
          <Text fontSize="20px" fontFamily="Anek Bangla, sans-serif" cursor='pointer'>
            Toys
          </Text>
        </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.8 }}
        >
        <Link
          activeClass="active"
          to="bedding"
          spy={true}
          offset={-100}
          smooth={true}
          duration={2300}
        >   
          <Text fontSize="20px" fontFamily="Anek Bangla, sans-serif" cursor='pointer' >
            Bedding
          </Text>
        </Link>
        </motion.div>
      </HStack>
    </Stack>
  );
};

export default SearchShop;
