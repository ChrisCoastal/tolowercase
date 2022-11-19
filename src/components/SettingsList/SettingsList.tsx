import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
// import List from '@mui/joy/List';
// import ListItem from '@mui/joy/ListItem';
import { nanoid } from 'nanoid';
import React, { FC } from 'react';
import { SettingId, SettingsReducerTypes } from 'src/@types/types';
import SettingItem from 'src/components/Settings/SettingItem';
import useSettingsContext from 'src/hooks/useSettingsContext';

// import OutputLength from './Settings/OutputLength';
import { List, ListItem } from './SettingsList.styles';

const SettingsList: FC = () => {
  const { state, dispatch } = useSettingsContext();

  function toggleSetting(id: SettingId, isActive: boolean) {
    console.log(id, isActive);

    dispatch({
      type: SettingsReducerTypes.IS_ACTIVE,
      payload: { isActive, id },
    });
  }

  function updateSettingValue(id: SettingId, value: number | number[]) {
    console.log(id, value);

    dispatch({
      type: SettingsReducerTypes.VALUE,
      payload: { id, value },
    });
  }

  const outputValidationSettings = state.outputValidation.map((setting) => {
    return (
      <ListItem key={nanoid()}>
        <SettingItem
          setting={setting}
          toggleSetting={toggleSetting}
          updateSettingValue={updateSettingValue}
        />
      </ListItem>
    );
  });

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
    <>
      <Typography fontSize="sm">validate output</Typography>
      <Box
        sx={{
          border: 'solid 1px #eee',
          borderRadius: '6px',
          padding: '0.4rem',
        }}
      >
        <List>{outputValidationSettings}</List>
      </Box>
    </>
  );
};

export default SettingsList;
