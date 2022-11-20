import React, { FC } from 'react';

type FloaterIconProps = {
  height: string;
  width: string;
};

const FloaterIcon: FC<FloaterIconProps> = ({ height, width }) => {
  return (
    <>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}
        viewBox="0 0 48 48"
      >
        <path d="M42 13.85V39q0 1.2-.9 2.1-.9.9-2.1.9H9q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h25.15Zm-3 1.35L32.8 9H9v30h30ZM24 35.75q2.15 0 3.675-1.525T29.2 30.55q0-2.15-1.525-3.675T24 25.35q-2.15 0-3.675 1.525T18.8 30.55q0 2.15 1.525 3.675T24 35.75ZM11.65 18.8h17.9v-7.15h-17.9ZM9 15.2V39 9Z" />
      </svg> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="75px"
        height="75px"
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
