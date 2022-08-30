import { HStack, Stack } from "@chakra-ui/react"
import ShopCard from "./ShopCard"
import { motion } from "framer-motion"


const Container = () => {
  return (
    <HStack gap={8}>
      <motion.div
        whileHover={{ scale: [null, 1.1, 1.1] }}
        transition={{ duration: 0.3 }}
        >
      <ShopCard src='/assets/petshop2.png' name='top deal' off='5' text1='Elevated Bowl' text2='Use promo code' text3='ELEVATED5 in cart' /></motion.div>
      <motion.div
        whileHover={{ scale: [null, 1.1, 1.1] }}
        transition={{ duration: 0.3 }}
        >
      <ShopCard src='/assets/petshop3.png' name='top deal' off='20' text1='Harnesses' text2='Use promo code:' text3='20HARNESS in cart' /></motion.div>
      <motion.div
        whileHover={{ scale: [null, 1.1, 1.1] }}
        transition={{ duration: 0.3 }}
        >
      <ShopCard src='/assets/petshop1.png' name='top deal' off='15' text1='Stainless Steel Bowl' text2='Use promo code' text3='15STAINLESS in cart' /></motion.div>
    </HStack>
    )
}

export default Container