import React, { FC } from 'react';

import { IconWrapper } from '../IconWrapper.styles';

type SaveIconProps = {
  height: string;
  width: string;
  color?: string;
};

const SaveIcon: FC<SaveIconProps> = ({ height, width, color = '#fff' }) => {
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
        <path d="M42 13.85V39q0 1.2-.9 2.1-.9.9-2.1.9H9q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h25.15Zm-3 1.35L32.8 9H9v30h30ZM24 35.75q2.15 0 3.675-1.525T29.2 30.55q0-2.15-1.525-3.675T24 25.35q-2.15 0-3.675 1.525T18.8 30.55q0 2.15 1.525 3.675T24 35.75ZM11.65 18.8h17.9v-7.15h-17.9ZM9 15.2V39 9Z" />
      </svg>
    </IconWrapper>
  );
};

export default SaveIcon;
