import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { InputsProvider } from 'src/context/InputsProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <InputsProvider>
      <App />
    </InputsProvider>
  </React.StrictMode>
);
