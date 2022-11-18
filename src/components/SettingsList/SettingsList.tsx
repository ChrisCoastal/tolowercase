import Box from '@mui/joy/Box';
// import List from '@mui/joy/List';
// import ListItem from '@mui/joy/ListItem';
import Slider from '@mui/joy/Slider';
import Typography from '@mui/joy/Typography';
import React, { FC } from 'react';
import { Setting } from 'src/@types/types';
import InvisibleChar from 'src/components/SettingsList/Settings/InvisibleChar';
import useSettingsContext from 'src/hooks/useSettingsContext';

import OutputLength from './Settings/OutputLength';
import { List, ListItem } from './SettingsList.styles';

const SettingsList: FC = () => {
  const { state, dispatch } = useSettingsContext();

  const checks = (
    <>
      <ListItem>
        <InvisibleChar />
      </ListItem>
      <ListItem>
        <OutputLength />
      </ListItem>
    </>
  );

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
        <List>{checks}</List>
      </Box>
    </>
  );
};

export default SettingsList;
