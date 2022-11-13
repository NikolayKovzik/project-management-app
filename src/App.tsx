import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from 'hocs/RequireAuth';
import BoardsPage from 'pages/BoardsPage/BoardsPage';
import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage';
import NotfoundPage from 'pages/NotFoundPage/NotFoundPage';
import SignInPage from 'pages/SignInPage';

import Layout from 'components/Layout/Layout';

import './App.css';
import './styles/normalize.css';
import './styles/index.scss';

function App(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        {/* <Route path="boards" element={<BoardsPage />} /> */}
        <Route path="signin" element={<LoginPage />} />
        <Route path="signup" element={<SignInPage />} />
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
