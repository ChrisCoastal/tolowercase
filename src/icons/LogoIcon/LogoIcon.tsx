import React, { FC } from 'react';

import { Spinner } from './LogoIcon.styles';

type LogoIconProps = {
  height: string;
  width: string;
  color?: string;
};

// const LogoIcon: FC<LogoIconProps> = ({ height, width, color = '#fff' }) => {
const LogoIcon: FC<LogoIconProps> = ({ height, width }) => {
  return (
    // @ts-expect-error theme passed by cssvarsprovider
    <Spinner>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}
        viewBox="0 0 48 48"
        // fill={color}
        className="svg"
      >
        <path d="M13.25 34.75h6.35V28.1h5.15v-6.65h5.15v-6.7h4.85v-1.5H28.4v6.65h-5.15v6.65H18.1v6.7h-4.85ZM10.75 40q-1.15 0-1.95-.8T8 37.25v-26.5q0-1.15.8-1.95t1.95-.8h26.5q1.15 0 1.95.8t.8 1.95v26.5q0 1.15-.8 1.95t-1.95.8Z" />
      </svg>
    </Spinner>
  );
};

export default LogoIcon;
