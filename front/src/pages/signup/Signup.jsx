import { Flex, useToast } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import useUser from './../../hooks/useUser';
import { useEffect, useState } from 'react';
import SignUpForm from './SignUpForm';
import { createClient } from './../../services/clients';
import { createUser } from './../../services/users';

function Signup() {
  const toast = useToast();
  const { isLogged, isAdmin } = useUser();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
    password: '',
    repeatPassword: '',
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (
      !!!user.name ||
      !!!user.lastName ||
      !!!user.phoneNumber ||
      !!!user.email ||
      !!!user.address ||
      !!!user.password ||
      !!!user.repeatPassword
    ) {
      toast({
        title: 'Error',
        description: 'Please fill all fields',
        status: 'error',
        duration: 6000,
        position: 'bottom-right',
        isClosable: true,
      });
      return;
    }
    if (user.repeatPassword !== user.password) {
      toast({
        title: 'Error',
        description: 'Passwords must match',
        status: 'error',
        duration: 6000,
        position: 'bottom-right',
        isClosable: true,
      });
      return;
    }

    delete user.repeatPassword;
    
    await createUser(user)
      .then(() => {
        createClient(user).catch((error) => console.log(error));
        toast({
          title: 'Successfully Registered.',
          status: 'success',
          duration: 6000,
          position: 'bottom-right',
          isClosable: true,
        });
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
