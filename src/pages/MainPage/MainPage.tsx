import React, { ReactElement } from 'react';

import BoardItem from 'components/BoardItem/BoardItem';

import styles from './MainPage.module.scss';

function MainPage(): ReactElement {
  return (
    <section className={styles.home}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.mainContainer}>
            <BoardItem />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
