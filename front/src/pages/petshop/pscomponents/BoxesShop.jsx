import { Box, HStack, Text, VStack, Image, Stack, Flex } from "@chakra-ui/react";
import ChipBoxesShop from "./ChipBoxesShop";
import React from "react";

let data = {
  dogFood: {
    title: "DOG FOOD",
    products: [
      {
        img: "/assets/food1.jpg",
        title: "PEDIGREE",
        description: "Puppies - 8Lb",
        detail: "Flavour: Meat",
        price: "$60",
      },
      {
        img: "/assets/food3.jpg",
        title: "ROYAL CANNIN",
        description: "Adults - 10Lb",
        detail: "Flavour: Meat",
        price: "$70",
      },
      {
        img: "/assets/food2.jpg",
        title: "DOG CHOW",
        description: "Puppies - 20Lb",
        detail: "Flavour: Chicken",
        price: "$120",
      },
      {
        img: "/assets/food4.jpg",
        title: "PURINA",
        description: "Adults - 25Lb",
        detail: "Flavour: Chicken",
        price: "$160",
      },
    ],
  },
  catFood: {
    title: "CAT FOOD",
    products: [
      {
        img: "/assets/food5.jpg",
        title: "PURINA",
        description: "Baby kitten - 5Lb",
        detail: "Flavour: Fish",
        price: "$40",
      },
      {
        img: "/assets/food6.jpg",
        title: "CATPRO",
        description: "Adults - 12Lb",
        detail: "Flavour: Chicken",
        price: "$70",
      },
      {
        img: "/assets/food7.jpg",
        title: "BALANCED",
        description: "Baby kitten - 18Lb",
        detail: "Flavour: Fish",
        price: "$110",
      },
      {
        img: "/assets/food8.jpg",
        title: "PURINA",
        description: "Adults - 20Lb",
        detail: "Flavour: Chicken",
        price: "$60",
      },
    ],
  },
  clothing: {
    title: "CLOTHING",
    products: [
      {
        img: "/assets/clot1.jpg",
        title: "DOG JACKET",
        description: "Size: S, M, L, XL",
        detail: "Material: Cotton, Mesh",
        price: "$15",
      },
      {
        img: "/assets/clot2.jpg",
        title: "DOG JACKET",
        description: "Size: S, M, L",
        detail: "Material: PVC, Polyester",
        price: "$18",
      },
      {
        img: "/assets/clot4.jpg",
        title: "DOG JACKET",
        description: "Size: XS, S, M, L, XL",
        detail: "Material: Cotton",
        price: "$22",
      },
      {
        img: "/assets/clot3.jpg",
        title: "DOG JACKET",
        description: "Size: XS, S, M",
        detail: "Material: Polyester",
        price: "$30",
      },
    ],
  },
  collar: {
    title: "LEASH / COLLAR",
    products: [
      {
        img: "/assets/collar6.jpg",
        title: "CAT COLLAR",
        description: "Size: XS, S, M",
        detail: "Application: Cat",
        price: "$12",
      },
      {
        img: "/assets/collar3.jpg",
        title: "DOG COLLAR",
        description: "Size: L, XL, XXL",
        detail: "Application: Dog",
        price: "$13",
      },
      {
        img: "/assets/collar8.jpg",
        title: "COLLAR",
        description: "XS, S, M, L, XL",
        detail: "Application: Animal",
        price: "$17",
      },
      {
        img: "/assets/collar10.jpg",
        title: "LEASH",
        description: "Size: XS, S, M, L, XL",
        detail: "Application: Animal",
        price: "$18",
      },
    ],
  },
  toys: {
    title: "TOYS",
    products: [
      {
        img: "/assets/toys10.jpg",
        title: "RUBBER FISHES",
        description: "Size: S, M",
        detail: "Material: Rubber",
        price: "$12",
      },
      {
        img: "/assets/toys7.jpg",
        title: "TOY BALL",
        description: "Size: L, XL, XXL",
        detail: "Material: Rubber",
        price: "$16",
      },
      {
        img: "/assets/toys8.jpg",
        title: "DOG TOY",
        description: "XS, S, M, L, XL",
        detail: "Material: Rubber",
        price: "$17",
      },
      {
        img: "/assets/toys6.jpg",
        title: "RUBBER BALL",
        description: "Size: M, L",
        detail: "Material: Rubber",
        price: "$18",
      },
    ],
  },
  bedding: {
    title: "BEDDING",
    products: [
      {
        img: "/assets/bed1.jpg",
        title: "RECTANGLE BED",
        description: "Size: S, M, L, XL",
        detail: "Material: Sofa Fabric",
        price: "$18",
      },
      {
        img: "/assets/bed3.jpg",
        title: "BED",
        description: "S, M, L, XL",
        detail: "Material: Plush, Cotton",
        price: "$20",
      },
      {
        img: "/assets/bed2.jpg",
        title: "SOFT BED",
        description: "Size: Customized",
        detail: "Material: Faux Fur",
        price: "$21",
      },
      {
        img: "/assets/bed5.jpg",
        title: "DOG BED",
        description: "Size: S, M, L, XL, XXL",
        detail: "Material: Oxford Fabric",
        price: "$23",
      },
    ],
  },
};

const BoxesShop = () => {
  return (
    <Stack justifyContent="center" alignContent="center" gap="40">
      <Flex name='food' direction='column' alignItems='center' gap='7'>
        <Text
          textAlign="center"
          fontSize="42px"
          color="#0B8CBF"
          fontFamily="Anek Bangla, sans-serif"
          fontWeight="700"
          mb="50px"
        >
          {data.dogFood.title}
        </Text>
        <Stack justifyContent="center" gap={{ md:'10', base:'55'}} direction={{ base:'column', md: 'row'}} flexWrap='wrap'>
          {data.dogFood.products.map((product, index) => (
            <ChipBoxesShop
              key={index}
              imagePetshop={product.img}
              titlePetshop={product.title}
              descriptionPetshop={product.description}
              descriptionUnder={product.detail}
              priceNumber={product.price}
            />
          ))}
        </Stack>
      </Flex>

      <Flex direction='column' alignItems='center' gap='7'>
        <Text
          textAlign="center"
          fontSize="42px"
          color="#0B8CBF"
          fontFamily="Anek Bangla, sans-serif"
          fontWeight="700"
          mb="50px"
        >
          {data.catFood.title}
        </Text>
        <Stack justifyContent="center" gap={{ md:'10', base:'55'}} direction={{ base:'column', md: 'row'}} flexWrap='wrap'>
          {data.catFood.products.map((product, index) => (
            <ChipBoxesShop
              key={index}
              imagePetshop={product.img}
              titlePetshop={product.title}
              descriptionPetshop={product.description}
              descriptionUnder={product.detail}
              priceNumber={product.price}
            />
          ))}
        </Stack>
      </Flex>

      <Flex name='clothing' direction='column' alignItems='center' gap='7'>
        <Text
          textAlign="center"
          fontSize="42px"
          color="#0B8CBF"
          fontFamily="Anek Bangla, sans-serif"
          fontWeight="700"
          mb="50px"
        >
          {data.clothing.title}
        </Text>
        <Stack justifyContent="center" gap={{ md:'10', base:'55'}} direction={{ base:'column', md: 'row'}} flexWrap='wrap'>
          {data.clothing.products.map((product, index) => (
            <ChipBoxesShop
              key={index}
              imagePetshop={product.img}
              titlePetshop={product.title}
              descriptionPetshop={product.description}
              descriptionUnder={product.detail}
              priceNumber={product.price}
            />
          ))}
        </Stack>
      </Flex>

      <Flex name='collar' direction='column' alignItems='center' gap='7'>
        <Text
          textAlign="center"
          fontSize="42px"
          color="#0B8CBF"
          fontFamily="Anek Bangla, sans-serif"
          fontWeight="700"
          mb="50px"
        >
          {data.collar.title}
        </Text>
        <Stack justifyContent="center" gap={{ md:'10', base:'55'}} direction={{ base:'column', md: 'row'}} flexWrap='wrap'>
          {data.collar.products.map((product, index) => (
            <ChipBoxesShop
              key={index}
              imagePetshop={product.img}
              titlePetshop={product.title}
              descriptionPetshop={product.description}
              descriptionUnder={product.detail}
              priceNumber={product.price}
            />
          ))}
        </Stack>
      </Flex>

      <Flex name='toys' direction='column' alignItems='center' gap='7'>
        <Text
          textAlign="center"
          fontSize="42px"
          color="#0B8CBF"
          fontFamily="Anek Bangla, sans-serif"
          fontWeight="700"
          mb="50px"
        >
          {data.toys.title}
        </Text>
        <Stack justifyContent="center" gap={{ md:'10', base:'55'}} direction={{ base:'column', md: 'row'}} flexWrap='wrap'>
          {data.toys.products.map((product, index) => (
            <ChipBoxesShop
              key={index}
              imagePetshop={product.img}
              titlePetshop={product.title}
              descriptionPetshop={product.description}
              descriptionUnder={product.detail}
              priceNumber={product.price}
            />
          ))}
        </Stack>
      </Flex>

      <Flex name='bedding' direction='column' alignItems='center' gap='7'>
        <Text
          textAlign="center"
          fontSize="42px"
          color="#0B8CBF"
          fontFamily="Anek Bangla, sans-serif"
          fontWeight="700"
          mb="50px"
        >
          {data.bedding.title}
        </Text>
        <Stack justifyContent="center" gap={{ md:'10', base:'55'}} direction={{ base:'column', md: 'row'}} flexWrap='wrap'>
          {data.bedding.products.map((product, index) => (
            <ChipBoxesShop
              key={index}
              imagePetshop={product.img}
              titlePetshop={product.title}
              descriptionPetshop={product.description}
              descriptionUnder={product.detail}
              priceNumber={product.price}
            />
          ))}
        </Stack>
      </Flex>
    </Stack>
  );
};

export default BoxesShop;
