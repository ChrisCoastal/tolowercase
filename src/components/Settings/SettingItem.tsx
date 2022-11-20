import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import Grid from '@mui/joy/Grid';
import Slider from '@mui/joy/Slider';
import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';
import React, { ChangeEvent, FC, useState } from 'react';
import {
  Mark,
  ReplaceValue,
  SettingActionType,
  SettingId,
  SettingModifier,
  SettingsReducerTypes,
  SliderSetting,
  ValidationSetting,
} from 'src/@types/types';
import useSettingsContext from 'src/hooks/useSettingsContext';
import { sliderSx } from 'src/utils/muiSx';

import { CheckboxContainer } from './SettingItem.styles';

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
  // updateSetting: (
  //   id: SettingId,
  //   actionType: number | number[],
  //   modifier?: SettingModifier
  // ) => void;
  updateSettingModifier: (id: SettingId, event: ChangeEvent) => void;
};

const Setting: FC<SettingItemProps> = ({
  setting,
  toggleSetting,
  updateSettingModifier,
  // updateSetting,
}) => {
  const [value, setValue] = useState<number | number[]>(1);
  const { settingsState, dispatchSettings } = useSettingsContext();

  function updateSetting(id: SettingId, value: number | number[]) {
    // setValue(() => value);
    dispatchSettings({
      type: SettingsReducerTypes.ACTION,
      payload: { curAction: value },
    });
  }

  const sliderWidth = setting.sliderSetting?.sliderWidth
    ? `${setting.sliderSetting?.sliderWidth}%`
    : setting.validActions.length - 1 === 2
    ? '90%'
    : '45%';

  const sliderValue =
    setting.targetLength?.length === 1
      ? setting.targetLength[0]
      : setting.targetLength?.length === 2
      ? setting.targetLength
      : setting.curAction;

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
            gridColumn: '1',
            justifySelf: 'center',
            justifyItems: 'left',
            width: '100%',
            borderRadius: '8px',
            backgroundColor: '#fff',
            padding: '1rem 2rem 1rem 1rem',
          }}
        >
          <Slider
            defaultValue={sliderValue}
            min={setting.sliderSetting?.min || 0}
            max={setting.sliderSetting?.max || setting.validActions.length - 1}
            step={1}
            onChange={(_, value: number | number[]) =>
              updateSetting(setting.id, value)
            }
            valueLabelDisplay={setting.sliderSetting?.labelDisplay || 'off'}
            // valueLabelFormat={(value) => || marks[value].label
            // }
            marks={setting.sliderSetting?.marks || marks}
            color="success"
            disabled={!setting.isActive}
            sx={{
              fontSize: 'sm',
              maxWidth: sliderWidth,
            }}
            // classes={{ markLabel: { fontSize: 'sm' } }}
          />
        </Box>
      )}
      {/* {setting.actionType === SettingActionType.REPLACE && setting.isActive && (
        <Typography>select replace</Typography>
      )} */}
      {setting.isActive && setting.modifier && (
        <FormControl sx={{ alignSelf: 'center' }}>
          <Checkbox
            variant="soft"
            overlay
            disableIcon
            label={'range'}
            onChange={(event: ChangeEvent) =>
              updateSettingModifier(setting.id, event)
            }
            sx={{
              // padding: '0.4rem 0.4rem',
              textAlign: 'center',
            }}
          />
        </FormControl>
      )}
    </FormControl>
  );
};

export default Setting;
