import React from 'react';
import { MdEdit } from 'react-icons/md';
import { FiTrash } from 'react-icons/fi';
import { Box, Stack, useDisclosure } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { delUserData, setEditable } from './../../redux/features/userSlice';
import CustomModal from './CustomModal';
import { deleteClient } from '../../services/clients';
import { deleteUser } from '../../services/users';
import { deleteClientPets} from '../../services/pets';
import { deleteClientAppointments } from '../../services/appointments';

const EditTool = () => {
  const state = useSelector((state) => state.userData);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(setEditable());
  };

  const handleDelete = async () => {
    await deleteClient(state.email)
      .then(() => deleteUser(state.email))
      .then(() => deleteClientPets(state.email))
      .then(() => deleteClientAppointments(state.email))
      .then(() => {
        dispatch(delUserData());
        onClose();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Stack direction="column" gap="4">
      <Box
        cursor="pointer"
        ref={finalRef}
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
        onClick={handleEdit}
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
        onClick={handleDelete}
      />
    </Stack>
  );
};

export default EditTool;
