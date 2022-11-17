import React, { createContext, FC, ReactNode, useReducer } from 'react';
import { SettingsContextType } from 'src/@types/types';
import reducer from 'src/context/SettingsProvider/settingsReducer';
import { INITIAL_SETTINGS_STATE } from 'src/utils/constants';

type SettingsProviderProps = {
  children?: ReactNode;
};

const SettingsContext = createContext({} as SettingsContextType);

const SettingsProvider: FC<SettingsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_SETTINGS_STATE);
  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsProvider };
