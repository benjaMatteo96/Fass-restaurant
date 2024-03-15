import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import 'react-multi-carousel/lib/styles.css';
import App from './router';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
