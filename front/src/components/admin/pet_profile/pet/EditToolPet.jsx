import { Box, Stack, useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';
import { FiTrash } from 'react-icons/fi';
import { MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { editPetData } from './../../../../redux/features/petSlice';
import CustomModal from './../../CustomModal';

function EditToolPet() {
  const finalRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(editPetData());
  };



  return (
    <Stack pb="10">
      <Box
        cursor="pointer"
        onClick={onOpen}
        rounded={50}
        bg="#DC3545"
        w="50px"
        h="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="#fff"
        fontSize="24px"
      >
        <FiTrash />
      </Box>
      <Box
        cursor="pointer"
        onClick={handleClick}
        rounded={50}
        bg="#0B8CBF"
        w="50px"
        h="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="#fff"
        fontSize="24px"
      >
        <MdEdit />
      </Box>
      <CustomModal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        title={'Delete Client'}
        text={'Do you really want to delete this client?'}
        cancel={'Cancel'}
        confirm={'Delete'}
      />
    </Stack>
  );
}

export default EditToolPet;
