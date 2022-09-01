import {
  Avatar,
  Button,
  Divider,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import useUser from './../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import CustomModal from './admin/CustomModal';

const UserMenu = () => {
  const { user, logout, isAdmin } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const finalRef = React.useRef(null);

  const handleClick = () => {
    isAdmin ? navigate('/admin') : navigate('/dashboard');
  };

  const handleLogout = () => {

    logout();

  };

  return (
    <>
      <Menu isLazy>
        <MenuButton
          as={Button}
          leftIcon={<Avatar size="xs" name={user.name} src={user.imgUrl} />}
          rightIcon={<AiOutlineCaretDown />}
          fontSize="sm"
          variant="ghost"
          color="white"
          _hover={{ bg: '#FFFFFF26' }}
          _active={{ bg: '#FFFFFF26' }}
        >
          {user.name && user.name} {user.lastName && user.lastName}
        </MenuButton>
        <MenuList>
          <MenuItem gap="2" onClick={handleClick}>
            <MdOutlineSpaceDashboard />
            <span>Dashboard</span>
          </MenuItem>
          <MenuDivider />
          <MenuItem gap="2" onClick={onOpen}>
            <BiLogOut />
            <span>Logout</span>
          </MenuItem>
        </MenuList>
      </Menu>

      <CustomModal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        title={'Logout'}
        text={'Do you really want to exit?'}
        cancel={'Cancel'}
        confirm={'Continue'}
        onClick={handleLogout}
        logout={true}
      />
    </>
  );
};

export default UserMenu;
