import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import './Layout.scss';

function Layout(): ReactElement {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
