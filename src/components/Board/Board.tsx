import React, { ReactElement } from 'react';

import binImage from '../../assets/images/bin.png';
import boardImage from '../../assets/images/board.png';

import styles from './Board.module.scss';

function Board(): ReactElement {
  return (
    <div className={styles.board}>
      <div className={styles.info}>
        <div className={styles.boardNumber}>
          <img className={styles.boardImage} src={boardImage} alt="board" />
          <p className={styles.number}>#1</p>
        </div>
        <p>My first project</p>
      </div>
      <img className={styles.binImage} src={binImage} alt="bin" />
    </div>
  );
}

export default Board;
