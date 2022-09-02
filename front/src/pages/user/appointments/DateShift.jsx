import React, { useEffect, useRef } from 'react';
import {
  Avatar,
  Text,
  Divider,
  Flex,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HiMinusCircle } from 'react-icons/hi';
import CustomModal from '../../../components/admin/CustomModal';

const DateShift = ({ consult, deleteShiftData, haveDeleteModal, isDeleteable }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);

  const handleDelete = (consult) => {
    deleteShiftData(consult);
    onClose();
  };

  useEffect(() => {console.log(consult.pet)},[])

  return (
    <>
      <Flex
        paddingX="15px"
        paddingY="4px"
        alignItems="center"
        justifyContent="space-between"
        gap="20px"
      >
        <Flex gap="10px" alignItems="center" flex="1">
          <Avatar size="xs" name={consult.pet.name} />
          <Text
            fontSize="14px"
            fontWeight="bold"
            fontFamily="Anek Bangla, sans-serif"
          >
            {consult.pet.name}
          </Text>
        </Flex>
        <Text
          fontSize="14px"
          fontWeight="bold"
          fontFamily="Anek Bangla, sans-serif"
          flex="1"
        >
          {consult.type}
        </Text>
        <Flex gap="15px" alignItems="center">
          <Text
            fontSize="14px"
            fontWeight="bold"
            fontFamily="Anek Bangla, sans-serif"
          >
            {consult.day.split('-').reverse().join('/')}
          </Text>
          <Text
            fontSize="14px"
            fontWeight="bold"
            fontFamily="Anek Bangla, sans-serif"
          >
            {consult.time}
          </Text>
        </Flex>

        {isDeleteable && (
          <IconButton
            aria-label="Delete Consult"
            icon={<HiMinusCircle fontSize="22px" color="#DC3545" />}
            size="xs"
            bgColor="transparent"
            color="white"
            borderRadius="full"
            onClick={haveDeleteModal ? onOpen : () => handleDelete(consult)}
          />
        )}
        {haveDeleteModal && (
          <CustomModal
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            title={'Delete Pet'}
            text={'Do you really want to delete this appointment?'}
            cancel={'Cancel'}
            confirm={'Delete'}
            onClick={() => handleDelete(consult)}
          />
        )}
      </Flex>
      <Divider />
    </>
  );
};

export default DateShift;
