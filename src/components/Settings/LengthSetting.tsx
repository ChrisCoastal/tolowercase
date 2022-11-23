import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import Grid from '@mui/joy/Grid';
import Slider from '@mui/joy/Slider';
import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';
import React, { ChangeEvent, FC, ReactNode, useEffect, useState } from 'react';
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
import { isSliderRange } from 'src/utils/helpers';
import { sliderSx } from 'src/utils/muiSx';

import { CheckboxContainer } from './SettingItem.styles';

const marks = [
  { label: '1', value: 1 },
  { label: '50', value: 50 },
  { label: '100', value: 100 },
];

type LengthSettingProps = {
  // setting: ValidationSetting;
  toggleIsActive: (id: SettingId, isActive: boolean) => void;
  // updateSettingValue: (id: SettingId, value: number | number[]) => void;
  // updateSetting: (
  //   id: SettingId,
  //   actionType: number | number[],
  //   modifier?: SettingModifier
  // ) => void;
  // updateSettingModifier: (id: SettingId, event: ChangeEvent) => void;
  revalidateOutput: () => void;
  // children: ReactNode;
};

const LengthSetting: FC<LengthSettingProps> = ({
  // setting,
  toggleIsActive,
  // updateSettingModifier,
  // updateSetting,
  revalidateOutput,
  // children,
}) => {
  const { settingsState, dispatchSettings } = useSettingsContext();
  const outputSetting = settingsState.outputValidation.find(
    (setting) => setting.id === SettingId.LENGTH
  )!;

  const [sliderValue, setSliderValue] = useState<number | number[]>(
    outputSetting.targetLength!
  );
  // const [sliderMax, setSliderMax] = useState<number>(100);

  function handleChange(_: Event, newValue: number | number[]) {
    if (typeof newValue === 'number') setSliderValue(newValue);
    if (Array.isArray(newValue)) setSliderValue(newValue);
    console.log(_, newValue);
  }

  function handleChangeSliderMax() {
    //
  }

  // function isSliderRange(isRange: number | number[]): boolean {
  //   if (Array.isArray(isRange)) return true;
  //   else return false;
  // }

  function toggleRange(isChecked: boolean) {
    console.log(isChecked);
    // slider an return either a number | number[]
    console.log(isSliderRange(sliderValue));

    // if (!isSliderRange(sliderValue))
    isChecked
      ? setSliderValue((prev) => [prev as number, 99])
      : setSliderValue((prev) => (prev as number[])[0]);

    // if (isSliderRange(sliderValue))
  }
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

  useEffect(() => {
    dispatchSettings({
      type: SettingsReducerTypes.LENGTH_SLIDER,
      payload: { id: outputSetting.id, targetLength: sliderValue },
    });
    revalidateOutput();
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
              padding: '1rem 2rem 1rem 1rem',
            }}
          >
            <FormControl
              sx={{
                width: '100%',
                padding: '0',
              }}
            >
              <Slider
                // defaultValue={}
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
                sx={{ paddingBottom: '0', '--Slider-track-size': '4px' }}
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
                    minWidth: 10,
                    justifySelf: 'right',
                  },
                },
              }}
              sx={sliderSx}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default LengthSetting;
