import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import Switch from '@mui/joy/Switch';
import React, { FC, useState } from 'react';
import { SettingsReducerTypes } from 'src/@types/types';
import useSettingsContext from 'src/hooks/useSettingsContext';
import { sliderSx } from 'src/utils/muiSx';

type SettingProps = {
  dispatchType: SettingsReducerTypes;
  label: string;
  helperText?: string;
  isActive: boolean;
  toggleSwitch: (type: SettingsReducerTypes, isActive: boolean) => void;
};

const Setting: FC = () => {
  const { state, dispatch } = useSettingsContext();
  const [checked, setChecked] = useState(false);

  function toggleSwitch(isActive: boolean) {
    console.log(isActive);

    dispatch({
      type: SettingsReducerTypes.INVISIBLE,
      payload: { isActive },
    });
  }

  return (
    <FormControl
      orientation="horizontal"
      sx={{ justifyContent: 'space-between' }}
    >
      <Box>
        <FormLabel>invisible characters</FormLabel>
        <FormHelperText sx={{ mt: 0, fontSize: 10 }}>
          checks for unicode whitespace characters
        </FormHelperText>
      </Box>
      <Switch
        checked={state.inputSettings.invisibleChar.isActive}
        onChange={(event) => toggleSwitch(event.target.checked)}
        color={
          state.inputSettings.invisibleChar.isActive ? 'success' : 'neutral'
        }
        variant="outlined"
        endDecorator={state.inputSettings.invisibleChar.isActive ? 'on' : 'off'}
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
  );
};

export default Setting;
