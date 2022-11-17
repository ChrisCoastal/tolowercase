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
  shortcuts: {
    copy: Shortcut;
    save: Shortcut;
    clear: Shortcut;
    settings: Shortcut;
    modifierKey: Shortcut;
  };
  inputSettings: {
    invisibleChar: Setting;
    uriReserved: Setting;
    uriUnsafe: Setting;
    stringLength: Setting;
    trim: Setting;
    findReplace: Setting;
  };
};

export type Shortcut = {
  text: string;
  key: string;
};

export type Setting = {
  text: string;
  isActive: boolean;
  value?: string | number | FindReplace[];
};

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
  UPDATE = 'update',
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
