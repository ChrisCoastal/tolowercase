import React, { useState } from 'react';
import { ModifierKey, ShortcutName } from 'src/@types/types';

const useShortcut = () => {
  const [keyEvent, setKeyEvent] = useState<ShortcutName>();

  function keyDownHandler(event: React.KeyboardEvent): void {
    console.log(event, event.key, event.ctrlKey);
  }
  return { keyDownHandler, keyEvent };
};

export default useShortcut;
