import React from 'react';
import {
  Box,
  Stack,
  Image,
  Heading,
  Button,
  Text,
  Flex,
} from '@chakra-ui/react';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlinePhone } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdPlace } from 'react-icons/md';
import InputChip from './../../components/InputChip';
import { Link as RouterLink } from 'react-router-dom';

const SignUpForm = ({handleChange, handleSubmit}) => {
  return (
    <Stack
      spacing="0px"
      direction={{ base: 'column', md: 'row' }}
      w={{ base: '440px', md: '740px' }}
      h={{ base: '780px', md: '470px' }}
      borderRadius="22px"
      boxShadow="5px 5px 15px 0px gray"
    >
      <Box
        w={{ base: '100%', md: '40%' }}
        h={{ base: '40%', md: '100%' }}
        borderLeftRadius={{ base: '0px', md: '22px' }}
        // borderTopRadius={{ base: "22px", md: "0pxpx" }}
      >
        <Image
          src="/assets/signup_bg.jpg"
          boxSize="470px"
          objectFit="cover"
          borderLeftRadius={{ base: '0px', md: '22px' }}
          // borderTopRadius={{ base: "22px", md: "0pxpx" }}
        />
      </Box>

      <Box
        py="10px"
        px="20px"
        w={{ base: '100%', md: '60%' }}
        h={{ base: '60%', md: '100%' }}
        bg="#0B8CBF"
        // borderBottomRadius={{ base:"22px", md: "0px" }}
        borderRightRadius={{ base: '0px', md: '22px' }}
        align="center"
      >
        <Heading color="white" size="lg" align="center" my="10">
          SIGN UP
        </Heading>

        <Stack flexDirection="column" gap={2}>
          {/* Contenedor de name y lastName*/}
          <Flex justifyContent="center" gap="10px">
            {/* Contenedor de name*/}
            <InputChip
              type="text"
              name="name"
              placeholder="Name"
              handleChange={handleChange}
              children={<BsFillPersonFill color="#718096" />}
            />

            {/* Contenedor de lastName*/}

            <InputChip
              type="text"
              name="lastName"
              placeholder="Last Name"
              handleChange={handleChange}
              children={<BsFillPersonFill color="#718096" />}
            />
          </Flex>

          {/* Contenedor de phone y email */}
          <Flex justifyContent="center" gap="10px">
            {/* Contenedor phone */}

            <InputChip
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              handleChange={handleChange}
              children={<AiOutlinePhone color="#718096" />}
            />

            {/* contenedor email */}

            <InputChip
              type="email"
              name="email"
              placeholder="Email"
              handleChange={handleChange}
              children={<MdOutlineEmail color="#718096" />}
            />
          </Flex>

          {/* Contenedor de Adress */}

          <InputChip
            type="text"
            name="address"
            placeholder="Address"
            handleChange={handleChange}
            children={<MdPlace color="#718096" />}
          />

          {/* Contenedor de password and repeat*/}
          <Flex justifyContent="center" gap="10px">
            {/* Contenedor de password*/}

            <InputChip
              type="password"
              name="password"
              placeholder="Password"
              handleChange={handleChange}
              children={<RiLockPasswordLine color="#718096" />}
            />

            {/* Contenedor de repeat password*/}

            <InputChip
              type="password"
              name="repeatPassword"
              placeholder="Repeat Password"
              handleChange={handleChange}
              children={<RiLockPasswordLine color="#718096" />}
            />
          </Flex>
        </Stack>
        <Button
          borderRadius="64"
          mt="40px"
          size="sm"
          color="#0B8CBF"
          onClick={handleSubmit}
        >
          Continue
        </Button>

        <Text mt="30px" color="#fff" fontWeight="300">
          Do you have an account?{' '}
          <Text as={RouterLink} to="/login" fontWeight="bold" display="block">
            Login
          </Text>
        </Text>
      </Box>
    </Stack>
  );
};

export default SignUpForm;
