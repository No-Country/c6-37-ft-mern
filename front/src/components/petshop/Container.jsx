import { HStack, Stack } from "@chakra-ui/react"
import ShopCard from "./ShopCard"


const Container = () => {
  return (
    <HStack gap={8}>
      <ShopCard src='/assets/petshop1.png' name='top deal' off='5' text1='Canidae Cat Food' text2='Use promo code' text3='40CanidaeCat in cart' />
      <ShopCard src='/assets/petshop2.png' name='top deal' off='20' text1='Canidae Cat Food' text2='Use promo code' text3='40CanidaeCat in cart' />
      <ShopCard src='/assets/petshop3.png' name='top deal' off='15' text1='Canidae Cat Food' text2='Use promo code' text3='40CanidaeCat in cart' />
    </HStack>
    )
}

export default Container