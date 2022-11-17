import React, { FC } from 'react';
import { Setting } from 'src/@types/types';

type ShortcutsProps = {
  shortcut: {
    copy: Setting;
    save: Setting;
    clear: Setting;
    settings: Setting;
  };
};

const Shortcuts: FC<ShortcutsProps> = ({ shortcut }) => {
  return <div>Shortcuts</div>;
};

export default Shortcuts;
