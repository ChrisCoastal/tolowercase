import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import React from 'react';
import useInputsContext from 'src/hooks/useInputsContext';
import VerifiedIcon from 'src/icons/VerifiedIcon/VerifiedIcon';

const OutputVerification = () => {
  const { state } = useInputsContext();

  const checks = (
    <Typography
      fontSize="sm"
      textColor="neutral"
      startDecorator={<VerifiedIcon height="24" width="24" />}
    >
      all checks passing
    </Typography>
  );

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
      {Boolean(state.output.length) && checks}
    </Box>
  );
};

export default OutputVerification;
