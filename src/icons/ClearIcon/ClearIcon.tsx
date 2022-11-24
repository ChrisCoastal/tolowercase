import React, { FC } from 'react';

import { IconWrapper } from '../IconWrapper.styles';

type CloseIconProps = {
  height: string;
  width: string;
  color?: string;
};

const CloseIcon: FC<CloseIconProps> = ({ height, width, color = '#fff' }) => {
  return (
    // @ts-expect-error theme passed by cssvarsprovider
    <IconWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}
        viewBox="0 0 48 48"
        fill={color}
        className="svg"
      >
        <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />{' '}
      </svg>
    </IconWrapper>
  );
};

export default CloseIcon;
