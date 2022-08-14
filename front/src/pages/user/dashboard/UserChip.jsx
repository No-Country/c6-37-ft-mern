import React from 'react';
import {
  Flex,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import useUser from './../../../hooks/useUser';
import { BiEdit } from 'react-icons/bi';

const UserChip = () => {
  const { user } = useUser();

  return (
    <Flex
      alignItems="center"
      gap={4}
      p={4}
      boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)"
    >
      <Image
        src={user.imgUrl}
        alt={user.name}
        boxSize="90px"
        borderRadius="full"
      />
      <Flex direction="column">
        <Text fontSize="2xl" fontWeight="bold" >
          {user.name}
        </Text>
        <Text fontSize="xs" fontFamily='Anek Bangla, sans-serif' color="rgba(0,0,0,.5)">
          {user.phone}
        </Text>
        <Text fontSize="xs" fontFamily='Anek Bangla, sans-serif' color="rgba(0,0,0,.5)">
          {user.address}
        </Text>
      </Flex>
      <Flex alignSelf="flex-start" justifySelf="flex-end">
        <IconButton
          aria-label="Edit Profile"
          icon={<BiEdit fontSize="18px" />}
          size="sm"
          colorScheme="blue"
          color="white"
          borderRadius="full"
        />
      </Flex>
    </Flex>
  );
};

export default UserChip;