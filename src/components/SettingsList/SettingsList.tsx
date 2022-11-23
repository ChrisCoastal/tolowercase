import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import { nanoid } from 'nanoid';
import React, { FC } from 'react';
import {
  InputsReducerTypes,
  SettingActionType,
  SettingId,
  SettingsReducerTypes,
} from 'src/@types/types';
import SettingItem from 'src/components/Settings/SettingItem';
import useInputsContext from 'src/hooks/useInputsContext';
import useSettingsContext from 'src/hooks/useSettingsContext';

import LengthSetting from '../Settings/LengthSetting';
import SettingActionSlider from '../Settings/SettingActionSlider/SettingActionSlider';
import { List, ListContainer, ListItem } from './SettingsList.styles';

const SettingsList: FC = () => {
  const { inputsState, dispatchInputs } = useInputsContext();
  const { settingsState, dispatchSettings } = useSettingsContext();

  function revalidateOutput() {
    const curInput = inputsState.input;
    dispatchInputs({ type: InputsReducerTypes.INPUT, payload: '' });
    // revalidate output; timeout keeps react from batching dispatches together
    setTimeout(() => {
      dispatchInputs({
        type: InputsReducerTypes.INPUT,
        payload: curInput,
      });
    }, 10);
  }

  function toggleIsActive(id: SettingId, isActive: boolean) {
    console.log(id, isActive);
    dispatchSettings({
      type: SettingsReducerTypes.IS_ACTIVE,
      payload: { isActive, id },
    });
    revalidateOutput();
  }

  function updateSetting(id: SettingId, value: number | number[]) {
    console.log(id, value);

    if (value > SettingActionType.REPLACE || value < SettingActionType.WARN)
      return;
    const curAction = value as SettingActionType;

    dispatchSettings({
      type: SettingsReducerTypes.ACTION,
      payload: { id, curAction },
    });
    revalidateOutput();
  }

  const outputValidationSettings = settingsState.outputValidation.map(
    (setting) => {
      if (setting.id === SettingId.LENGTH) return;
      return (
        <ListItem key={nanoid()}>
          <SettingItem setting={setting} toggleIsActive={toggleIsActive}>
            <SettingActionSlider
              setting={setting}
              updateSetting={updateSetting}
            />
          </SettingItem>
        </ListItem>
      );
    }
  );

  return (
    <ListContainer>
      <Typography fontSize="sm" sx={{ paddingBottom: '0.5rem' }}>
        output validation
      </Typography>
      <Box>
        <List>
          {outputValidationSettings}
          <ListItem>
            <LengthSetting
              toggleIsActive={toggleIsActive}
              revalidateOutput={revalidateOutput}
            />
          </ListItem>
        </List>
      </Box>
    </ListContainer>
  );
};

export default SettingsList;
