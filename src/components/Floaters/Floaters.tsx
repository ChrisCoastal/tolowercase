import Box from '@mui/joy/Box';
import React from 'react';
import Floater from 'src/icons/Floater/Floater';

import { FloaterBox } from './Floaters.styles';

const Floaters = () => {
  return (
    <FloaterBox>
      <Floater height="260" width="260" />
    </FloaterBox>
  );
};

export default Floaters;
