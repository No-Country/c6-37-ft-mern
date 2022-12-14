import {
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FiTrash } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { delUserData, setEditable } from "../../../redux/features/userSlice";
import  CustomModal  from "./../CustomModal";

const DeleteIcon = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const handleDelete = () => {

    dispatch(delUserData());
    onClose();

  }
  return (
    <>
      <Box
        onClick={onOpen}
        cursor="pointer"
        ref={finalRef}
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

      <CustomModal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        title={"Delete Client"}
        text={"Do you really want to delete this client?"}
        cancel={"Cancel"}
        confirm={"Delete"}
        onClick={handleDelete}
      />
    </>
  );
};

export default DeleteIcon;
