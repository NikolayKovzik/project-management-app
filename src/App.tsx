import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from 'pages/AboutPage/AboutPage';
import BoardsPage from 'pages/BoardsPage/BoardsPage';
import HomePage from 'pages/HomePage/HomePage';
import NotfoundPage from 'pages/NotFoundPage/NotFoundPage';

import Layout from 'components/Layout/Layout';

import './App.css';
import './styles/normalize.css';
import './styles/index.scss';

function App(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="boards" element={<BoardsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
