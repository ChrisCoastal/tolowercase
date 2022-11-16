import { Typography } from '@mui/joy';
import IconButton from '@mui/joy/IconButton';
import React, { FC } from 'react';
import SettingsIcon from 'src/icons/SettingsIcon/SettingsIcon';

import { NavBar, NavItem, NavItemsList } from './Nav.styles';

const Nav: FC = () => {
  function handleSettings() {
    console.log('open settings');
  }

  return (
    <NavBar>
      <NavItemsList>
        <NavItem>
          <Typography>tolowercase</Typography>
        </NavItem>
        <NavItem>
          <IconButton
            variant="soft"
            color="neutral"
            size="sm"
            onClick={handleSettings}
          >
            <SettingsIcon height="24px" width="24px" />
          </IconButton>
        </NavItem>
      </NavItemsList>
    </NavBar>
  );
};

export default Nav;
