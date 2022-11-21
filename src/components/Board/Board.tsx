import React, { ReactElement } from 'react';

import styles from './Board.module.scss';

const Board = (): ReactElement => {
  return (
    <div className={styles.board}>
      <p className={styles.boardTitleDone}>Done</p>
      <div className={styles.filterContainer}>
        <ul className={styles.boardContainer}>
          <li>
            <p>Task 3</p>
            <button type="button" className={styles.deleteBtn}>
              &#10006;
            </button>
          </li>
          <li>
            <p>Task 3</p>
            <button type="button" className={styles.deleteBtn}>
              &#10006;
            </button>
          </li>
          <li>
            <p>Task 3</p>
            <button type="button" className={styles.deleteBtn}>
              &#10006;
            </button>
          </li>
          <li>
            <p>Task 3</p>
            <button type="button" className={styles.deleteBtn}>
              &#10006;
            </button>
          </li>
          <li>
            <p>Task 3</p>
            <button type="button" className={styles.deleteBtn}>
              &#10006;
            </button>
          </li>
          <li>
            <p>Task 3</p>
            <button type="button" className={styles.deleteBtn}>
              &#10006;
            </button>
          </li>
        </ul>
      </div>

      <p className={styles.addItem}>+ Add task</p>
    </div>
  );
};

export default Board;
