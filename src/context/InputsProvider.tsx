import React, { FC, createContext, ReactNode, useReducer } from 'react';
import { AppState, InputsContext } from 'src/@types/types';
import reducer from 'src/context/reducer';

type InputsProviderProps = {
  children?: ReactNode;
};

const initialState = {} as AppState;
const InputsContext = createContext({} as InputsContext);

const InputsProvider: FC<InputsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <InputsContext.Provider value={{ state, dispatch }}>
      {children}
    </InputsContext.Provider>
  );
};

export { InputsContext, InputsProvider };
