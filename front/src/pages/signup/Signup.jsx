import {
  Box,
  Stack,
  Image,
  Input,
  Heading,
  Button,
  Text,
  Link,
  InputGroup,
  InputLeftElement,
  Flex,
} from '@chakra-ui/react';
import { RiLockPasswordLine } from 'react-icons/ri';
import { AiOutlinePhone } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { MdPlace } from 'react-icons/md';
import useUser from '../../hooks/useUser';
import { useEffect } from 'react';

function Signup() {
  const { isLogged } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate('/dashboard');
    }
  }, [isLogged, navigate]);

  return (
    <Flex justifyContent="center" alignItems="center" m="auto" pt="160px">
      <Stack
        spacing="0px"
        direction={{ base: 'column', sm: 'row' }}
        w={{ base: '440px', sm: '740px' }}
        h={{ base: '780px', sm: '470px' }}
        borderRadius="22px"
        boxShadow="5px 5px 15px 0px gray"
      >
        <Box
          w={{ base: '100%', sm: '40%' }}
          h={{ base: '40%', sm: '100%' }}
          borderLeftRadius={{ base: '0px', sm: '22px' }}
          // borderTopRadius={{ base: "22px", sm: "0pxpx" }}
        >
          <Image
            src="/assets/signup_bg.jpg"
            boxSize="470px"
            objectFit="cover"
            borderLeftRadius={{ base: '0px', sm: '22px' }}
            // borderTopRadius={{ base: "22px", sm: "0pxpx" }}
          />
        </Box>

        <Box
          padding="10px"
          w={{ base: '100%', sm: '60%' }}
          h={{ base: '60%', sm: '100%' }}
          bg="#0B8CBF"
          // borderBottomRadius={{ base:"22px", sm: "0px" }}
          borderRightRadius={{ base: '0px', sm: '22px' }}
          align="center"
        >
          <Heading color="white" size="lg" align="center" mt="40px" mb="40px">
            SIGN UP
          </Heading>

          {/* Contenedor de name y lastName*/}
          <Box
            w="calc(100%/2 -10px)"
            display="flex"
            justifyContent="center"
            gap="10px"
          >
            {/* Contenedor de name*/}
            <Box>
              <InputGroup>
                <InputLeftElement
                  h="30px"
                  pointerEvents="none"
                  children={<BsFillPersonFill color="#cbd5e0" />}
                />
                <Input
                  maxWidth="195px"
                  w="100%"
                  h="30px"
                  bg="#ffffff"
                  borderRadius="23px"
                  placeholder="Name"
                  fontFamily="Anek Bangla, sans-serif"
                />
              </InputGroup>
            </Box>

            {/* Contenedor de lastName*/}
            <Box>
              <InputGroup>
                <InputLeftElement
                  h="30px"
                  pointerEvents="none"
                  children={<BsFillPersonFill color="#cbd5e0" />}
                />
                <Input
                  maxWidth="195px"
                  w="100%"
                  h="30px"
                  bg="#ffffff"
                  borderRadius="23px"
                  fontFamily="Anek Bangla, sans-serif"
                  placeholder="Last Name"
                />
              </InputGroup>
            </Box>
          </Box>

          {/* Contenedor de phone y email */}
          <Box
            w="calc(100%/2 -1px)"
            display="flex"
            justifyContent="center"
            gap="10px"
          >
            {/* Contenedor phone */}
            <Box>
              <InputGroup h="30px">
                <InputLeftElement
                  h="70px"
                  pointerEvents="none"
                  children={<AiOutlinePhone color="#cbd5e0" />}
                />
                <Input
                  h="30px"
                  maxWidth="195px"
                  mt="20px"
                  bg="#ffffff"
                  borderRadius="23px"
                  fontFamily="Anek Bangla, sans-serif"
                  placeholder="Phone"
                />
              </InputGroup>
            </Box>

            {/* contenedor email */}
            <Box>
              <InputGroup h="30px">
                <InputLeftElement
                  h="70px"
                  pointerEvents="none"
                  children={<MdOutlineEmail color="#cbd5e0" />}
                />
                <Input
                  h="30px"
                  maxWidth="195px"
                  mt="20px"
                  bg="#ffffff"
                  borderRadius="23px"
                  fontFamily="Anek Bangla, sans-serif"
                  placeholder="Email"
                />
              </InputGroup>
            </Box>
          </Box>

          {/* Contenedor de Adress */}

          <Box w="100%" maxWidth="400px">
            <InputGroup h="30px">
              <InputLeftElement
                h="110px"
                pointerEvents="none"
                children={<MdPlace color="#cbd5e0" />}
              />
              <Input
                h="30px"
                mt="40px"
                bg="#ffffff"
                borderRadius="23px"
                fontFamily="Anek Bangla, sans-serif"
                placeholder="Adress"
              />
            </InputGroup>
          </Box>

          {/* Contenedor de password and repeat*/}
          <Box
            w="calc(100%/2 -10px)"
            display="flex"
            justifyContent="center"
            gap="10px"
            mt="60px"
          >
            {/* Contenedor de password*/}
            <Box>
              <InputGroup>
                <InputLeftElement
                  h="30px"
                  pointerEvents="none"
                  children={<RiLockPasswordLine color="#cbd5e0" />}
                />
                <Input
                  type="password"
                  maxWidth="195px"
                  w="100%"
                  h="30px"
                  bg="#ffffff"
                  borderRadius="23px"
                  fontFamily="Anek Bangla, sans-serif"
                  placeholder="Password"
                />
              </InputGroup>
            </Box>

            {/* Contenedor de repeat password*/}
            <Box>
              <InputGroup>
                <InputLeftElement
                  h="30px"
                  pointerEvents="none"
                  children={<RiLockPasswordLine color="#cbd5e0" />}
                />
                <Input
                  type="password"
                  maxWidth="195px"
                  w="100%"
                  h="30px"
                  bg="#ffffff"
                  borderRadius="23px"
                  fontFamily="Anek Bangla, sans-serif"
                  placeholder="Repeat Password"
                />
              </InputGroup>
            </Box>
          </Box>

          <Button
            borderRadius="64"
            mt="40px"
            size="sm"
            color="#0B8CBF"
            onClick={() => {}}
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
    </Flex>
  );
}

export default Signup;
