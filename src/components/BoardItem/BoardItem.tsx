/* eslint-disable no-underscore-dangle */
import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { Board } from 'core/api/models';

import binImage from '../../assets/images/bin.png';
import boardImage from '../../assets/images/board.png';

import styles from './BoardItem.module.scss';

export type Props = {
  boardInfo: Board;
};

function BoardItem({ boardInfo }: Props): ReactElement {
  const boardNumber = boardInfo._id.slice(boardInfo._id.length - 4);

  return (
    <NavLink to="/boards">
      <div className={styles.board}>
        <div className={styles.info}>
          <div className={styles.boardNumber}>
            <img className={styles.boardImage} src={boardImage} alt="board" />
            <p className={styles.number}>#{boardNumber}</p>
          </div>
          <p>{boardInfo.title}</p>
        </div>
        <div className={styles.delete}>
          <p>owner: {boardInfo.owner}</p>
          <img className={styles.binImage} src={binImage} alt="bin" />
        </div>
      </div>
    </NavLink>
  );
}

export default BoardItem;
