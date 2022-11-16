import { useState } from 'react';

const useDrawer = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return { isVisible, setIsVisible };
};

export default useDrawer;
