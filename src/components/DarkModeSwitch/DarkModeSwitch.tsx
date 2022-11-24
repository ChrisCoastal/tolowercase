import Switch from '@mui/joy/Switch';
import React from 'react';
import { SettingsReducerTypes, ThemeSetting } from 'src/@types/types';
import SettingsContext from 'src/hooks/useSettingsContext';
import DarkIcon from 'src/icons/DarkIcon/darkIcon';
import LightIcon from 'src/icons/LightIcon/LightIcon';
import { switchSx } from 'src/utils/muiSx';

const DarkModeSwitch = () => {
  const { settingsState, dispatchSettings } = SettingsContext();

  function toggleMode() {
    console.log('toggle dark');
    const changeTheme =
      settingsState.theme === ThemeSetting.DARK
        ? ThemeSetting.LIGHT
        : ThemeSetting.DARK;
    dispatchSettings({
      type: SettingsReducerTypes.THEME_MODE,
      payload: { mode: changeTheme },
    });
  }

  return (
    <Switch
      onChange={toggleMode}
      componentsProps={{
        input: { 'aria-label': 'Dark mode' },
        thumb: {
          children:
            settingsState.theme === ThemeSetting.DARK ? (
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
