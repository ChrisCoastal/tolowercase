import CssBaseline from '@mui/joy/CssBaseline';
import { CssVarsProvider } from '@mui/joy/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { InputsProvider } from 'src/context/InputsProvider/InputsProvider';
import { SettingsProvider } from 'src/context/SettingsProvider/SettingsProvider';
import { globalTheme } from 'src/globalTheme';

import App from './components/App/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssVarsProvider theme={globalTheme}>
      <CssBaseline />
      <InputsProvider>
        <SettingsProvider>
          <App />
        </SettingsProvider>
      </InputsProvider>
    </CssVarsProvider>
  </React.StrictMode>
);
