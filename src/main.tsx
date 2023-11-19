import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './apps/home/App.tsx';
import './apps/home/index.css';

// that could be reiplemented with standard BrowserRouter https://github.com/rafgraph/spa-github-pages to properly reload each sub-page
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
