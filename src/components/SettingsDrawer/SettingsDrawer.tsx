import IconButton from '@mui/joy/IconButton';
import Tooltip from '@mui/joy/Tooltip';
import React, { FC } from 'react';
import SettingsList from 'src/components/SettingsList/SettingsList';
// import useSettingsContext from 'src/hooks/useSettingsContext';
import CloseIcon from 'src/icons/ClearIcon/ClearIcon';

import DarkModeSwitch from '../DarkModeSwitch/DarkModeSwitch';
import {
  CloseDrawer,
  Drawer,
  DrawerActions,
  DrawerBackground,
} from './SettingsDrawer.styles';

type SettingsDrawerProps = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const SettingsDrawer: FC<SettingsDrawerProps> = ({
  isVisible,
  setIsVisible,
}) => {
  function toggleDrawer() {
    setIsVisible(() => !isVisible);
  }

  return (
    //TODO: focus lock
    <>
      {/* @ts-expect-error theme passed by cssvarsprovider*/}
      <Drawer isVisible={isVisible}>
        <DrawerActions>
          <DarkModeSwitch />
          <CloseDrawer>
            <Tooltip title="close" size="sm" placement="top">
              <IconButton
                variant="plain"
                color="neutral"
                size="sm"
                onClick={toggleDrawer}
              >
                <CloseIcon height="24px" width="24px" />
              </IconButton>
            </Tooltip>
          </CloseDrawer>
        </DrawerActions>
        <SettingsList />
      </Drawer>
      {/* @ts-expect-error theme passed by cssvarsprovider*/}
      <DrawerBackground isVisible={isVisible} onClick={toggleDrawer} />
    </>
  );
};

export default SettingsDrawer;
