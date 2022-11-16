import IconButton from '@mui/joy/IconButton';
import Tooltip from '@mui/joy/Tooltip';
import Typography from '@mui/joy/Typography';
import React, { FC } from 'react';
import CloseIcon from 'src/icons/ClearIcon/ClearIcon';

import { CloseDrawer, Drawer, DrawerBackground } from './SettingsDrawer.styles';

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
    <>
      <Drawer isVisible={isVisible}>
        <CloseDrawer>
          <Tooltip title="close" size="sm" placement="top">
            <IconButton
              variant="plain"
              color="neutral"
              size="sm"
              // sx={{ alignSelf: 'start', justifySelf: 'end' }}
              onClick={toggleDrawer}
            >
              <CloseIcon height="24px" width="24px" />
            </IconButton>
          </Tooltip>
        </CloseDrawer>
        <Typography fontSize="sm">
          Hey Paul, I know you were probably expecting some cool settings here,
          but they are not ready yet.
        </Typography>
      </Drawer>
      <DrawerBackground isVisible={isVisible} onClick={toggleDrawer} />
    </>
  );
};

export default SettingsDrawer;
