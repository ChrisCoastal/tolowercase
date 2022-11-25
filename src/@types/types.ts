import { Dispatch } from 'react';

export type AppState = {
  input: string;
  output: OutputType;
  // saved: {
  //   id: string;
  //   input: string;
  //   output: OutputType;
  // }[];
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
  outputValidation: ValidationSetting[];
};

// export type Shortcut = {
//   name: string;
//   text: string;
//   key: ModifierKey;
// };

// export enum ShortcutName {
//   COPY = 'Copy',
//   CLEAR = 'Clear',
//   SAVE = 'Save',
//   OPEN_DRAWER = 'Open',
// }

export type ValidationSetting = {
  id: SettingId;
  label: string;
  helperText: string | null;
  isActive: boolean;
  validate: (
    output: OutputType,
    actionType: SettingActionType | number | number[],
    targetLength?: number | number[],
    replaceValue?: ReplaceValue
  ) => OutputType;
  validActions: SettingActionType[];
  curAction: SettingActionType;
  targetLength?: number | number[];
  sliderSetting?: SliderSetting;
  replaceValue?: ReplaceValue;
};

export type ReplaceValue = [string, string];

export type SliderSetting = {
  min: number;
  max: number;
  step: number;
  labelDisplay?: 'auto' | 'on' | 'off';
  marks?: Mark;
  sliderWidth?: number;
};

export type Mark = boolean | { value: number; label?: string | number }[];

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
  SYSTEM = 'system',
}

export enum SettingsReducerTypes {
  THEME_MODE = 'mode',
  IS_ACTIVE = 'isActive',
  ACTION = 'actionType',
  VALUE = 'value',
  UPDATE_SETTING = 'updateSetting',
  INVISIBLE = 'invisible',
  URI_RESERVED = 'uriReserved',
  URI_UNSAFE = 'uirUnsafe',
  LENGTH_SLIDER = 'length',
  TRIM = 'trim',
  // FIND = 'find',
  SET_USER_AGENT = 'setUserAgent',
}

export type ThemeModeSettingsAction = {
  type: SettingsReducerTypes.THEME_MODE;
  payload: { mode: ThemeSetting };
};

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

export type LengthSettingsAction = {
  type: SettingsReducerTypes.LENGTH_SLIDER;
  payload: { id: SettingId; targetLength: number | number[] };
};

export type ActionTypeSettingsAction = {
  type: SettingsReducerTypes.ACTION;
  payload: { id: SettingId; curAction: SettingActionType };
};

export type SettingsReducerAction =
  | ActionTypeSettingsAction
  | IsActiveSettingsAction
  | LengthSettingsAction
  | ThemeModeSettingsAction
  | UserAgentSettingsAction
  | ValueSettingsAction;

export type SettingsContextType = {
  settingsState: SettingsState;
  dispatchSettings: Dispatch<SettingsReducerAction>;
};
