import {
  Avatar,
  Button,
  Divider,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import useUser from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { MdOutlineSpaceDashboard } from 'react-icons/md';

const UserMenu = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  };

  return (
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
        {user.name}
      </MenuButton>
      <MenuList>
        <MenuItem gap="2" onClick={handleClick}>
          <MdOutlineSpaceDashboard />
          <span>Dashboard</span>
        </MenuItem>
        <MenuDivider />
        <MenuItem gap="2" onClick={logout}>
          <BiLogOut />
          <span>Logout</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserMenu;
