import { useColorScheme } from '@mui/joy';
import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import Slider from '@mui/joy/Slider';
import Switch from '@mui/joy/Switch';
import React, { FC, useEffect, useState } from 'react';
import {
  SettingId,
  SettingsReducerTypes,
  ThemeSetting,
} from 'src/@types/types';
import useSettingsContext from 'src/hooks/useSettingsContext';
import { isSliderRange } from 'src/utils/helpers';
import { switchSx } from 'src/utils/muiSx';

const marks = [
  { label: '1', value: 1 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
];

type LengthSettingProps = {
  toggleIsActive: (id: SettingId, isActive: boolean) => void;
  revalidateOutput: () => void;
};

const LengthSetting: FC<LengthSettingProps> = ({
  toggleIsActive,
  revalidateOutput,
}) => {
  const { settingsState, dispatchSettings } = useSettingsContext();

  const lengthSetting = settingsState.outputValidation.find(
    (setting) => setting.id === SettingId.LENGTH
  )!;
  const [sliderValue, setSliderValue] = useState<number | number[]>(
    lengthSetting.targetLength!
  );

  const { mode, systemMode } = useColorScheme();
  const isDarkMode: boolean =
    mode === ThemeSetting.SYSTEM
      ? systemMode === ThemeSetting.DARK
      : mode === ThemeSetting.DARK;

  function handleChange(_: Event, newValue: number | number[]) {
    if (typeof newValue === 'number') setSliderValue(newValue);
    if (Array.isArray(newValue)) setSliderValue(newValue);
  }

  function toggleRange(isChecked: boolean) {
    isChecked
      ? setSliderValue((prev) => [prev as number, 99])
      : setSliderValue((prev) => (prev as number[])[0]);
  }

  useEffect(() => {
    dispatchSettings({
      type: SettingsReducerTypes.LENGTH_SLIDER,
      payload: { id: lengthSetting.id, targetLength: sliderValue },
    });

    const timer = setTimeout(() => {
      revalidateOutput();
    }, 200);

    return () => clearTimeout(timer);
  }, [sliderValue]);

  const boxBackground = isDarkMode
    ? 'var(--tolowercase-palette-neutral-800)'
    : '#fff';
  const markLabelColor = isDarkMode
    ? 'var(--tolowercase-palette-neutral-200)'
    : 'var(--tolowercase-palette-neutral-700)';
  const thumbColor = isDarkMode
    ? 'var(--tolowercase-palette-neutral-900)'
    : '#fff';

  return (
    <Box>
      <FormControl
        orientation="horizontal"
        sx={{
          display: 'grid',
          gridTemplateColumns: '3fr 1fr',
          justifyContent: 'space-between',
          marginBottom: '1rem',
        }}
      >
        <Box>
          <FormLabel>{lengthSetting.label}</FormLabel>
          {lengthSetting.helperText && (
            <FormHelperText sx={{ mt: 0, fontSize: 10 }}>
              {lengthSetting.helperText}
            </FormHelperText>
          )}
        </Box>

        <Switch
          checked={lengthSetting.isActive}
          onChange={(event) =>
            toggleIsActive(lengthSetting.id, event.target.checked)
          }
          componentsProps={{
            input: { 'aria-label': `toggle ${lengthSetting.label}` },
            thumb: {
              sx: {
                '--Switch-thumb-background': thumbColor,
              },
            },
          }}
          sx={switchSx}
        />
      </FormControl>
      {lengthSetting.isActive && (
        <Box
          sx={{
            display: 'grid',
            gridColumn: '1 / span 2',
            gridTemplateColumns: '3fr 1fr',
            justifySelf: 'center',
            justifyItems: 'space-between',
            width: '100%',
            borderRadius: '8px',
            backgroundColor: boxBackground,
            padding: '0 0 1rem 2rem',
          }}
        >
          <FormControl
            sx={{
              width: '100%',
              padding: '1rem 0 0 0',
            }}
          >
            <Slider
              // controlled slider must use value (not defaultValue)
              value={lengthSetting.targetLength}
              min={1}
              max={100}
              marks={marks}
              disabled={!lengthSetting.isActive}
              color="primary"
              onChange={handleChange}
              valueLabelDisplay="on"
              getAriaLabel={() => 'check output length'}
              getAriaValueText={() =>
                `${lengthSetting.targetLength} characters`
              }
              sx={{
                paddingBottom: '3rem',
                fontSize: 'sm',
                maxWidth: '96%',
                '--Slider-track-size': '0.6rem',
                '--Slider-thumb-size': '1.1rem',
              }}
              componentsProps={{
                thumb: {
                  sx: {
                    '--Slider-thumb-background': thumbColor,
                  },
                },
                markLabel: {
                  sx: {
                    color: markLabelColor,
                    ':hover': {
                      color: 'var(--tolowercase-palette-primary-500)',
                    },
                    transition: 'all 0.2s ease-in-out',
                  },
                },
              }}
            />
          </FormControl>

          <Switch
            checked={isSliderRange(sliderValue)}
            onChange={(event) => toggleRange(event.target.checked)}
            endDecorator={'range'}
            componentsProps={{
              input: { 'aria-label': `toggle range` },
              thumb: {
                sx: {
                  '--Switch-thumb-background': thumbColor,
                },
              },
              endDecorator: {
                sx: {
                  position: 'absolute',
                  fontSize: '0.8rem',
                  color: markLabelColor,
                  top: 40,
                  right: 17,
                },
              },
            }}
            sx={{
              ...switchSx,
              position: 'relative',
              paddingTop: '1rem',
              alignSelf: 'bottom',
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default LengthSetting;
