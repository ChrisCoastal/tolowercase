import CssBaseline from '@mui/joy/CssBaseline';
import { CssVarsProvider } from '@mui/joy/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { InputsProvider } from 'src/context/InputsProvider/InputsProvider';

import App from './components/App/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssVarsProvider>
      <CssBaseline />
      <InputsProvider>
        <App />
      </InputsProvider>
    </CssVarsProvider>
  </React.StrictMode>
);
