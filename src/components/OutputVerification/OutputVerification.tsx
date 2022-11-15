import { Box } from '@mui/joy';
import React from 'react';
import VerifiedIcon from 'src/icons/VerifiedIcon/VerifiedIcon';

const OutputVerification = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        gap: 0.2,
      }}
    >
      <VerifiedIcon height="24" width="24" />
    </Box>
  );
};

export default OutputVerification;
