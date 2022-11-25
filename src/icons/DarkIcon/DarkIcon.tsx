import React, { FC } from 'react';

type DarkIconProps = {
  height: string;
  width: string;
  color?: string;
};

const DarkIcon: FC<DarkIconProps> = ({ height, width, color = '#fff' }) => {
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
        <path
          d="M24,39c3.6,0,6.8-1.1,9.5-3.4s4.4-4.9,5-7.9c-0.8,0.4-1.7,0.6-2.7,0.8S34,28.8,33,28.8c-3.8,0-7.1-1.3-9.8-4
	c-2.7-2.7-4-5.9-4-9.8c0-0.8,0.1-1.7,0.2-2.6c0.2-0.9,0.5-2,0.9-3.1c-3.3,0.9-6,2.7-8.1,5.5S9,20.6,9,24c0,4.2,1.5,7.7,4.4,10.6
	S19.8,39,24,39z"
        />
      </svg>
    </>
  );
};

export default DarkIcon;
