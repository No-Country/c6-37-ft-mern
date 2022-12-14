import { Image, Stack } from "@chakra-ui/react";
import FootBar from "./FootBar";
import FootForm from "./FootForm";

const Footer = () => {
  return (
    <Stack userSelect='none' direction='column' py='0' spacing='-2px' justifyContent='center' mt='50px!important'  w="100%" maxWidth='1280px'>
      <Image src='/assets/floor_wave.png' alt="floor wave"  />
      <Stack pb='5' bgColor='#0B8CBF' alignItems='center'>
        <FootForm />
        <FootBar />
      </Stack>
    </Stack>
  )
}

export default Footer;