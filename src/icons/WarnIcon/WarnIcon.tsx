import React, { FC } from 'react';

type WarnIconProps = {
  height: string;
  width: string;
  color?: string;
};

const WarnIcon: FC<WarnIconProps> = ({ height, width, color = '#fba61d' }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}
        viewBox="0 0 48 48"
        fill={color}
        className="svg"
      >
        <path d="M2 42 24 4l22 38Zm5.2-3h33.6L24 10Zm17-2.85q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075-.425-.425-1.075-.425-.65 0-1.075.425Q22.7 34 22.7 34.65q0 .65.425 1.075.425.425 1.075.425Zm-1.5-5.55h3V19.4h-3Zm1.3-6.1Z" />{' '}
      </svg>
    </>
  );
};

export default WarnIcon;
