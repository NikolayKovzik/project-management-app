import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import './NotFoundPage.scss';

function NotfoundPage(): ReactElement {
  return (
    <section className="notfound-page">
      <p className="notfound-page__warning">
        404 Not found.{' '}
        <Link to="/" className="notfound-page__home-link">
          Back to home
        </Link>
      </p>
    </section>
  );
}

export default NotfoundPage;
