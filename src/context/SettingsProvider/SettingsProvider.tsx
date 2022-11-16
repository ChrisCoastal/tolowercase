import React, { createContext, FC, ReactNode, useReducer } from 'react';
import {
  SettingsContextType,
  SettingsState,
  ThemeSetting,
} from 'src/@types/types';
import reducer from 'src/context/SettingsProvider/settingsReducer';

type SettingsProviderProps = {
  children?: ReactNode;
};

const initialState = {
  theme: ThemeSetting.LIGHT,
  invisibleChar: true,
  uriReserved: false,
  uriUnsafe: false,
  stringLength: null,
  trimEnd: true,
  customWarn: [],
  replace: [],
} as SettingsState;

const InputsContext = createContext({} as SettingsContextType);

const InputsProvider: FC<SettingsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <InputsContext.Provider value={{ state, dispatch }}>
      {children}
    </InputsContext.Provider>
  );
};

export { InputsContext, InputsProvider };
