import React from 'react';
import ReactDOM from 'react-dom/client';
import { InputsProvider } from 'src/context/InputsProvider';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <InputsProvider>
      <App />
    </InputsProvider>
  </React.StrictMode>
);
