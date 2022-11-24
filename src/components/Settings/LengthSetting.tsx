import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import Slider from '@mui/joy/Slider';
import Switch from '@mui/joy/Switch';
import React, { FC, useEffect, useState } from 'react';
import { SettingId, SettingsReducerTypes } from 'src/@types/types';
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
  const outputSetting = settingsState.outputValidation.find(
    (setting) => setting.id === SettingId.LENGTH
  )!;

  const [sliderValue, setSliderValue] = useState<number | number[]>(
    outputSetting.targetLength!
  );

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
      payload: { id: outputSetting.id, targetLength: sliderValue },
    });

    const timer = setTimeout(() => {
      revalidateOutput();
    }, 200);

    return () => clearTimeout(timer);
  }, [sliderValue]);

  return (
    <Box>
      <FormControl
        orientation="horizontal"
        sx={{
          display: 'grid',
          gridTemplateColumns: '3fr 1fr',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <FormLabel>{outputSetting.label}</FormLabel>
          {outputSetting.helperText && (
            <FormHelperText sx={{ mt: 0, fontSize: 10 }}>
              {outputSetting.helperText}
            </FormHelperText>
          )}
        </Box>

        <Switch
          checked={outputSetting.isActive}
          onChange={(event) =>
            toggleIsActive(outputSetting.id, event.target.checked)
          }
          color={outputSetting.isActive ? 'success' : 'neutral'}
          variant="outlined"
          componentsProps={{
            endDecorator: {
              sx: {
                minWidth: 10,
              },
            },
          }}
          sx={switchSx}
        />
      </FormControl>
      {outputSetting.isActive && (
        <Box>
          <Box
            sx={{
              display: 'grid',
              gridColumn: '1 / span 2',
              gridTemplateColumns: '3fr 1fr',
              justifySelf: 'center',
              justifyItems: 'space-between',
              width: '100%',
              borderRadius: '8px',
              backgroundColor: '#fff',
              padding: '1rem 0rem 1rem 0.8rem',
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
                value={outputSetting.targetLength}
                min={1}
                max={100}
                marks={marks}
                disabled={!outputSetting.isActive}
                color="neutral"
                onChange={handleChange}
                valueLabelDisplay="on"
                getAriaLabel={() => 'check output length'}
                getAriaValueText={() =>
                  `${outputSetting.targetLength} characters`
                }
                sx={{
                  paddingBottom: '0',
                  fontSize: 'sm',
                  maxWidth: '90%',
                }}
              />
            </FormControl>

            <Switch
              checked={isSliderRange(sliderValue)}
              onChange={(event) => toggleRange(event.target.checked)}
              color={isSliderRange(sliderValue) ? 'success' : 'neutral'}
              variant="outlined"
              endDecorator={'range'}
              componentsProps={{
                endDecorator: {
                  sx: {
                    position: 'absolute',
                    fontSize: '0.8rem',
                    color: '#777',
                    top: 18,
                    right: 1,
                  },
                },
              }}
              sx={{ ...switchSx, position: 'relative', alignSelf: 'bottom' }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default LengthSetting;
