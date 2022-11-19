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
  outputValidation: ValidationSetting[];
  // {
  //   toLowerCase: Setting
  //   invisibleChar: Setting;
  //   uriReserved: Setting;
  //   uriUnsafe: Setting;
  //   trim: Setting;
  //   outputLength: Setting;
  //   findReplace: Setting;
  // };
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

export type ValidationSetting = {
  id: SettingId;
  label: string;
  helperText: string | null;
  isActive: boolean;
  value: SettingValue;
  replace?: any;
};

export type SettingValue = number | number[];

export enum SettingId {
  CASE = 'characterCase',
  INVISIBLE = 'unicodeInvisible',
  URI_RESERVED = 'uriReserved',
  URI_UNSAFE = 'uirUnsafe',
  LENGTH = 'length',
  TRIM = 'trim',
  FIND = 'find',
}

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
  IS_ACTIVE = 'isActive',
  VALUE = 'value',
  UPDATE_SETTING = 'updateSetting',
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

export type UserAgentAction = {
  type: SettingsReducerTypes.SET_USER_AGENT;
  payload: { userAgent: string };
};

export type SettingIsActiveAction = {
  type: SettingsReducerTypes.IS_ACTIVE;
  payload: { id: SettingId; isActive: boolean };
};

export type SettingValueAction = {
  type: SettingsReducerTypes.VALUE;
  payload: { id: SettingId; value: number | number[] };
};

// export type SettingsReducerAction = {
//   type: SettingsReducerTypes;
//   payload: {
//     [key: string]: string | number | boolean | FindReplace | SettingValue;
//   };
// };
export type SettingsReducerAction =
  | UserAgentAction
  | SettingIsActiveAction
  | SettingValueAction;

export type SettingsContextType = {
  state: SettingsState;
  dispatch: Dispatch<SettingsReducerAction>;
};

// Theme
