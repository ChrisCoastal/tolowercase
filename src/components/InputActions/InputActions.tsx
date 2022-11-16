import { Box, IconButton, Tooltip } from '@mui/joy';
import React, { FC } from 'react';
import { InputsReducerTypes } from 'src/@types/types';
import useInputsContext from 'src/hooks/useInputsContext';
import ClearIcon from 'src/icons/ClearIcon/ClearIcon';
import SaveIcon from 'src/icons/SaveIcon/SaveIcon';

const InputActions: FC = () => {
  const { dispatch } = useInputsContext();

  function handleSave() {
    console.log('save');
  }
  function handleClear() {
    dispatch({ type: InputsReducerTypes.INPUT, payload: '' });
  }

  return (
    <Box sx={{ display: 'flex', gap: '8px' }}>
      <Tooltip title="save" size="sm" placement="top">
        <IconButton
          variant="plain"
          color="neutral"
          size="sm"
          onClick={handleSave}
        >
          <SaveIcon height="24px" width="24px" />
        </IconButton>
      </Tooltip>
      <Tooltip title="clear" size="sm" placement="top">
        <IconButton
          variant="plain"
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
