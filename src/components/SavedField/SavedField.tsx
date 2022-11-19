import Box from '@mui/joy/Box';
import React from 'react';
// import useInputsContext from 'src/hooks/useInputsContext';

const SavedField = () => {
  // const { state, dispatch } = useInputsContext();

  return (
    <Box
      border="thin"
      color="neutral"
      sx={{
        py: 2,
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: '48rem',
      }}
    >
      SavedField
    </Box>
  );
};

export default SavedField;
