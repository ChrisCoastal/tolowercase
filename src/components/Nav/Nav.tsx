import { Typography } from '@mui/joy';
import IconButton from '@mui/joy/IconButton';
import React, { FC } from 'react';
import LogoIcon from 'src/icons/LogoIcon/LogoIcon';
import SettingsIcon from 'src/icons/SettingsIcon/SettingsIcon';

import { NavBar, NavItem, NavItemsList } from './Nav.styles';

type NavProps = {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav: FC<NavProps> = ({ setIsVisible }) => {
  function openDrawer() {
    setIsVisible(true);
  }

  return (
    <NavBar>
      <NavItemsList>
        <NavItem>
          <LogoIcon height="2.6rem" width="2.6rem" />
          {/* <Typography fontFamily="Numans" fontSize="xl"> */}
          <Typography fontFamily="Montserrat Alternates" fontSize="xl">
            tolowercase
          </Typography>
        </NavItem>
        <NavItem>
          <IconButton
            variant="plain"
            color="neutral"
            size="sm"
            onClick={openDrawer}
          >
            <SettingsIcon height="24px" width="24px" />
          </IconButton>
        </NavItem>
      </NavItemsList>
    </NavBar>
  );
};

export default Nav;
