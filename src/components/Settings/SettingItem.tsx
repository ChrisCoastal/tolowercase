import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import Switch from '@mui/joy/Switch';
import React, { FC } from 'react';
import { SettingName, ValidationSetting } from 'src/@types/types';
import { sliderSx } from 'src/utils/muiSx';

type SettingItemProps = {
  setting: ValidationSetting;
  toggleSwitch: (setting: SettingName, isActive: boolean) => void;
};

const Setting: FC<SettingItemProps> = ({ setting, toggleSwitch }) => {
  return (
    <FormControl
      orientation="horizontal"
      sx={{ justifyContent: 'space-between' }}
    >
      <Box>
        <FormLabel>{setting.label}</FormLabel>
        {setting.helperText && (
          <FormHelperText sx={{ mt: 0, fontSize: 10 }}>
            setting.helperText
          </FormHelperText>
        )}
      </Box>
      <Switch
        checked={setting.isActive}
        onChange={(event) =>
          toggleSwitch(setting.settingName, event.target.checked)
        }
        color={setting.isActive ? 'success' : 'neutral'}
        variant="outlined"
        endDecorator={setting.isActive ? 'on' : 'off'}
        componentsProps={{
          endDecorator: {
            sx: {
              minWidth: 10,
            },
          },
        }}
        sx={sliderSx}
      />
    </FormControl>
  );
};

export default Setting;
