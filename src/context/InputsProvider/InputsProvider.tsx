import React, { createContext, FC, ReactNode, useReducer } from 'react';
import { AppState, InputsContextType } from 'src/@types/types';
import reducer from 'src/context/InputsProvider/inputsReducer';

type InputsProviderProps = {
  children?: ReactNode;
};

const initialState = {
  input: '',
  output: {
    value: '',
    warn: false,
    warnDetail: [],
  },
} as AppState;
const InputsContext = createContext({} as InputsContextType);

const InputsProvider: FC<InputsProviderProps> = ({ children }) => {
  const [inputsState, dispatchInputs] = useReducer(reducer, initialState);
  return (
    <InputsContext.Provider value={{ inputsState, dispatchInputs }}>
      {children}
    </InputsContext.Provider>
  );
};

export { InputsContext, InputsProvider };
