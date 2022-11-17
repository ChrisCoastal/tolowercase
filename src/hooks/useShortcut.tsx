import React from 'react';
import useSettingsContext from 'src/hooks/useSettingsContext';

const useShortcut = () => {
  const { dispatch } = useSettingsContext();

  function keyDownHandler(event: React.KeyboardEvent): void {
    console.log(event, event.key, event.ctrlKey);
  }
  return { keyDownHandler };
};

export default useShortcut;
