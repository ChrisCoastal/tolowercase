import { Box, IconButton, Tooltip } from '@mui/joy';
import React from 'react';
import { InputsReducerTypes } from 'src/@types/types';
import useInputsContext from 'src/hooks/useInputsContext';
import ClearIcon from 'src/icons/ClearIcon/ClearIcon';
import SaveIcon from 'src/icons/SaveIcon/SaveIcon';
import Button from 'src/UI/Button/Button';

const InputActions = () => {
  const { state, dispatch } = useInputsContext();

  function handleSave() {
    console.log('save');
  }
  function handleClear() {
    console.log('clear');
    dispatch({ type: InputsReducerTypes.INPUT, payload: '' });
  }

  return (
    <Box sx={{ display: 'flex', gap: '8px' }}>
      <Tooltip title="add to history" size="sm" placement="top">
        <IconButton
          variant="soft"
          color="neutral"
          size="sm"
          onClick={handleSave}
        >
          <SaveIcon height="24px" width="24px" />
        </IconButton>
      </Tooltip>
      <Tooltip title="clear" size="sm" placement="top">
        <IconButton
          variant="soft"
          color="neutral"
          size="sm"
          onClick={handleClear}
        >
          <ClearIcon height="24px" width="24px" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default InputActions;
