import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { createRoot } from 'react-dom/client';
import ThemeProvider from './theme/ThemeProvider';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
