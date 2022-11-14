import React, { FC } from 'react';

type CopyIconProps = {
  height: string;
  width: string;
};

const CopyIcon: FC<CopyIconProps> = ({ height, width }) => {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}
        viewBox="0 0 48 48"
      >
        <path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" />
      </svg>
    </span>
  );
};

export default CopyIcon;
