import Box from '@mui/joy/Box';
import Slider from '@mui/joy/Slider';
import Switch from '@mui/joy/Switch';
import { nanoid } from 'nanoid';
import React, { FC } from 'react';
import {
  SettingId,
  SettingModifier,
  ValidationSetting,
} from 'src/@types/types';

type SettingActionSliderProps = {
  setting: ValidationSetting;
  updateSetting: (
    id: SettingId,
    actionType: number | number[],
    modifier?: SettingModifier
  ) => void;
};

const settingActionMarks = [
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

const SettingActionSlider: FC<SettingActionSliderProps> = ({
  setting,
  updateSetting,
}) => {
  const sliderWidth = setting.validActions.length - 1 === 2 ? '90%' : '45%';

  return (
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
        key={nanoid()}
        defaultValue={setting.curAction}
        // min={setting.sliderSetting?.min || 0}
        max={setting.validActions.length - 1}
        step={1}
        onChange={(_, value: number | number[]) =>
          updateSetting(setting.id, value)
        }
        valueLabelDisplay={setting.sliderSetting?.labelDisplay || 'off'}
        // valueLabelFormat={(value) => || marks[value].label
        // }
        marks={settingActionMarks}
        color="success"
        disabled={!setting.isActive}
        sx={{
          fontSize: 'sm',
          maxWidth: { sliderWidth },
        }}
        // classes={{ markLabel: { fontSize: 'sm' } }}
      />
    </Box>
  );
};

export default SettingActionSlider;
