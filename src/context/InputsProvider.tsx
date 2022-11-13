import React, { createContext, FC, ReactNode, useReducer } from 'react';
import { AppState, InputsContextType } from 'src/@types/types';
import reducer from 'src/context/reducer';

type InputsProviderProps = {
  children?: ReactNode;
};

const initialState = {
  input: '',
  output: '',
} as AppState;
const InputsContext = createContext({} as InputsContextType);

const InputsProvider: FC<InputsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <InputsContext.Provider value={{ state, dispatch }}>
      {children}
    </InputsContext.Provider>
  );
};

export { InputsContext, InputsProvider };
