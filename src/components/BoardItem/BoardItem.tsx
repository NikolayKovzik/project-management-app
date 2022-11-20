import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import binImage from '../../assets/images/bin.png';
import boardImage from '../../assets/images/board.png';

import styles from './BoardItem.module.scss';

function Board(): ReactElement {
  return (
    <NavLink to="/boards">
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
    </NavLink>
  );
}

export default Board;
