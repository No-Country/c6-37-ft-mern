import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import useUser from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import InputChip from '../../components/InputChip';

const Login = () => {
  const toast = useToast();
  const { login, isLogged, isAdmin } = useUser();
  const [userInputs, setUserInputs] = useState({ email: '', password: '' });
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInputs({
      ...userInputs,
      [e.target.name]: e.target.value,
    });
  };

  let isNameError = false;
  let isPasswordError = false;

  const handleSubmit = async () => {
    if (userInputs.email === '' || userInputs.password === '') {
      toast({
        title: 'Error',
        description: 'Please fill all fields',
        status: 'error',
        duration: 9000,
        position: 'bottom-right',
        isClosable: true,
      });
      return;
    }

    // const url = 'https://pet-society-backend.herokuapp.com/usuarios';
    const url = 'http://localhost:5000/usuarios';

    await axios
      .post(url, {
        usuario: userInputs.email,
        contrasena: userInputs.password,
      })
      .then((res) => {
        setUser(res.data);

        toast({
          title: `Welcome.`,
          status: 'success',
          duration: 6000,
          position: 'bottom-right',
          isClosable: true,
        });
      })
      .catch((error) =>
        // console.log(error)
        toast({
          title: error.response.data.mesagge,
          description: 'Please try Again.',
          status: 'error',
          duration: 6000,
          position: 'bottom-right',
          isClosable: true,
        })
      );
  };

  const getClient = async () => {
    // const url = 'https://pet-society-backend.herokuapp.com/clientes/';
    const url = 'http://localhost:5000/clientes/';

    await axios
      .get(url + user.usuario)
      .then((res) => {
        let data = { ...res.data, isAdmin: user.isAdmin };
        login(data);
      })
      .catch((error) => console.log(error));
  };

  const createProfile = () => {
    let data = {
      name: 'Administrator',
      lastName: '',
      email: '',
      password: '',
      address: '',
      phoneNumber: '',
      isAdmin: true,
    };
    login(data);
  };

  useEffect(() => {
    isLogged && (isAdmin ? navigate('/admin') : navigate('/dashboard'));
    user && (user.isAdmin ? createProfile() : getClient());
  }, [isLogged, user]);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      margin="auto 0"
      pt="160px"
    >
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
            <Text
              as={RouterLink}
              to="/signup"
              fontWeight="bold"
              display="block"
            >
              Sign Up
            </Text>
          </Text>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
