import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import Grid from '@mui/joy/Grid';
import Slider from '@mui/joy/Slider';
import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';
import React, { ChangeEvent, FC, ReactNode, useState } from 'react';
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
  toggleIsActive: (id: SettingId, isActive: boolean) => void;
  // updateSettingValue: (id: SettingId, value: number | number[]) => void;
  updateSetting: (
    id: SettingId,
    actionType: number | number[],
    modifier?: SettingModifier
  ) => void;
  updateSettingModifier: (id: SettingId, event: ChangeEvent) => void;
  children: ReactNode;
};

const Setting: FC<SettingItemProps> = ({
  setting,
  toggleIsActive,
  updateSettingModifier,
  updateSetting,
  children,
}) => {
  // const [value, setValue] = useState<number | number[]>(1);
  // const { settingsState, dispatchSettings } = useSettingsContext();

  // function updateSetting(id: SettingId, value: number | number[]) {
  //   // setValue(() => value);
  //   dispatchSettings({
  //     type: SettingsReducerTypes.ACTION,
  //     payload: { curAction: value },
  //   });
  // }

  // const sliderWidth = setting.sliderSetting?.sliderWidth
  //   ? `${setting.sliderSetting?.sliderWidth}%`
  //   : setting.validActions.length - 1 === 2
  //   ? '90%'
  //   : '45%';

  // const sliderValue =
  //   setting.targetLength?.length === 1
  //     ? setting.targetLength[0]
  //     : setting.targetLength?.length === 2
  //     ? setting.targetLength
  //     : setting.curAction;

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
        onChange={(event) => toggleIsActive(setting.id, event.target.checked)}
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
      {setting.isActive && children}
    </FormControl>
  );
};

export default Setting;
