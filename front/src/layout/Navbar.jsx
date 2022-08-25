import { Button, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import UserMenu from './../components/UserMenu';
import useUser from './../hooks/useUser';
import { useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
const Navbar = () => {
  const { isLogged } = useUser();
  const { scrollY } = useScroll();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    scrollY.onChange((latest) => {
      if (latest > 150) {
        setScroll(true);
      }else{
        setScroll(false);
      }
    });
  }, []);

  return (
    <Stack
      position="fixed"
      h="64px"
      w="1280px"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      px="5"
      bgColor={scroll ? '#0B8CBF' : 'transparent'}
      borderRadius="0 0 20px 20px"
      zIndex={20}
      transition = "all linear 0.3s"
    >
      <Flex as={RouterLink} to="/" w="150px">
        <Image src="/assets/logo.png" alt="logo" w="75px" />
      </Flex>

      <Flex gap={10}>
        <Text
          as={RouterLink}
          to="/"
          variant="nav"
          color={scroll ? 'white' : '#035AA6'}
        >
          home
        </Text>
        <Text
          as={RouterLink}
          to="/home"
          variant="nav"
          color={scroll ? 'white' : '#035AA6'}
        >
          services
        </Text>
        <Text
          as={RouterLink}
          to="/petshop"
          variant="nav"
          color={scroll ? 'white' : '#035AA6'}
        >
          shop
        </Text>
        <Text
          as={RouterLink}
          to="/dashboard"
          variant="nav"
          color={scroll ? 'white' : '#035AA6'}
        >
          booking
        </Text>
        <Text
          as={RouterLink}
          to="/"
          variant="nav"
          color={scroll ? 'white' : '#035AA6'}
        >
          contact
        </Text>
      </Flex>

      {!isLogged ? (
        <Flex gap="5" alignItems="center">
          <Button
            as={RouterLink}
            to="/login"
            borderRadius="64"
            color="#0B8CBF"
            w="90px"
            h="38px"
          >
            Login
          </Button>
          <Button
            as={RouterLink}
            to="/signup"
            bg="transparent"
            color="white"
            _hover={{ bg: 'none' }}
          >
            Sign Up
          </Button>
        </Flex>
      ) : (
        <UserMenu />
      )}
    </Stack>
  );
};

export default Navbar;
