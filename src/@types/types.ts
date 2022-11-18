import { Dispatch } from 'react';

export type AppState = {
  input: string;
  output: string;
  prev: {
    id: string;
    input: string;
    output: string;
  }[];
};

// Inputs Context
export enum InputsReducerTypes {
  INPUT = 'input',
  REMOVE = 'remove',
  LOAD = 'load',
}

export type InputsReducerActions = {
  type: InputsReducerTypes;
  payload: string;
};

export type InputsReducer = {
  state: AppState;
  dispatch: Dispatch<InputsReducerActions>;
};

export type InputsContextType = {
  state: AppState;
  dispatch: Dispatch<InputsReducerActions>;
};

// Settings Context
export type SettingsState = {
  userAgent: string;
  theme: ThemeSetting;
  // shortcuts: Shortcut[];
  inputSettings: {
    invisibleChar: Setting;
    uriReserved: Setting;
    uriUnsafe: Setting;
    trim: Setting;
    outputLength: Setting;
    findReplace: Setting;
  };
};

export type Shortcut = {
  name: string;
  text: string;
  key: ModifierKey;
};

export enum ShortcutName {
  COPY = 'Copy',
  CLEAR = 'Clear',
  SAVE = 'Save',
  OPEN_DRAWER = 'Open',
}

export type Setting = {
  text: string;
  isActive: boolean;
  value?: string | number | FindReplace[];
};

export enum ModifierKey {
  META = 'Meta',
  CTRL = 'Control',
  ALT = 'Alt',
}

export type FindReplace = {
  inputChar: string;
  replaceChar?: string;
};

export enum ThemeSetting {
  LIGHT = 'light',
  DARK = 'dark',
  FOUNTAIN = 'fountain',
}

export enum SettingsReducerTypes {
  INVISIBLE = 'invisible',
  URI_RESERVED = 'uriReserved',
  URI_UNSAFE = 'uirUnsafe',
  LENGTH = 'length',
  TRIM = 'trim',
  FIND = 'find',
  SET_USER_AGENT = 'setUserAgent',
  SET_MODIFIER_KEY = 'setModifier',
  SET_COPY = 'setCopy',
  SET_CLEAR = 'setClear',
  SET_SAVE = 'setSave',
  SET_OPEN_DRAWER = 'setOpen',
}

export type SettingsReducerAction = {
  type: SettingsReducerTypes;
  payload: { [key: string]: string | number | boolean | FindReplace };
};

export type SettingsContextType = {
  state: SettingsState;
  dispatch: Dispatch<SettingsReducerAction>;
};

// Theme
