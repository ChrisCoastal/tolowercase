import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import Slider from '@mui/joy/Slider';
import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';
import React, { ChangeEvent, FC, useState } from 'react';
import { SettingId, SettingsReducerTypes } from 'src/@types/types';
import useSettingsContext from 'src/hooks/useSettingsContext';
import { sliderSx } from 'src/utils/muiSx';

type OutputLengthProps = {
  toggleIsActive: (id: SettingId, isActive: boolean) => void;
  revalidateOutput: () => void;
};

const OutputLength: FC<OutputLengthProps> = ({
  toggleIsActive,
  revalidateOutput,
}) => {
  const { settingsState, dispatchSettings } = useSettingsContext();

  const [sliderValue, setSliderValue] = useState<number | number[]>(24);
  const [sliderMax, setSliderMax] = useState<number>(100);

  const outputSetting = settingsState.outputValidation.find(
    (setting) => setting.id === SettingId.LENGTH
  )!;

  function handleChange(_: Event, newValue: number | number[]) {
    if (typeof newValue === 'number') setSliderValue(newValue);
    if (Array.isArray(newValue)) setSliderValue(newValue);
    console.log(_, newValue);
  }

  function handleChangeSliderMax() {
    //
  }

  function isSliderRange(isRange: number | number[]): boolean {
    if (typeof isRange === 'number') return false;
    if (Array.isArray(isRange)) return true;
    return false;
  }

  function toggleRange(event: ChangeEvent) {
    console.log(event, 'toggle range');
    // slider an return either a number | number[]

    if (!isSliderRange(sliderValue))
      setSliderValue((prev) => [prev as number, 67]);
    if (isSliderRange(sliderValue))
      setSliderValue((prev) => (prev as number[])[0]);

    dispatchSettings({
      type: SettingsReducerTypes.LENGTH_SLIDER,
      payload: { id: outputSetting.id, targetLength: sliderValue },
    });
    revalidateOutput();
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
        <Typography level="body2">{outputSetting.label}</Typography>
        <Switch
          checked={outputSetting.isActive}
          onChange={(event) =>
            toggleIsActive(outputSetting.id, event.target.checked)
          }
          color={outputSetting.isActive ? 'success' : 'neutral'}
          variant="outlined"
          endDecorator={outputSetting.isActive ? 'on' : 'off'}
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
        <Switch
          checked={isSliderRange(sliderValue)}
          onChange={toggleRange}
          color={isSliderRange(sliderValue) ? 'success' : 'neutral'}
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
        />
        {/* <Checkbox
          disabled={!outputSetting.isActive}
          // overlay
          disableIcon
          variant="soft"
          label={'range'}
          // sx={{ height: '0.5rem', width: '1rem' }}
        /> */}
      </Box>
    </Box>
  );
};

export default OutputLength;
