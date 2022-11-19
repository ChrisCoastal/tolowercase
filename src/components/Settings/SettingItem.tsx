import { Grid, Typography } from '@mui/joy';
import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import Slider from '@mui/joy/Slider';
import Switch from '@mui/joy/Switch';
import React, { ChangeEvent, FC } from 'react';
import { SettingId, SettingValue, ValidationSetting } from 'src/@types/types';
import { sliderSx } from 'src/utils/muiSx';

const marks = [
  {
    value: 0,
    label: 'warn',
  },
  {
    value: 1,
    label: 'remove',
  },
  {
    value: 2,
    label: 'replace',
  },
];

type SettingItemProps = {
  setting: ValidationSetting;
  toggleSetting: (id: SettingId, isActive: boolean) => void;
  updateSettingValue: (id: SettingId, value: SettingValue) => void;
};

const Setting: FC<SettingItemProps> = ({
  setting,
  toggleSetting,
  updateSettingValue,
}) => {
  return (
    <FormControl
      orientation="horizontal"
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        justifyContent: 'space-between',
      }}
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
        onChange={(event) => toggleSetting(setting.id, event.target.checked)}
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
      {setting.isActive && (
        <Slider
          defaultValue={setting.value}
          max={2}
          step={1}
          onChange={(_, value: number | number[]) =>
            updateSettingValue(setting.id, value)
          }
          valueLabelDisplay="off"
          valueLabelFormat={(value) => marks[value].label}
          marks={marks}
          disabled={!setting.isActive}
          sx={{
            gridColumn: '1 / span 2',
            justifySelf: 'center',
            maxWidth: '70%',
          }}
        />
      )}
      {setting.value === 2 && <Typography>select replace</Typography>}
    </FormControl>
  );
};

export default Setting;
