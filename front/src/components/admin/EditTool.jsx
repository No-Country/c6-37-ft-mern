import React from 'react'
import { MdEdit } from 'react-icons/md'
import { FiTrash } from 'react-icons/fi'
import { Box, Stack, useDisclosure } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { delUserData, setEditable } from '../../redux/features/userSlice'
import CustomModal from './CustomModal'

const EditTool = () => {


  const dispatch = useDispatch()

  // const handleDelete = () => {
  //   dispatch(delUserData())
  // }

  const handleEdit = () => {
    dispatch(setEditable())
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <Stack direction='column' gap='4'>
      <Box cursor='pointer' ref={finalRef} onClick={onOpen} rounded={50} bg='#DC3545' w='50px' h='50px' display='flex' alignItems='center' justifyContent='center' color='#fff' fontSize='24px'>
        <FiTrash />
      </Box>
      <Box cursor='pointer' onClick={handleEdit} rounded={50} bg='#0B8CBF' w='50px' h='50px' display='flex' alignItems='center' justifyContent='center' color='#fff' fontSize='24px'>
        <MdEdit />
      </Box>


      <CustomModal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        title={"Delete Client"}
        text={"Do you really want to delete this client?"}
        cancel={"Cancel"}
        confirm={"Delete"}
      />

    </Stack>
  )
}

export default EditTool