import { useColorScheme } from '@mui/joy';
import Switch from '@mui/joy/Switch';
import React from 'react';
import { ThemeSetting } from 'src/@types/types';
import DarkIcon from 'src/icons/DarkIcon/DarkIcon';
import LightIcon from 'src/icons/LightIcon/LightIcon';
import { switchSx } from 'src/utils/muiSx';

const DarkModeSwitch = () => {
  const { mode, setMode } = useColorScheme();

  function toggleMode() {
    setMode(
      mode === ThemeSetting.DARK ? ThemeSetting.LIGHT : ThemeSetting.DARK
    );
  }

  return (
    <Switch
      onChange={toggleMode}
      componentsProps={{
        input: { 'aria-label': 'Dark mode' },
        thumb: {
          children:
            mode === ThemeSetting.DARK ? (
              <DarkIcon height="10px" width="10px" />
            ) : (
              <LightIcon height="10px" width="10px" />
            ),
        },
      }}
      sx={{ ...switchSx, alignSelf: 'center' }}
    />
  );
};

export default DarkModeSwitch;
