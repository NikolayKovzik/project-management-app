import React, { ReactElement } from 'react';

import './HomePage.scss';

function HomePage(): ReactElement {
  return (
    <section className="home-page">
      <h1 className="home-page__greeting">Welcome to our Site!</h1>
    </section>
  );
}

export default HomePage;
