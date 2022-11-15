import Box from '@mui/joy/Box';
import React from 'react';
import OutputField from 'src/components/OutputField/OutputField';
import OutputVerification from 'src/components/OutputVerification/OutputVerification';

const OutputContainer = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <OutputField />
      <OutputVerification />
    </Box>
  );
};

export default OutputContainer;
