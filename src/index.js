import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App,Demo} from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Demo/>
  </React.StrictMode>
);

