import React, { FC, ReactNode } from 'react';

import { Wrapper } from './FieldsContainer.styles';

type FieldsContainerProps = {
  children?: ReactNode;
};

const FieldsContainer: FC<FieldsContainerProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default FieldsContainer;
