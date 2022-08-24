import {
  Box,
  Stack,
  Image,
  Heading,
  Button,
  Text,
  Flex,
  useToast,
} from '@chakra-ui/react';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlinePhone } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { MdPlace } from 'react-icons/md';
import useUser from '../../hooks/useUser';
import { useEffect, useState } from 'react';
import InputChip from './../../components/InputChip';
import axios from 'axios';
import SignUpForm from './SignUpForm';
import { createClient } from '../../services/clients';
import { createUser } from '../../services/users';

function Signup() {
  const toast = useToast();
  const { isLogged } = useUser();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {

    await createUser(user).then(()=>{
      createClient(user).catch((error) => console.log(error));
        toast({
          title: 'Successfully Registered.',
          status: 'success',
          duration: 6000,
          position: 'bottom-right',
          isClosable: true,
        })
      })
      .then(() => {
        navigate('/login');
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    isLogged && (isAdmin ? navigate('/admin') : navigate('/dashboard'));
  }, [isLogged]);

  return (
    <Flex justifyContent="center" alignItems="center" m="auto" pt="160px">
      <SignUpForm handleChange={handleChange} handleSubmit={handleSubmit} />
    </Flex>
  );
}

export default Signup;
