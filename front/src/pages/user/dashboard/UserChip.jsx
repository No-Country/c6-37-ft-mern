import React from 'react';
import { Avatar, Flex, Image, Text, Tooltip } from '@chakra-ui/react';
import useUser from './../../../hooks/useUser';
import EditProfile from './../Profile/EditProfile';
import { AiFillPhone } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';

const UserChip = () => {
  const { user } = useUser();

  return (
    <Flex
      alignItems="center"
      gap={4}
      p={4}
      boxShadow="0.6px 1px 8px 0.5px rgba(0, 0, 0, 0.25)"
      userSelect='none'
    >
      <Avatar
        src={user.imgUrl}
        alt={user.name}
        boxSize="90px"
        borderRadius="full"
      />
      <Flex direction="column" flex="1">
      <Tooltip label={`${user.name} ${user.lastName}`}>
        <Text
          fontSize="32px"
          fontWeight="bold"
          fontFamily="Anek Bangla, sans-serif"
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
          w="250px"
        >
          {user.name} {user.lastName}
        </Text>
        </Tooltip>
        <Flex gap="5px" alignItems="center" color="rgba(0,0,0,.5)">
          <AiFillPhone fontSize='12px' />
          <Text
            fontSize="xs"
            fontFamily="Anek Bangla, sans-serif"
          >
            {user.phoneNumber}
          </Text>
        </Flex>
        <Tooltip label={user.address}>
          <Flex gap="5px" alignItems="center" color="rgba(0,0,0,.5)" w="250px">
            <FaMapMarkerAlt fontSize='12px'/>
            <Text
              fontSize="xs"
              fontFamily="Anek Bangla, sans-serif"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
             
            >
              {user.address}
            </Text>
          </Flex>
        </Tooltip>
      </Flex>
      <Flex alignSelf="flex-start" justifySelf="flex-end">
        <EditProfile />
      </Flex>
    </Flex>
  );
};

export default UserChip;
