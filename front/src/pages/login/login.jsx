import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import useUser from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link as RouterLink } from 'react-router-dom';

let user = {
  id: '1',
  name: 'John Doe',
  imgUrl: 'https://bit.ly/dan-abramov',
  phone: '+01 984 039 492',
  address: 'Contoso Ltd 215 E Tasman CA San Jose',
};

const Login = () => {
  const { login, isLogged } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate('/dashboard');
    }
  }, [isLogged, navigate]);

  const onLoginSuccess = () => {
    login(user);
  };

  return (
    <Flex justifyContent="center" alignItems="center" margin='auto 0' pt='160px'>
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
          <Heading color="white" size="lg" align="center" mt="50px" mb="40px">
            WELCOME BACK!
          </Heading>

          <InputGroup w="195px" h="30px">
            <InputLeftElement
              h="30px"
              pointerEvents="none"
              children={<MdOutlineEmail color="#718096" />}
            />
            <Input
              className="inputEmail"
              w="195px"
              h="30px"
              bg="#ffffff"
              borderRadius="23px"
              placeholder="Email"
              fontFamily="Anek Bangla, sans-serif"
            />
          </InputGroup>

          <InputGroup w="195px" h="30px">
            <InputLeftElement
              h="87px"
              pointerEvents="none"
              children={<RiLockPasswordLine color="#718096" />}
            />
            <Input
              type="password"
              h="30px"
              w="195px"
              mt="30px"
              bg="#ffffff"
              borderRadius="23px"
              placeholder="Password"
              fontFamily="Anek Bangla, sans-serif"
            />
          </InputGroup>

          <br />

          <Button borderRadius="64" mt="40px" size="sm" color="#0B8CBF" onClick={onLoginSuccess}>
            Continue
          </Button>

          <Text mt="30px" color="#fff" fontWeight="300">
            Don't you have an account?
            <Text as={RouterLink} to="/signup" fontWeight="bold" display='block'>
              Sign Up
            </Text>
          </Text>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
