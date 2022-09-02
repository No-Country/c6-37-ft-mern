import { Link, IconButton, Menu, MenuButton, MenuItem, MenuList,Divider } from '@chakra-ui/react';
import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { Link as RouterLink } from 'react-router-dom';

const HamburgerMenu = () => {
    return (
        <Menu>
        <MenuButton
        w='45px'
          as={IconButton}
          aria-label='Options'
          icon={<HiMenu fontSize='20px' />}
          variant='solid'
        />
        <MenuList>
            <MenuItem as={RouterLink} to="/login">
                Login
            </MenuItem>
            <MenuItem as={RouterLink} to="/signup">
            SignUp
            </MenuItem>
            <Divider h='3px' w='90%'/>
            <MenuItem as={RouterLink} to="/">
            Home
            </MenuItem>
            <MenuItem as={RouterLink} to="/petshop">
            Shop
            </MenuItem>

        </MenuList>
      </Menu>
    );
  };
  
  export default HamburgerMenu;