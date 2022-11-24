import React, { FC } from 'react';

import { IconWrapper } from '../IconWrapper.styles';

type SettingsIconProps = {
  height: string;
  width: string;
  color?: string;
};

const SettingsIcon: FC<SettingsIconProps> = ({
  height,
  width,
  color = '#fff',
}) => {
  return (
    //@ts-expect-error component has access to theme; does not need to be passed as props
    <IconWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}
        viewBox="0 0 48 48"
        fill={color}
        className="svg"
      >
        <path d="M24 40q-1 0-1.7-.7t-.7-1.7q0-1 .7-1.7t1.7-.7q1 0 1.7.7t.7 1.7q0 1-.7 1.7T24 40Zm0-13.6q-1 0-1.7-.7t-.7-1.7q0-1 .7-1.7t1.7-.7q1 0 1.7.7t.7 1.7q0 1-.7 1.7t-1.7.7Zm0-13.6q-1 0-1.7-.7t-.7-1.7q0-1 .7-1.7T24 8q1 0 1.7.7t.7 1.7q0 1-.7 1.7t-1.7.7Z" />{' '}
      </svg>
    </IconWrapper>
  );
};

export default SettingsIcon;
