import { Button, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import UserMenu from '../components/UserMenu';
import useUser from '../hooks/useUser';
const Navbar = () => {
  const { isLogged } = useUser();

  return (
    <Stack
      position="fixed"
      h="64px"
      w="1280px"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      px="5"
    >
      <Flex as={RouterLink} to="/" w="150px">
        <Image src="/assets/logo.png" alt="logo" w="75px" />
      </Flex>

      <Flex gap={10}>
        <Text as={RouterLink} to="/" variant="nav">
          home
        </Text>
        <Text as={RouterLink} to="/home" variant="nav">
          services
        </Text>
        <Text as={RouterLink} to="/" variant="nav">
          shop
        </Text>
        <Text as={RouterLink} to="/dashboard" variant="nav">
          booking
        </Text>
        <Text as={RouterLink} to="/" variant="nav">
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
          <Button bg="transparent" color="white" _hover={{ bg: 'none' }}>
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
