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
  invisibleChar: boolean;
  uriReserved: boolean;
  uriUnsafe: boolean;
  stringLength: null | number;
  trimEnd: boolean;
  customWarn: { inputChar: string }[];
  replace: { inputChar: string; replaceChar: string }[];
};

export enum SettingsReducerTypes {
  UPDATE = 'update',
}

export type SettingsReducerActions = {
  type: SettingsReducerTypes;
  payload: boolean | number;
};

export type SettingsContextType = {
  state: SettingsState;
  dispatch: Dispatch<SettingsReducerActions>;
};
