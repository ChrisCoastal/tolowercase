import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import Slider from '@mui/joy/Slider';
import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';
import { nanoid } from 'nanoid';
import React, { ChangeEvent, FC, useState } from 'react';
import {
  SettingActionType,
  SettingId,
  SettingModifier,
  SettingsReducerTypes,
  ValidationSetting,
} from 'src/@types/types';
import useSettingsContext from 'src/hooks/useSettingsContext';
import { sliderSx } from 'src/utils/muiSx';

type LengthSliderProps = {
  setting: ValidationSetting;
  updateSetting: (
    id: SettingId,
    actionType: number | number[],
    modifier?: SettingModifier
  ) => void;
  updateLengthSlider: (id: SettingId, value: number | number[]) => void;
  revalidateOutput: () => void;
};

const marks = [
  { label: '1', value: 1 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
];

const OutputLength: FC<LengthSliderProps> = ({
  setting,
  updateSetting,
  revalidateOutput,
}) => {
  const { settingsState, dispatchSettings } = useSettingsContext();
  const sliderName = Object.keys(setting.id)[0];

  const [sliderValue, setSliderValue] = useState<{
    [key: string]: number | number[];
  }>({
    [sliderName]: 20,
  });
  const [sliderMax, setSliderMax] = useState<number>(100);

  function handleChange(_: Event, newValue: number | number[]) {
    if (typeof newValue === 'number')
      setSliderValue({ [sliderName]: newValue });
    if (Array.isArray(newValue)) setSliderValue({ [sliderName]: newValue });
    console.log(_, newValue);
  }

  function isSliderRange(isRange: number | number[]): boolean {
    if (typeof isRange === 'number') return false;
    if (Array.isArray(isRange)) return true;
    return false;
  }

  function handleChangeSliderMax() {
    //
  }

  function toggleRange(event: ChangeEvent) {
    console.log(event, 'toggle range');
    // slider an return either a number | number[]
    if (typeof sliderValue[sliderName] === 'number')
      setSliderValue((prev) => ({
        [sliderName]: [prev[sliderName] as number, 67],
      }));
    if (Array.isArray(sliderValue[sliderName]))
      setSliderValue((prev) => ({ [sliderName]: prev[0] }));

    dispatchSettings({
      type: SettingsReducerTypes.LENGTH_SLIDER,
      payload: { id: setting.id, targetLength: sliderValue[sliderName] },
    });
    revalidateOutput();
  }
  return (
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
      <FormControl sx={{ width: '100%', padding: '0' }}>
        <Slider
          // key={setting.id}
          name={sliderName}
          // defaultValue={sliderValue[sliderName]}
          min={1}
          max={100}
          step={1}
          onChange={(_, value: number | number[]) => handleChange(_, value)}
          valueLabelDisplay={setting.sliderSetting?.labelDisplay || 'off'}
          // valueLabelFormat={(value) => || marks[value].label
          // }
          marks={marks}
          color="success"
          disabled={!setting.isActive}
          sx={{
            fontSize: 'sm',
            maxWidth: '90%',
          }}
          // classes={{ markLabel: { fontSize: 'sm' } }}
        />
      </FormControl>
      <FormControl sx={{ alignSelf: 'center', justifySelf: 'center' }}>
        <Checkbox
          variant="soft"
          overlay
          disableIcon
          label={'range'}
          onChange={(event: ChangeEvent) => toggleRange(event)}
          sx={{
            // padding: '0.4rem 0.4rem',
            textAlign: 'center',
          }}
        />
      </FormControl>
    </Box>
  );
  /*
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
  */
};

export default OutputLength;
