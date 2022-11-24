import { useColorScheme } from '@mui/joy';
import Switch from '@mui/joy/Switch';
import React from 'react';
import { ThemeSetting } from 'src/@types/types';
// import SettingsContext from 'src/hooks/useSettingsContext';
import DarkIcon from 'src/icons/DarkIcon/DarkIcon';
import LightIcon from 'src/icons/LightIcon/LightIcon';
import { switchSx } from 'src/utils/muiSx';

const DarkModeSwitch = () => {
  // const { settingsState, dispatchSettings } = SettingsContext();
  const { mode, setMode } = useColorScheme();

  function toggleMode() {
    // const changeTheme =
    //   settingsState.theme === ThemeSetting.DARK
    //     ? ThemeSetting.LIGHT
    //     : ThemeSetting.DARK;
    // dispatchSettings({
    //   type: SettingsReducerTypes.THEME_MODE,
    //   payload: { mode: changeTheme },
    // });
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
      sx={switchSx}
    />
  );
};

export default DarkModeSwitch;
