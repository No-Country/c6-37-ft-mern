import { Box,Stack,Image,Input,Heading,Button,Text,Link,InputGroup,InputLeftElement,} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";

    
  function Login() {
    return (
      
      <Box display='flex' justifyContent='center' alignItems='center'>
        <Stack
          spacing="0px"
          direction={{ base: "column", sm: "row" }}
          w={{ sm: "620px", base: "407px" }}
          h={{ sm: "407px", base: "750px" }}
          borderRadius="22px"
          my="center"
          fontFamily="Inter"
          mt="30px"
          boxShadow="5px 5px 15px 0px gray"
        >
          <Box
            w={{ sm: "50%", base: "100%" }}
            h={{ sm: "100%", base: "45%" }}
            borderLeftRadius={{ sm: "22px", base: "0px" }}
            // borderTopRadius={{ sm: "0pxpx", base: "22px" }}
          >
            <Image
              src="/assets/image24.jpg"
              boxSize="407px"
              objectFit="cover"
              borderLeftRadius={{ sm: "22px", base: "0px" }}
              // borderTopRadius={{ sm: "0pxpx", base: "22px" }}
            />
          </Box>
  
          <Box
            w={{ sm: "50%", base: "100%" }}
            h={{ sm: "100%", base: "55%" }}
            bg="#0B8CBF"
            // borderBottomRadius={{ base:"22px", sm: "0px" }}
            borderRightRadius={{ sm: "22px", base: "0px" }}
            align="center"
          >
            <Heading color="white" size="lg" align="center" mt="50px" mb="40px">
              WELCOME BACK!
            </Heading>
  
            
            <InputGroup w="195px" h="30px">
              <InputLeftElement
                h="30px"
                pointerEvents="none"
                children={<EmailIcon color="gray.300" />}
              />
              <Input
                className="inputEmail"
                w="195px"
                h="30px"
                bg="#ffffff"
                borderRadius="23px"
                placeholder="Email"
              />
              
            </InputGroup>
            
  
            <InputGroup  w="195px" h="30px">
              <InputLeftElement
                h="87px"
                pointerEvents="none"
                children={<LockIcon color="gray.300" />}
              />
              <Input
                type="password"
                h="30px"
                w="195px"
                mt="30px"
                bg="#ffffff"
                borderRadius="23px"
                placeholder="Password"
              />
            </InputGroup>
  
            <br />
            <Button
              colorScheme="#0B8CBF"
              color="white"
              border="2px"
              mt="40px"
              size="sm"
              borderRadius="50px"
            >
              Continue
            </Button>
  
            <Text mt="30px" color="#fff" fontWeight="300">
              Don't have an account? <Link fontWeight="500">Sign Up</Link>
            </Text>
          </Box>
        </Stack>
        </Box>   
  
    );
  }
  
  export default Login;
  