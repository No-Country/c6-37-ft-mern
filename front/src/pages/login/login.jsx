import React, { useEffect, useState } from 'react';
import { Flex, useToast } from '@chakra-ui/react';
import useUser from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginForm from './LoginForm';
import { getUser, getUsers } from '../../services/users';
import { getClient } from '../../services/clients';



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

  const handleSubmit = async () => {
    // if (userInputs.email === '' || userInputs.password === '') {
    //   toast({
    //     title: 'Error',
    //     description: 'Please fill all fields',
    //     status: 'error',
    //     duration: 9000,
    //     position: 'bottom-right',
    //     isClosable: true,
    //   });

    //   return;
    // }

    await getUser(userInputs)
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

  const getClientData = async () => {
    await getClient(user.usuario)
      .then((res) => {
        login(res.data);
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
    user && (user.isAdmin ? createProfile() : getClientData());
  }, [isLogged, user]);

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      margin="auto 0"
      pt="160px"
    >
      <LoginForm handleChangeLogin={handleChange} handleSubmitLogin={handleSubmit} />
    </Flex>
  );
};

export default Login;
