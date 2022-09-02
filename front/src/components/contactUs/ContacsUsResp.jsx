import { Heading, HStack, Link, Stack, Text, Image } from "@chakra-ui/react";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const ContactUsResp = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      display={{ md: "none", base: "flex" }}
    >
      <Heading
        fontFamily="Anek Bangla, sans-serif"
        fontSize="50px"
        fontWeight="bold"
        textAlign="center"
      >
        Contact Us
      </Heading>
      <Stack justifyContent="center" alignItems="center">
        <Stack direction="row">
          <Image
            src="/assets/contact-cat2.jpg"
            w="80px"
            alignSelf="end"
          />

          <Stack
            gap="5"
            bg="#0B8CBF"
            rounded="20"
            w="250px"
            h="220px"
            alignItems="center"
            justifyContent="center"
            px="10px"
          >
            <Stack
              alignItems="center"
              justifyContent="start"
              color="white"
              gap="5"
              fontSize="40px"
              direction="row"
              w="100%"
            >
              <HiOutlineLocationMarker />
              <Text fontFamily="Anek Bangla" fontSize="14px" fontWeight="bold">
                Apolo avenue 250, Industrial, 64440 Monterrey, N.L.
              </Text>
            </Stack>
            <Stack
              alignItems="center"
              justifyContent="start"
              color="white"
              gap="5"
              fontSize="20px"
              direction="row"
              w="100%"
            >
              <FiPhoneCall />
              <Text fontFamily="Anek Bangla" fontSize="14px" fontWeight="bold">
                +52 123 456 7891
              </Text>
            </Stack>
            <Stack
              alignItems="center"
              justifyContent="start"
              color="white"
              gap="5"
              fontSize="20px"
              direction="row"
              w="100%"
            >
              <HiOutlineMail />
              <Text fontFamily="Anek Bangla" fontSize="14px" fontWeight="bold">
                PetSociety@correo.com
              </Text>
            </Stack>
            <Stack
            color="white"
            fontSize="25px"
            alignItems="center"
            justifyContent="center"
            gap="6"
            userSelect="none"
            direction="row"
          >
            <Link isExternal>
              <FaInstagramSquare />
            </Link>
            <Link isExternal>
              <FaFacebookSquare />
            </Link>
          </Stack>
          </Stack>

          
        </Stack>

        <Image src="/assets/mapaTest.png" h="250px" w="340px" />
      </Stack>
    </Stack>
  );
};

export default ContactUsResp;
