import { Button, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import UserMenu from './../components/UserMenu';
import useUser from './../hooks/useUser';
import { useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import HamburgerMenu from '../components/header/HamburgerMenu';


const Navbar = () => {
  const { isLogged } = useUser();
  const { scrollY } = useScroll();
  const [scroll, setScroll] = useState(false);
  const style = {
    color: scroll ? 'white' : '#035AA6',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    cursor: 'pointer'
  };

  useEffect(() => {
    scrollY.onChange((latest) => {
      if (latest > 150) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <Stack
      position="fixed"
      h="64px"
      w='100%'
      maxW="1280px"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      px="5"
      bgColor={scroll ? '#0B8CBF' : 'transparent' && {base: '#0B8CBF', md: 'transparent'}}
      borderRadius="0 0 20px 20px"
      zIndex={20}
      transition="all linear 0.3s"
    >
      <Flex as={RouterLink} to="/" w="150px">
        <Image src="/assets/logo.png" alt="logo" w="75px" />
      </Flex>

      <Flex gap={10} display={{ base: 'none', lg: 'flex' }}>
        <motion.div
          whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.8 }}
        >
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={900}
            style={style}
          >
            Home
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.8 }}
        >
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            duration={1200}
            style={style}
          >
            Services
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.8 }}
        >
          <Text
            as={RouterLink}
            to="/petshop"
            variant="nav"
            color={scroll ? 'white' : '#035AA6'}
          >
            shop
          </Text>
        </motion.div>

        <motion.div
          whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.8 }}
        >
          <Text
            as={RouterLink}
            to="/dashboard"
            variant="nav"
            color={scroll ? 'white' : '#035AA6'}
          >
            booking
          </Text>
        </motion.div>

        <motion.div
          whileHover={{ scale: [null, 1.1, 1.1] }}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.8 }}
        >
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={1300}
            style={style}
          >
            Contact
          </Link>
        </motion.div>
      </Flex>

      {!isLogged ? (
        <Flex gap="5" alignItems="center" display={{ base: 'none', lg: 'flex' }}>
          <motion.div whileTap={{ scale: 0.8 }}>
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
          </motion.div>

          <motion.div whileTap={{ scale: 0.8 }}>
            <Button
              as={RouterLink}
              to="/signup"
              bg="transparent"
              color="white"
              _hover={{ bg: 'none' }}
            >
              Sign Up
            </Button>
          </motion.div>
        </Flex>
      ) : (
        <UserMenu />
      )}
      <Flex display={{ base: 'flex', lg: 'none' }}>
        <motion.div whileTap={{ scale: 0.8 }}>
        <HamburgerMenu />
        </motion.div>
        </Flex>
    </Stack>
  );
};

export default Navbar;
