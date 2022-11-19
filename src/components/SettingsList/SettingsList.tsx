import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
// import List from '@mui/joy/List';
// import ListItem from '@mui/joy/ListItem';
import { nanoid } from 'nanoid';
import React, { FC } from 'react';
import { SettingName, SettingsReducerTypes } from 'src/@types/types';
import SettingItem from 'src/components/Settings/SettingItem';
import useSettingsContext from 'src/hooks/useSettingsContext';

// import OutputLength from './Settings/OutputLength';
import { List, ListItem } from './SettingsList.styles';

const SettingsList: FC = () => {
  const { state, dispatch } = useSettingsContext();

  function toggleSetting(setting: SettingName, isActive: boolean) {
    console.log(isActive);

    dispatch({
      type: SettingsReducerTypes.UPDATE_SETTING,
      payload: { isActive, setting },
    });
  }

  const outputValidationSettings = state.outputValidation.map((setting) => {
    return (
      <ListItem key={nanoid()}>
        <SettingItem setting={setting} toggleSwitch={toggleSetting} />
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
