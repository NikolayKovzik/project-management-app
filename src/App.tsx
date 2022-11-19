/* eslint-disable import/no-unresolved */
import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from 'core/hocs/RequireAuth';
import BoardsPage from 'pages/BoardsPage/BoardsPage';
import HomePage from 'pages/HomePage/HomePage';
import NotfoundPage from 'pages/NotFoundPage/NotFoundPage';
import LoginPage from 'pages/SignInPage/SignInPage';
import SignUpPage from 'pages/SignUpPage/SignUpPage';
import TestRedux from 'TempRedux';

import Layout from 'components/Layout/Layout';

import './App.css';
import './assets/styles/normalize.css';
import './assets/styles/index.scss';

function App(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="test" element={<TestRedux />} />
        <Route path="signin" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route
          path="/boards"
          element={
            <RequireAuth>
              <BoardsPage />
            </RequireAuth>
          }
        />

        <Route path="*" element={<NotfoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
