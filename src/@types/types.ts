import { Dispatch } from 'react';

export type AppState = {
  input: string;
  output: OutputType;
  prev: {
    id: string;
    input: string;
    output: OutputType;
  }[];
};

export type OutputType = {
  value: string;
  warn: boolean;
  warnDetail: string[];
};

// Inputs Context
export enum InputsReducerTypes {
  INPUT = 'input',
  OUTPUT = 'output',
  REMOVE = 'remove',
  LOAD = 'load',
}

export type InputChangeAction = {
  type: InputsReducerTypes.INPUT;
  payload: string;
};

export type UpdateOutputAction = {
  type: InputsReducerTypes.OUTPUT;
  payload: OutputType;
};

export type InputsReducerActions = InputChangeAction | UpdateOutputAction;

export type InputsContextType = {
  inputsState: AppState;
  dispatchInputs: Dispatch<InputsReducerActions>;
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
  validate: (
    output: OutputType,
    actionType: SettingActionType | number | number[],
    replaceValue?: ReplaceValue
  ) => OutputType;
  validActions: SettingActionType[];
  curAction: SettingActionType;
  // value: number | number[];
  length?: number | number[];
  replaceValue?: any;
};

export type ReplaceValue = [string, string];

export enum SettingActionType {
  WARN = 0,
  REMOVE = 1,
  REPLACE = 2,
}

export enum SettingId {
  TO_UPPERCASE = 'toUpperCase',
  TO_LOWERCASE = 'toLowerCase',
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
  ACTION = 'actionType',
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

export type UserAgentSettingsAction = {
  type: SettingsReducerTypes.SET_USER_AGENT;
  payload: { userAgent: string };
};

export type IsActiveSettingsAction = {
  type: SettingsReducerTypes.IS_ACTIVE;
  payload: { id: SettingId; isActive: boolean };
};

export type ValueSettingsAction = {
  type: SettingsReducerTypes.VALUE;
  payload: { id: SettingId; value: number | number[] };
};

export type ActionTypeSettingsAction = {
  type: SettingsReducerTypes.ACTION;
  payload: { id: SettingId; curAction: SettingActionType };
};

// export type SettingsReducerAction = {
//   type: SettingsReducerTypes;
//   payload: {
//     [key: string]: string | number | boolean | FindReplace | SettingValue;
//   };
// };

export type SettingsReducerAction =
  | UserAgentSettingsAction
  | IsActiveSettingsAction
  | ValueSettingsAction
  | ActionTypeSettingsAction;

export type SettingsContextType = {
  settingsState: SettingsState;
  dispatchSettings: Dispatch<SettingsReducerAction>;
};

// Theme
