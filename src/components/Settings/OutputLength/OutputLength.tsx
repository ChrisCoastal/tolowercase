import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import Slider from '@mui/joy/Slider';
import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';
import { nanoid } from 'nanoid';
import React, { ChangeEvent, FC, useState } from 'react';
import { SettingId, SettingsReducerTypes } from 'src/@types/types';
import useSettingsContext from 'src/hooks/useSettingsContext';
import { sliderSx } from 'src/utils/muiSx';

type OutputLengthProps = {
  // toggleIsActive: (id: SettingId, isActive: boolean) => void;
  revalidateOutput: () => void;
};

const marks = [
  { label: '1', value: 1 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
];

const OutputLength: FC<OutputLengthProps> = ({
  // toggleIsActive,
  revalidateOutput,
}) => {
  const { settingsState, dispatchSettings } = useSettingsContext();

  const [sliderValue, setSliderValue] = useState<number | number[]>(24);
  // const [sliderMax, setSliderMax] = useState<number>(100);

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
    if (Array.isArray(isRange)) return true;
    else return false;
  }

  function toggleRange(isChecked: boolean) {
    console.log(isChecked);
    // slider an return either a number | number[]
    console.log(isSliderRange(sliderValue));

    // if (!isSliderRange(sliderValue))
    isChecked
      ? setSliderValue((prev) => [prev as number, 99])
      : setSliderValue((prev) => (prev as number[])[0]);
    // if (isSliderRange(sliderValue))

    dispatchSettings({
      type: SettingsReducerTypes.LENGTH_SLIDER,
      payload: { id: outputSetting.id, targetLength: sliderValue },
    });
    revalidateOutput();
  }

  return (
    <Box>
      {/* <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      > */}
      <Box
        sx={{
          display: 'grid',
          gridColumn: '1 / span 2',
          gridTemplateColumns: '3fr 1fr',
          justifySelf: 'center',
          justifyItems: 'left',
          width: '100%',
          borderRadius: '8px',
          backgroundColor: '#fff',
          padding: '1rem 2rem 1rem 1rem',
        }}
      >
        {/* <Typography level="body2">{outputSetting.label}</Typography>
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
      > */}
        <FormControl sx={{ width: '100%', padding: '0' }}>
          <Slider
            value={sliderValue}
            min={1}
            max={100}
            marks={marks}
            color="neutral"
            onChange={handleChange}
            valueLabelDisplay="on"
            getAriaLabel={() => 'check output length'}
            getAriaValueText={() => `${sliderValue} characters`}
            sx={{ paddingBottom: '0', '--Slider-track-size': '4px' }}
          />
        </FormControl>
        {/* <FormControl> */}
        <Switch
          // key={nanoid()}
          checked={isSliderRange(sliderValue)}
          onChange={(event) => toggleRange(event.target.checked)}
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
        {/* </FormControl> */}
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
