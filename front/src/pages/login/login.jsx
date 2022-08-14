import React, { useEffect } from 'react';
import { Button, Stack, Text } from '@chakra-ui/react';
import useUser from './../../hooks/useUser';
import { useNavigate } from 'react-router-dom';

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
    <Stack alignItems="center" mt="100">
      <Text>Login</Text>
      <Button colorScheme="blue" onClick={onLoginSuccess}>
        Login
      </Button>
    </Stack>
  );
};

export default Login;
