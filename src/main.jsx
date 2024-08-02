import React from 'react';
import { createRoot } from 'react-dom/client'; // Importe createRoot de react-dom/client
import { BrowserRouter } from 'react-router-dom'; // Importe o BrowserRouter
import App from './App.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Envolve o App com o BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);