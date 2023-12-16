import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './apps/home/App.tsx';
import './main.scss';
import config from './components/config/config.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App config={config} />
  </React.StrictMode>,
);
