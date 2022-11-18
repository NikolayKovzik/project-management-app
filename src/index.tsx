import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import AuthApi from 'api/AuthApi';
import UsersApi from 'api/UsersApi';

import App from './App';

async function xex(): Promise<void> {
  // await AuthApi.signUp({ name: 'Ilo7776', login: 'Ilo7776', password: 'qwerty123' });
  // await AuthApi.signIn({ login: 'Ilo7776', password: 'qwerty123' });
  await UsersApi.getUser('636ea7756180495fafca91b8');
  await UsersApi.deleteUser('636ea7756180495fafca91b8');
  await UsersApi.getUser('636ea7756180495fafca91b8');
}

xex();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
