import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
// import List from '@mui/joy/List';
// import ListItem from '@mui/joy/ListItem';
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

// import OutputLength from './Settings/OutputLength';
import { List, ListContainer, ListItem } from './SettingsList.styles';

const SettingsList: FC = () => {
  const { inputsState, dispatchInputs } = useInputsContext();
  const { settingsState, dispatchSettings } = useSettingsContext();

  function toggleSetting(id: SettingId, isActive: boolean) {
    console.log(id, isActive);
    const curInput = inputsState.input;
    dispatchSettings({
      type: SettingsReducerTypes.IS_ACTIVE,
      payload: { isActive, id },
    });
    dispatchInputs({ type: InputsReducerTypes.INPUT, payload: '' });
    // timeout keeps react from batching dispatches together
    setTimeout(() => {
      dispatchInputs({
        type: InputsReducerTypes.INPUT,
        payload: curInput,
      });
    }, 10);
  }

  function updateSettingValue(id: SettingId, value: number | number[]) {
    console.log(id, value);

    dispatchSettings({
      type: SettingsReducerTypes.VALUE,
      payload: { id, value },
    });
  }

  function updateSettingActionType(id: SettingId, value: number | number[]) {
    console.log(id, value);
    if (value > SettingActionType.REPLACE || value < SettingActionType.WARN)
      return;
    const curInput = inputsState.input;
    const curAction = value as SettingActionType;

    dispatchSettings({
      type: SettingsReducerTypes.ACTION,
      payload: { id, curAction },
    });
    dispatchInputs({ type: InputsReducerTypes.INPUT, payload: '' });
    // timeout keeps react from batching dispatches together
    setTimeout(() => {
      dispatchInputs({
        type: InputsReducerTypes.INPUT,
        payload: curInput,
      });
    }, 10);
  }

  const outputValidationSettings = settingsState.outputValidation.map(
    (setting) => {
      return (
        <ListItem key={nanoid()}>
          <SettingItem
            setting={setting}
            toggleSetting={toggleSetting}
            updateSettingActionType={updateSettingActionType}
          />
        </ListItem>
      );
    }
  );

  // const checks = (
  //   <>
  //     <ListItem>
  //       <SettingItem
  //         setting={state.inputSettings.uriUnsafe}
  //         toggleSwitch={toggleSetting}
  //       />
  //     </ListItem>
  //     <ListItem>
  //       <OutputLength />
  //     </ListItem>
  //   </>
  // );

  return (
    <ListContainer>
      <Typography fontSize="sm" sx={{ paddingBottom: '0.5rem' }}>
        output validation
      </Typography>
      <Box
        sx={{
          border: 'solid 1px #eee',
          borderRadius: '6px',
          padding: '0.4rem',
        }}
      >
        <List>{outputValidationSettings}</List>
      </Box>
    </ListContainer>
  );
};

export default SettingsList;
