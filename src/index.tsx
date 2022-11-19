import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import AuthApi from 'api/AuthApi';
import BoardsApi from 'api/BoardsApi';
import UsersApi from 'api/UsersApi';

import App from './App';

async function xex(): Promise<void> {
  // await AuthApi.signUp({ name: 'Ilo7776', login: 'Ilo7776', password: 'qwerty123' });
  // await AuthApi.signIn({ login: 'Ilo7776', password: 'qwerty123' });
  // await BoardsApi.getAllBoards();
  // await BoardsApi.getBoardsSet(['637834e86180495fafca923a', '637834e96180495fafca923c']);
  // await BoardsApi.getAllUserBoards('grib');
}

xex();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
