import React, { FC } from 'react';

type CheckIconProps = {
  height: string;
  width: string;
  color?: string;
};

const CheckIcon: FC<CheckIconProps> = ({ height, width, color = '#fff' }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}
        viewBox="0 0 48 48"
        fill={color}
      >
        <path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" />
      </svg>
    </>
  );
};

export default CheckIcon;
