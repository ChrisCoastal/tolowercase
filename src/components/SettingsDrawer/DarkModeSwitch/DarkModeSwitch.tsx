import { useColorScheme } from '@mui/joy';
import Switch from '@mui/joy/Switch';
import React, { useEffect, useState } from 'react';
import { ThemeSetting } from 'src/@types/types';
import DarkIcon from 'src/icons/DarkIcon/DarkIcon';
import LightIcon from 'src/icons/LightIcon/LightIcon';
import { switchSx } from 'src/utils/muiSx';

const DarkModeSwitch = () => {
  const [checked, setChecked] = useState<boolean>(true);
  const { mode, setMode } = useColorScheme();

  function toggleMode() {
    setMode(
      mode === ThemeSetting.DARK ? ThemeSetting.LIGHT : ThemeSetting.DARK
    );
  }

  useEffect(() => {
    if (mode === ThemeSetting.DARK) setChecked(true);
    else setChecked(false);
  }, [mode]);

  return (
    <Switch
      checked={checked}
      onChange={toggleMode}
      componentsProps={{
        input: { 'aria-label': 'Dark mode' },
        thumb: {
          children:
            mode === ThemeSetting.DARK ? (
              <DarkIcon height="24px" width="24px" color="primary" />
            ) : (
              <LightIcon height="16px" width="16px" color="primary" />
            ),
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
