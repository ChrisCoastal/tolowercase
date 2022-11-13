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
