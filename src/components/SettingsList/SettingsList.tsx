import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
// import List from '@mui/joy/List';
// import ListItem from '@mui/joy/ListItem';
import { nanoid } from 'nanoid';
import React, { ChangeEvent, FC } from 'react';
import {
  InputsReducerTypes,
  SettingActionType,
  SettingId,
  SettingModifier,
  SettingsReducerTypes,
} from 'src/@types/types';
import LengthSlider from 'src/components/Settings/LengthSlider/LengthSlider';
import OutputLength from 'src/components/Settings/OutputLength/OutputLength';
import SettingItem from 'src/components/Settings/SettingItem';
import useInputsContext from 'src/hooks/useInputsContext';
import useSettingsContext from 'src/hooks/useSettingsContext';

import LengthSetting from '../Settings/LengthSetting';
import SettingActionSlider from '../Settings/SettingActionSlider/SettingActionSlider';
// import OutputLength from './Settings/OutputLength';
import { List, ListContainer, ListItem } from './SettingsList.styles';

const SettingsList: FC = () => {
  const { inputsState, dispatchInputs } = useInputsContext();
  const { settingsState, dispatchSettings } = useSettingsContext();

  function toggleIsActive(id: SettingId, isActive: boolean) {
    console.log(id, isActive);
    dispatchSettings({
      type: SettingsReducerTypes.IS_ACTIVE,
      payload: { isActive, id },
    });
    revalidateOutput();
  }

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

  function updateSettingValue(id: SettingId, value: number | number[]) {
    console.log(id, value);

    dispatchSettings({
      type: SettingsReducerTypes.VALUE,
      payload: { id, value },
    });
  }

  function updateSetting(
    id: SettingId,
    value: number | number[],
    modifier?: any
  ) {
    console.log(id, value);
    // if (id === SettingId.LENGTH) return updateLengthSlider(id, value);
    if (value > SettingActionType.REPLACE || value < SettingActionType.WARN)
      return;
    const curAction = value as SettingActionType;

    dispatchSettings({
      type: SettingsReducerTypes.ACTION,
      payload: { id, curAction },
    });
    revalidateOutput();
  }

  function updateSettingModifier(id: SettingId, event: ChangeEvent) {
    console.log(id, event);

    const setting = settingsState.outputValidation.find(
      (setting) => setting.id === id
    );
    if (typeof setting?.modifier === 'boolean') {
      dispatchSettings({
        type: SettingsReducerTypes.MODIFIER,
        payload: { id, modifierValue: !setting?.modifier },
      });
    }
  }

  function updateLengthSlider(
    id: SettingId,
    value: number | number[]
    // modifier?: any
  ) {
    const lengthSetting = settingsState.outputValidation.find(
      (setting) => setting.id === SettingId.LENGTH
    );
    if (!lengthSetting) return console.error('length setting not found');
    // if (lengthSetting.targetLength!.length === 1)
    //   dispatchSettings({
    //     type: SettingsReducerTypes.LENGTH,
    //     payload: { id, targetLength: lengthSetting.targetLength!.concat(67) },
    //   });
    // if (lengthSetting.targetLength!.length === 2)
    //   dispatchSettings({
    //     type: SettingsReducerTypes.LENGTH,
    //     payload: { id, targetLength: [lengthSetting.targetLength![0]] },
    //   });
    dispatchSettings({
      type: SettingsReducerTypes.LENGTH_SLIDER,
      payload: {
        id,
        targetLength: typeof value === 'number' ? [value] : value,
      },
    });
    revalidateOutput();

    // function toggleSliderRange() {
    //   const lengthSetting = settingsState.outputValidation.find(
    //     (setting) => setting.id === SettingId.LENGTH
    //   );
    //   if (!lengthSetting) return console.error('length setting not found');
    //   if (lengthSetting.targetLength!.length === 1)
    //     dispatchSettings({
    //       type: SettingsReducerTypes.LENGTH,
    //       payload: { id, targetLength: lengthSetting.targetLength!.concat(67) },
    //     });
    //   if (lengthSetting.targetLength!.length === 2)
    //     dispatchSettings({
    //       type: SettingsReducerTypes.LENGTH,
    //       payload: { id, targetLength: [lengthSetting.targetLength![0]] },
    //     });
    // }
  }

  const outputValidationSettings = settingsState.outputValidation.map(
    (setting) => {
      if (setting.id === SettingId.LENGTH) return;
      return (
        <ListItem key={nanoid()}>
          <SettingItem
            setting={setting}
            toggleIsActive={toggleIsActive}
            updateSetting={updateSetting}
            updateSettingModifier={updateSettingModifier}
          >
            <SettingActionSlider
              setting={setting}
              updateSetting={updateSetting}
            />
          </SettingItem>
        </ListItem>
      );
    }
  );

  // const checks = (
  //   <>
  //     <ListItem>
  //       <SettingItem
  //         setting={state.inputSettings.uriUnsafe}
  //         toggleSwitch={toggleIsActive}
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
