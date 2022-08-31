import { IconButton, useDisclosure, useToast } from '@chakra-ui/react';
import React, {useRef } from 'react';
import { MdDelete } from 'react-icons/md';
import petsHook from '../../../services/petsHook';
import CustomModal from './../../../components/admin/CustomModal';

const DeletePetButton = ({ pet,refreshPets }) => {
  const {deletePet} = petsHook();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const finalRef = useRef(null);

  const handleClick = (e) => deletePetData();
  
  const deletePetData = async () => {
    await deletePet(pet._id)
      .then(() => {
        toast({
          title: 'Success',
          description: 'Pet deleted successfully',
          status: 'success',
          duration: 6000,
          position: 'bottom-right',
          isClosable: true,
        });
      })
      .then(() => {
        onClose();
      })
      .catch((err) => console.log(err));
    refreshPets();
  };

  return (
    <>
      <IconButton
        icon={<MdDelete fontSize="18px" />}
        onClick={onOpen}
        ref={finalRef}
        size="sm"
        borderRadius="full"
        colorScheme="red"
        color="white"
        position="absolute"
        bottom="10px"
        right="8px"
      />
      <CustomModal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        title={'Delete Pet'}
        text={'Do you really want to delete this pet?'}
        cancel={'Cancel'}
        confirm={'Delete'}
        onClick={handleClick}
      />
    </>
  );
};

export default DeletePetButton;
