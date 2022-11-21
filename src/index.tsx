import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import AuthApi from 'core/rest/AuthApi';
import store from 'store';

import App from './App';

const xex = async (): Promise<void> => {
  // await AuthApi.signUp({ name: 'Ilo7776', login: 'Ilo7776', password: 'qwerty123' });
  await AuthApi.signIn({ login: 'Ilo7776', password: 'qwerty123' });
  // await BoardsApi.getAllBoards();
  // await BoardsApi.getBoardsSet(['637834e86180495fafca923a', '637834e96180495fafca923c']);
  // await BoardsApi.getAllUserBoards('grib');
};

xex();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
