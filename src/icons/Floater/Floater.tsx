import React, { FC } from 'react';

type FloaterIconProps = {
  height: string;
  width: string;
  color?: string;
};

const FloaterIcon: FC<FloaterIconProps> = ({
  height,
  width,
  color = '#fff',
}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={height}
        height={width}
        viewBox="0 -27 75 75"
        enableBackground="new 0 -27 75 75"
        xmlSpace="preserve"
      >
        <polygon
          points="25.1,46 1.1,46 1.1,36 15.1,36 15.1,15.7 32.3,15.7 32.3,-4.7 49.4,-4.7 49.4,-25 73.9,-25 73.9,-15 59.4,-15 
	59.4,5.3 42.3,5.3 42.3,25.7 25.1,25.7 "
        />
      </svg>
    </>
  );
};

export default FloaterIcon;
