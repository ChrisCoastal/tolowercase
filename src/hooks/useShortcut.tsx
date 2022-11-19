import React, { useState } from 'react';
import { ShortcutName } from 'src/@types/types';

const useShortcut = () => {
  const [keyEvent, setKeyEvent] = useState<ShortcutName>();

  function keyDownHandler(event: React.KeyboardEvent): void {
    console.log(event, event.key, event.ctrlKey);
    setKeyEvent(ShortcutName.COPY); // FIXME:
  }
  return { keyDownHandler, keyEvent };
};

export default useShortcut;
