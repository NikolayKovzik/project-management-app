import React, { ReactElement } from 'react';
import { ColumnBody } from 'core/api/models';

import styles from './Board.module.scss';

type Props = {
  boardId: string;
  board: ColumnBody;
};

const Board = ({ boardId, board }: Props): ReactElement => {
  return (
    <div className={styles.board}>
      <p className={styles.boardTitle}>{board.title}</p>
      <p>{boardId}</p>
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
