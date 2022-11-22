import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import Board from 'components/Board/Board';

import styles from './BoardPage.module.scss';

const BoardPage = (): ReactElement => {
  return (
    <section className={styles.boards}>
      <div className="container">
        <div className={styles.container}>
          <NavLink className={styles.backButton} to="/main">
            <button type="button">&#5130;</button>
          </NavLink>
          <div className={styles.mainContainer}>
            <Board />
            <Board />
            <Board />
            <Board />
            <div className={styles.addButton}>
              <div className={styles.buttonAddContainer}>
                <button className={styles.addColumnButton} type="button">
                  + Add column
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardPage;
