import { Box,Stack,Image,Input,Heading,Button,Text,Link,InputGroup,InputLeftElement,} from "@chakra-ui/react";
import { EmailIcon, LockIcon, PhoneIcon } from "@chakra-ui/icons";
import { BsFillPersonFill } from "react-icons/bs";
import { MdPlace } from "react-icons/md";
import './Signup.css'
  
  function Signup() {
    return (
      
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Stack
          spacing="0px"
          direction={{ base: "column", sm: "row" }}
          w={{ base: "440px", sm: "740px"}}
          h={{ base: "780px", sm: "470px" }}
          borderRadius="22px"
          fontFamily="Inter"
          boxShadow="5px 5px 15px 0px gray"
        >
          <Box
            w={{base: "100%",  sm: "40%" }}
            h={{ base: "40%", sm: "100%" }}
            borderLeftRadius={{ base: "0px", sm: "22px" }}
            // borderTopRadius={{ base: "22px", sm: "0pxpx" }}
          >
            <Image
              src="/assets/gato.jpg"
              boxSize="470px"
              objectFit="cover"
              borderLeftRadius={{ base: "0px", sm: "22px" }}
              // borderTopRadius={{ base: "22px", sm: "0pxpx" }}
            />
          </Box>n
  
          <Box
            padding='10px'
            w={{ base: "100%", sm: "60%" }}
            h={{ base: "60%", sm: "100%" }}
            bg="#0B8CBF"
            // borderBottomRadius={{ base:"22px", sm: "0px" }}
            borderRightRadius={{ base: "0px", sm: "22px" }}
            align="center"
          >
            <Heading color="white" size="lg" align="center" mt="40px" mb="40px">
              SIGN UP
            </Heading>
  
            {/* Contenedor de name y lastName*/}
            <Box w='calc(100%/2 -10px)' display='flex' justifyContent='center' gap='10px'> 
            
            {/* Contenedor de name*/}
            <Box>
            <InputGroup >
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
              />
            </InputGroup>
          
            </Box>
  
            {/* Contenedor de lastName*/}
            <Box >
            <InputGroup >
              <InputLeftElement
                h="30px"
                pointerEvents="none"
                children={<BsFillPersonFill color="#cbd5e0" />}
              />
              <Input
                maxWidth='195px'
                w="100%"
                h="30px"
                bg="#ffffff"
                borderRadius="23px"
                placeholder="Last Name"
              />
            </InputGroup>
            </Box>
            </Box>
  
  
            {/* Contenedor de phone y email */}
            <Box w='calc(100%/2 -1px)' display='flex' justifyContent='center' gap='10px'>
            
            {/* Contenedor phone */}
            <Box>
            <InputGroup h="30px">
              <InputLeftElement
                h="70px"
                pointerEvents="none"
                children={<PhoneIcon color="#cbd5e0" />}
              />
              <Input
                h="30px"
                maxWidth='195px'
                mt="20px"
                bg="#ffffff"
                borderRadius="23px"
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
                children={<EmailIcon color="#cbd5e0" />}
              />
              <Input
                h="30px"
                maxWidth='195px'
                mt="20px"
                bg="#ffffff"
                borderRadius="23px"
                placeholder="Email"
              />
            </InputGroup>
            </Box>
            </Box>
  
  
             {/* Contenedor de Adress */}
            
            <Box w='100%' maxWidth='400px'>
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
                placeholder="Adress"
              />
            </InputGroup>
            </Box>
            
            
            {/* Contenedor de password and repeat*/}
            <Box w='calc(100%/2 -10px)' display='flex' justifyContent='center' gap='10px' mt='60px'>
            
            {/* Contenedor de password*/}
            <Box >
            <InputGroup >
              <InputLeftElement
                h="30px"
                pointerEvents="none"
                children={<LockIcon color="#cbd5e0" />}
              />
              <Input
                type='password'
                maxWidth='195px'
                w="100%"
                h="30px"
                bg="#ffffff"
                borderRadius="23px"
                placeholder="Password"
              />
            </InputGroup>
            </Box>
  
            {/* Contenedor de repeat password*/}
            <Box>
            <InputGroup >
              <InputLeftElement
                h="30px"
                pointerEvents="none"
                children={<LockIcon color="#cbd5e0" />}
              />
              <Input
                type='password'
                maxWidth='195px'
                w="100%"
                h="30px"
                bg="#ffffff"
                borderRadius="23px"
                placeholder="Repeat Password"
              />
            </InputGroup>
            </Box>
            </Box>
  
            <br />
            <Button
              mt='20px'
              colorScheme="#0B8CBF"
              color="white"
              border="2px"
              size="sm"
              borderRadius="50px"
            >
              Continue
            </Button>
  
            <Text mt="30px" color="#fff" fontWeight="300">
              Do you have an account? <Link fontWeight="500">Login</Link>
            </Text>
          </Box>
        </Stack>
        </Box>     
    );
  }
  
  export default Signup;
  