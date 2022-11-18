import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import UsersApi from 'api/UsersApi';

import App from './App';

async function xex(): Promise<void> {
  // await UsersApi.signUp({ name: 'Ilo7776', login: 'Ilo7776', password: 'qwerty123' });
  await UsersApi.signIn({ login: 'Ilo7776', password: 'qwerty123' });
  await UsersApi.getUsers();
}

xex();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
