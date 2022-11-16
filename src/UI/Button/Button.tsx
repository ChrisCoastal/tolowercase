import IconButton from '@mui/joy/IconButton';
import ToolTip from '@mui/joy/Tooltip';
import React, { FC } from 'react';

type ButtonProps = {
  Icon: FC;
  buttonHandler: () => void;
  tooltipText?: string;
};

const Button: FC<ButtonProps> = ({ Icon, buttonHandler, tooltipText }) => {
  return (
    <div>
      <ToolTip title={tooltipText}>
        <IconButton
          variant="plain"
          color="neutral"
          size="sm"
          onClick={buttonHandler}
        >
          <Icon />
        </IconButton>
      </ToolTip>
    </div>
  );
};

export default Button;
