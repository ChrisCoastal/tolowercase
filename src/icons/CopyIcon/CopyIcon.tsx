import React, { FC } from 'react';

import { IconWrapper } from '../IconWrapper.styles';

type CopyIconProps = {
  height: string;
  width: string;
  color?: string;
};

const CopyIcon: FC<CopyIconProps> = ({ height, width, color = '#333' }) => {
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
        <path d="M9 43.95q-1.2 0-2.1-.9-.9-.9-.9-2.1V10.8h3v30.15h23.7v3Zm6-6q-1.2 0-2.1-.9-.9-.9-.9-2.1v-28q0-1.2.9-2.1.9-.9 2.1-.9h22q1.2 0 2.1.9.9.9.9 2.1v28q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h22v-28H15v28Zm0 0v-28 28Z" />
      </svg>
    </IconWrapper>
  );
};

export default CopyIcon;
