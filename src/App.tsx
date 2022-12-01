/* eslint-disable import/no-unresolved */
import React, { ReactElement, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import BoardPage from 'pages/BoardPage/BoardPage';
import HomePage from 'pages/HomePage/HomePage';
import MainPage from 'pages/MainPage/MainPage';
import NotfoundPage from 'pages/NotFoundPage/NotFoundPage';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import LoginPage from 'pages/SignInPage/SignInPage';
import SignUpPage from 'pages/SignUpPage/SignUpPage';
import { useAppDispatch } from 'store';
import { checkAuth, sendLoginRequest } from 'store/authSlice';
import TestRedux from 'TempRedux';

import Layout from 'components/Layout/Layout';

import './App.css';
import './styles/normalize.css';
import './styles/index.scss';

const App = (): ReactElement => {
  // checkAuth
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
    dispatch(sendLoginRequest({ login: 'Ilo7776', password: 'qwerty123' }));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="test" element={<TestRedux />} />
        <Route path="signin" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="board" element={<BoardPage />} />
        <Route path="board/:id" element={<BoardPage />} />

        <Route path="*" element={<NotfoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
