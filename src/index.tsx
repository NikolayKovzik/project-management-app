/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import BoardsApi from 'core/api/BoardsApi';
import ColumnsApi from 'core/api/ColumnsApi';
import { Board } from 'core/api/models';
import TasksApi from 'core/api/TasksApi';
import UsersApi from 'core/api/UsersApi';
import AuthApi from 'core/rest/AuthApi';
import store from 'store';

import App from './App';

const xex = async (): Promise<void> => {
  // await AuthApi.signUp({ name: 'Ilo7776', login: 'Ilo7776', password: 'qwerty123' });
  // await AuthApi.signIn({ login: 'Ilo7776', password: 'qwerty123' });
  // const board1 = await BoardsApi.createBoard({
  //   title: 'Board1',
  //   owner: 'somebody',
  //   users: ['rabbit', 'wolf'],
  // });
  // await BoardsApi.getAllBoards();
  // await ColumnsApi.createSetOfColumns([
  //   {
  //     title: 'ONE',
  //     order: 1,
  //     boardId: '63797a186180495fafca927e',
  //   },
  // ]);
  // await ColumnsApi.getColumnsByUserId('somebody');
  // await ColumnsApi.getColumnsByUserId('grib');
  // await ColumnsApi.getAllColumnsByBoardId('63797a186180495fafca927e');
  // await BoardsApi.getAllBoards();
  // await ColumnsApi.getColumnsByUserId('somebody');
  // await TasksApi.createTask('637834e86180495fafca9238', '63797a1a6180495fafca9284', {
  //   title: 'REVOLUTION',
  //   order: 0,
  //   description: 'clean the room',
  //   userId: 'FUCKER',
  //   users: ['DUCKER', 'FUCKER'],
  // });
  // await TasksApi.createTask('637834e86180495fafca9238', '63797a1a6180495fafca9284', {
  //   title: 'SOLVE PROBLEM',
  //   order: 1,
  //   description: 'solve problem',
  //   userId: 'DUCKER',
  //   users: ['MOTHERDUCKER', 'MOTHERFUCKER'],
  // });
  // await TasksApi.getTasksInColumn('637834e86180495fafca9238', '63797a1a6180495fafca9284');
  // await TasksApi.getTasksByBoardId('637834e86180495fafca9238');
  // await TasksApi.getTasksByUserId('idgaf');
  // await TasksApi.getTasksBySearchRequest('123');
  // await TasksApi.getTasksByIdsListOrByUserIdOrBySearchRequest(
  //   ['637a75556180495fafca9392', '637a75566180495fafca9395', '637a78386180495fafca93a4'],
  //   'idgaf'
  // );
  // await TasksApi.getTasksByIdsListOrByUserIdOrBySearchRequest(
  //   ['637a75556180495fafca9392', '637a75566180495fafca9395', '637a78386180495fafca93a4'],
  //   'idgaf',
  //   'DUCK'
  // );
  // await AuthApi.signUp({ name: 'bombombom', login: 'bombombom', password: 'qwerty123' });
  // await AuthApi.signIn({ login: 'bombombom', password: 'qwerty123' });

  await BoardsApi.getAllBoards();
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
