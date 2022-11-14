import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import UsersApi from 'api/UsersApi';

import App from './App';

UsersApi.signUp({ name: 'Ilon', login: 'Ilon', password: 'qwerty123' });

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
