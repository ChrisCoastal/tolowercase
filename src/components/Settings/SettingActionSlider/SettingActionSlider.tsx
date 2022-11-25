import { useColorScheme } from '@mui/joy';
import Box from '@mui/joy/Box';
import Slider from '@mui/joy/Slider';
import { nanoid } from 'nanoid';
import React, { FC } from 'react';
import { SettingId, ThemeSetting, ValidationSetting } from 'src/@types/types';

type SettingActionSliderProps = {
  setting: ValidationSetting;
  updateSetting: (id: SettingId, actionType: number | number[]) => void;
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
  const { mode, systemMode } = useColorScheme();

  const isDarkMode: boolean =
    mode === ThemeSetting.SYSTEM
      ? systemMode === ThemeSetting.DARK
      : mode === ThemeSetting.DARK;

  const sliderWidth = setting.validActions.length - 1 === 2 ? '100%' : '50%';
  const boxBackground = isDarkMode
    ? 'var(--tolowercase-palette-neutral-800)'
    : '#fff';
  const markLabelColor = isDarkMode
    ? 'var(--tolowercase-palette-neutral-200)'
    : 'var(--tolowercase-palette-neutral-700)';

  return (
    <Box
      sx={{
        gridColumn: '1 / span 2',
        justifySelf: 'center',
        width: '100%',
        borderRadius: '8px',
        backgroundColor: boxBackground,
        padding: '1rem 3rem 1.6rem 3rem',
      }}
    >
      <Slider
        key={nanoid()}
        defaultValue={setting.curAction}
        max={setting.validActions.length - 1}
        step={1}
        onChange={(_, value: number | number[]) =>
          updateSetting(setting.id, value)
        }
        valueLabelDisplay={setting.sliderSetting?.labelDisplay || 'off'}
        marks={settingActionMarks}
        color="primary"
        disabled={!setting.isActive}
        sx={{
          fontSize: 'sm',
          maxWidth: sliderWidth,
          '--Slider-track-size': '0.5rem',
          '--Slider-thumb-size': '1.1rem',
        }}
        componentsProps={{
          markLabel: {
            sx: {
              color: markLabelColor,
              ':hover': { color: 'var(--tolowercase-palette-primary-500)' },
              transition: 'all 0.2s ease-in-out',
            },
          },
        }}
      />
    </Box>
  );
};

export default SettingActionSlider;
