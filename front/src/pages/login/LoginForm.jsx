import React from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

const LoginForm = () => {
  return (
    <Stack
      spacing="0px"
      direction={{ base: 'column', sm: 'row' }}
      w={{ sm: '620px', base: '407px' }}
      h={{ sm: '407px', base: '750px' }}
      borderRadius="22px"
      my="center"
      fontFamily="Anek Bangla, sans-serif"
      mt="30px"
      boxShadow="5px 5px 15px 0px gray"
    >
      <Box
        w={{ sm: '50%', base: '100%' }}
        h={{ sm: '100%', base: '45%' }}
        borderLeftRadius={{ sm: '22px', base: '0px' }}
        // borderTopRadius={{ sm: "0pxpx", base: "22px" }}
      >
        <Image
          src="/assets/login_bg.jpg"
          boxSize="407px"
          objectFit="cover"
          borderLeftRadius={{ sm: '22px', base: '0px' }}
          // borderTopRadius={{ sm: "0pxpx", base: "22px" }}
        />
      </Box>

      <Box
        w={{ sm: '50%', base: '100%' }}
        h={{ sm: '100%', base: '55%' }}
        bg="#0B8CBF"
        // borderBottomRadius={{ base:"22px", sm: "0px" }}
        borderRightRadius={{ sm: '22px', base: '0px' }}
        align="center"
      >
        <Heading color="white" size="lg" align="center" my="50px">
          WELCOME BACK!
        </Heading>

        <FormControl
          isInvalid={isNameError}
          display="flex"
          flexDirection="column"
          alignItems="center"
          w="220px"
        >
          <InputChip
            type="text"
            name="email"
            placeholder="Email"
            handleChange={handleChange}
            children={<MdOutlineEmail color="#718096" />}
          />
        </FormControl>
        <FormControl
          isInvalid={isPasswordError}
          display="flex"
          flexDirection="column"
          alignItems="center"
          w="220px"
          mt="30px"
        >
          <InputChip
            type="password"
            name="password"
            placeholder="Password"
            handleChange={handleChange}
            children={<RiLockPasswordLine color="#718096" />}
          />
        </FormControl>

        <Button
          borderRadius="64"
          mt="30px"
          size="sm"
          color="#0B8CBF"
          onClick={handleSubmit}
        >
          Continue
        </Button>

        <Text mt="30px" color="#fff" fontWeight="300">
          Don't you have an account?
          <Text as={RouterLink} to="/signup" fontWeight="bold" display="block">
            Sign Up
          </Text>
        </Text>
      </Box>
    </Stack>
  );
};

export default LoginForm;
