import React, { useRef, useState } from 'react';
import {
  chakra,
  Box,
  Button,
  ChakraProvider,
  FormControl,
  Heading,
  Image,
  Stack,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Link as RouterLink } from 'react-router-dom';
import InputChip from './../../components/InputChip';
import * as Yup from 'yup';

const textSchema = Yup.object().shape({
  text: Yup.string().min(20, 'too short').required('required'),
});

const LoginForm = ({ handleChangeLogin, handleSubmitLogin }) => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  return (
    <Stack
      spacing="0px"
      direction={{ base: 'column', md: 'row' }}
      w={{ md: '620px', base: '407px' }}
      h={{ md: '407px', base: '750px' }}
      borderRadius="22px"
      my="center"
      fontFamily="Anek Bangla, sans-serif"
      mt="30px"
      boxShadow="5px 5px 15px 0px gray"
    >
      <Box
        w={{ md: '50%', base: '100%' }}
        h={{ md: '100%', base: '45%' }}
        borderLeftRadius={{ md: '22px', base: '0px' }}
        // borderTopRadius={{ md: "0pxpx", base: "22px" }}
      >
        <Image
          src="/assets/login_bg.jpg"
          boxSize="407px"
          objectFit="cover"
          borderLeftRadius={{ md: '22px', base: '0px' }}
          // borderTopRadius={{ md: "0pxpx", base: "22px" }}
        />
      </Box>

      <Box
        w={{ md: '50%', base: '100%' }}
        h={{ md: '100%', base: '55%' }}
        bg="#0B8CBF"
        // borderBottomRadius={{ base:"22px", md: "0px" }}
        borderRightRadius={{ md: '22px', base: '0px' }}
        align="center"
      >
        <Heading color="white" size="lg" align="center" my="50px">
          WELCOME BACK!
        </Heading>

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validate={(values) => {
            let errors = {};

            if (!values.email) {
              errors.email = 'write a valid email';
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                values.email
              )
            ) {
              errors.email =
                'Email can only contain letters, numbers, periods, hyphens, and underscores.';
            }

            if (!values.password) {
              errors.password = 'write a valid password';
            }
            return errors;
          }}
          validationSchema={textSchema}
          onSubmit={(values, { resetForm }) => {
            console.log('hola');
            resetForm();
            setSent(true);
            // handleSubmitLogin()
            values = initialValues;
          }}
        >
          {({
            values,
            handleSubmit,
            handleChange,
            handleBlur,
            errors,
            touched,
          }) => (
            <chakra.form ref={form} onSubmit={handleSubmitLogin} userSelect="none">
              <FormControl
                display="flex"
                flexDirection="column"
                alignItems="center"
                w="220px"
              >
                <InputGroup>
                  <InputLeftElement
                    h="30px"
                    pointerEvents="none"
                    children={<MdOutlineEmail color="#718096" />}
                  />
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    h="30px"
                    bg="#ffffff"
                    borderRadius="full"
                    placeholder="email"
                    fontFamily="Anek Bangla, sans-serif"
                    onChange={handleChangeLogin}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </InputGroup>
              </FormControl>
              {touched.email && errors.email && (
                <Text color="red.700" fontSize="14px" fontWeight="bold">
                  {errors.email}
                </Text>
              )}
              <FormControl
                display="flex"
                flexDirection="column"
                alignItems="center"
                w="220px"
                mt="30px"
              >
                <InputGroup>
                  <InputLeftElement
                    h="30px"
                    pointerEvents="none"
                    children={<RiLockPasswordLine color="#718096" />}
                  />
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    h="30px"
                    bg="#ffffff"
                    borderRadius="full"
                    placeholder="password"
                    fontFamily="Anek Bangla, sans-serif"
                    onChange={handleChangeLogin}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </InputGroup>
              </FormControl>
              {touched.password && errors.password && (
                <Text color="red.700" fontSize="14px" fontWeight="bold">
                  {errors.password}
                </Text>
              )}
              <Button
                borderRadius="64"
                mt="30px"
                size="sm"
                color="#0B8CBF"
                onClick={handleSubmitLogin}
              >
                Continue
              </Button>
              {sent && (
                <Text textAlign="center" color="green.400">
                  successfully sent!
                </Text>
              )}
            </chakra.form>
          )}
        </Formik>

        <Text mt="30px" color="#fff" fontWeight="300">
          Don't you have an account?
          <Text as={RouterLink} to="/signup" fontWeight="bold" display="block">
            Sign Up
          </Text>
        </Text>
      </Box>
    </Stack>
  );
};

export default LoginForm;

