/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import BoardsApi from 'core/api/BoardsApi';
import ColumnsApi from 'core/api/ColumnsApi';
import UsersApi from 'core/api/UsersApi';
import AuthApi from 'core/rest/AuthApi';
import store from 'store';

import App from './App';

async function xex(): Promise<void> {
  // await AuthApi.signUp({ name: 'Ilo7776', login: 'Ilo7776', password: 'qwerty123' });
  // await AuthApi.signIn({ login: 'Ilo7776', password: 'qwerty123' });
  // const board1 = await BoardsApi.createBoard({
  //   title: 'Board1',
  //   owner: 'somebody',
  //   users: ['rabbit', 'wolf'],
  // });
  // await BoardsApi.getAllBoards();
  // await ColumnsApi.getAllColumnsByBoardId('63797a186180495fafca927e');
  // await ColumnsApi.createSetOfColumns([
  //   {
  //     title: 'ONE',
  //     order: 1,
  //     boardId: '63797a186180495fafca927e',
  //   },
  // ]);

  await ColumnsApi.getColumnsByUserId('somebody');
  await ColumnsApi.getColumnsByUserId('grib');
}

xex();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
