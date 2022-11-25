import { useColorScheme } from '@mui/joy';
import Switch from '@mui/joy/Switch';
import React from 'react';
import { ThemeSetting } from 'src/@types/types';
import DarkIcon from 'src/icons/DarkIcon/DarkIcon';
import LightIcon from 'src/icons/LightIcon/LightIcon';

const DarkModeSwitch = () => {
  const { mode, systemMode, setMode } = useColorScheme();

  const isDarkMode: boolean =
    mode === ThemeSetting.SYSTEM
      ? systemMode === ThemeSetting.DARK
      : mode === ThemeSetting.DARK;

  function toggleMode() {
    const changeMode = isDarkMode ? ThemeSetting.LIGHT : ThemeSetting.DARK;
    setMode(changeMode);
  }

  const switchThumbColor = isDarkMode
    ? 'var(--tolowercase-palette-neutral-900)'
    : '#fff';

  return (
    <Switch
      checked={isDarkMode}
      onChange={toggleMode}
      componentsProps={{
        input: { 'aria-label': 'Dark mode' },
        thumb: {
          children: isDarkMode ? (
            <DarkIcon height="22px" width="22px" color="#fff" />
          ) : (
            <LightIcon height="16px" width="16px" color="primary" />
          ),
          sx: {
            '--Switch-thumb-background': switchThumbColor,
          },
        },
      }}
      sx={{
        justifySelf: 'end',
        paddingRight: '1rem',
        '--Switch-thumb-size': '22px',
        '--Switch-track-height': '26px',
        '--Switch-gap': '8px',
        '--Switch-track-radius': '18px',
        '--Switch-track-width': '46px',
        alignSelf: 'center',
      }}
    />
  );
};

export default DarkModeSwitch;
