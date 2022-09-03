import { Box, Stack, useDisclosure, useToast } from '@chakra-ui/react';
import { useRef } from 'react';
import { FiTrash } from 'react-icons/fi';
import { MdEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import appointmentsHook from '../../../../services/appointmentsHook';
import petsHook from '../../../../services/petsHook';
import { delPetData, editPetData } from './../../../../redux/features/petSlice';
import CustomModal from './../../CustomModal';

function EditToolPet() {
  const {deletePetAppointments} = appointmentsHook();
  const {deletePet} = petsHook();
  const toast = useToast();
  const state = useSelector((state) => state.petData);
  const finalRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(editPetData());
  };

  const handleDelete = async () => {
    await deletePet(state._id)
      .then(() => deletePetAppointments(state._id))
      .then(() => {
        dispatch(delPetData());
        onClose();
        toast({
          title: 'Success',
          description: 'Pet Deleted successfully',
          status: 'success',
          duration: 6000,
          position: 'bottom-right',
          isClosable: true,
        })
      })
      .catch((err) => console.log(err));
  };

  return (
    <Stack gap="5" direction={{lg:'column',base:'row'}}>
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
        text={'Do you really want to delete this pet?'}
        cancel={'Cancel'}
        confirm={'Delete'}
        onClick={handleDelete}
      />
    </Stack>
  );
}

export default EditToolPet;
