import { Box, IconButton, Tooltip } from '@mui/joy';
import React, { FC } from 'react';
import { InputsReducerTypes } from 'src/@types/types';
import useInputsContext from 'src/hooks/useInputsContext';
import ClearIcon from 'src/icons/ClearIcon/ClearIcon';

const InputActions: FC = () => {
  const { dispatchInputs } = useInputsContext();

  function handleClear() {
    dispatchInputs({ type: InputsReducerTypes.INPUT, payload: '' });
  }

  return (
    <Box sx={{ display: 'flex', gap: '8px' }}>
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
