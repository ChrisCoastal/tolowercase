import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import Slider from '@mui/joy/Slider';
import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';
import React, { FC, useState } from 'react';
import useSettingsContext from 'src/hooks/useSettingsContext';
import { sliderSx } from 'src/utils/muiSx';

const OutputLength: FC = () => {
  const { state, dispatch } = useSettingsContext();

  const [sliderValue, setSliderValue] = useState<number[]>([24]);
  const [sliderMax, setSliderMax] = useState<number>(100);

  function handleChange(event: Event, newValue: number | number[]) {
    setSliderValue(newValue as number[]);
  }

  function handleChangeSliderMax() {
    //
  }

  function toggleSliderRange() {
    if (sliderValue.length === 1) setSliderValue((prev) => [...prev, 54]);
    if (sliderValue.length === 2) setSliderValue((prev) => [prev[0]]);
  }

  return (
    <Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography level="body2">
          {state.inputSettings.outputLength.text}
        </Typography>
        <Switch
          checked={state.inputSettings.outputLength.isActive}
          onChange={(event) => toggleSwitch(event.target.checked)}
          color={
            state.inputSettings.outputLength.isActive ? 'success' : 'neutral'
          }
          variant="outlined"
          endDecorator={
            state.inputSettings.outputLength.isActive ? 'on' : 'off'
          }
          componentsProps={{
            endDecorator: {
              sx: {
                minWidth: 10,
              },
            },
          }}
          sx={sliderSx}
        />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Slider
          value={sliderValue}
          min={1}
          max={sliderMax}
          color="neutral"
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaLabel={() => 'check output length'}
          getAriaValueText={() => `${sliderValue} characters`}
          sx={{ paddingBottom: '0', '--Slider-track-size': '4px' }}
        />{' '}
        {/* <Switch
          checked={sliderValue.length === 2}
          onChange={toggleSliderRange}
          color={sliderValue.length === 2 ? 'success' : 'neutral'}
          variant="outlined"
          endDecorator={'range'}
          componentsProps={{
            endDecorator: {
              sx: {
                minWidth: 10,
              },
            },
          }}
          sx={sliderSx}
        /> */}
        <Checkbox
          disabled={!state.inputSettings.outputLength.isActive}
          // overlay
          disableIcon
          variant="soft"
          label={'range'}
          // sx={{ height: '0.5rem', width: '1rem' }}
        />
      </Box>
    </Box>
  );
};

export default OutputLength;
