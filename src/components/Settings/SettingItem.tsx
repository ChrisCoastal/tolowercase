import { Grid, Typography } from '@mui/joy';
import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import Slider from '@mui/joy/Slider';
import Switch from '@mui/joy/Switch';
import React, { ChangeEvent, FC } from 'react';
import {
  Mark,
  ReplaceValue,
  SettingActionType,
  SettingId,
  SliderSetting,
  ValidationSetting,
  ValidLength,
} from 'src/@types/types';
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
  // updateSettingValue: (id: SettingId, value: number | number[]) => void;
  updateSettingActionType: (
    id: SettingId,
    actionType: number | number[]
  ) => void;
};

const Setting: FC<SettingItemProps> = ({
  setting,
  toggleSetting,
  // updateSettingValue,
  updateSettingActionType,
}) => {
  const sliderWidth = setting.sliderSetting?.sliderWidth
    ? `${setting.sliderSetting?.sliderWidth}%`
    : setting.validActions.length - 1 === 2
    ? '80%'
    : '40%';

  return (
    <FormControl
      orientation="horizontal"
      sx={{
        display: 'grid',
        gridTemplateColumns: '3fr 1fr',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <FormLabel>{setting.label}</FormLabel>
        {setting.helperText && (
          <FormHelperText sx={{ mt: 0, fontSize: 10 }}>
            {setting.helperText}
          </FormHelperText>
        )}
      </Box>

      <Switch
        checked={setting.isActive}
        onChange={(event) => toggleSetting(setting.id, event.target.checked)}
        color={setting.isActive ? 'success' : 'neutral'}
        variant="outlined"
        // endDecorator={setting.isActive ? 'on' : 'off'}
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
        <Box
          sx={{
            display: 'grid',
            gridColumn: '1 / span 3',
            justifySelf: 'center',
            justifyItems: 'left',
            width: '100%',
            borderRadius: '8px',
            backgroundColor: '#fff',
            padding: '0.3rem 2rem 1rem 1rem',
          }}
        >
          <Slider
            defaultValue={setting.targetLength || setting.curAction}
            min={setting.sliderSetting?.min || 0}
            max={setting.sliderSetting?.max || setting.validActions.length - 1}
            step={1}
            onChange={(_, value: number | number[]) =>
              updateSettingActionType(setting.id, value)
            }
            valueLabelDisplay={setting.sliderSetting?.labelDisplay || 'off'}
            // valueLabelFormat={(value) => || marks[value].label
            // }
            marks={setting.sliderSetting?.marks || marks}
            color="success"
            disabled={!setting.isActive}
            sx={{
              maxWidth: sliderWidth,
            }}
          />
        </Box>
      )}
      {/* {setting.actionType === SettingActionType.REPLACE && setting.isActive && (
        <Typography>select replace</Typography>
      )} */}
    </FormControl>
  );
};

export default Setting;
