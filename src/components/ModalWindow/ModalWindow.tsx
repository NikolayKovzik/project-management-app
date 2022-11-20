/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactElement } from 'react';

import answerImage from '../../assets/images/answer.png';

import styles from './ModalWindow.module.scss';

type Props = {
  toggleModalWindow: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  deleteBoard: () => void;
};

function ModalWindow({ toggleModalWindow, deleteBoard }: Props): ReactElement {
  function disableClick(event: { stopPropagation: () => void }): void {
    event.stopPropagation();
  }

  function deleteItem(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    deleteBoard();
    toggleModalWindow(e);
  }

  return (
    <button type="button" className={styles.modalWindow} onClick={toggleModalWindow}>
      <div className={styles.filter} />
      <div className={styles.container} onClick={disableClick}>
        <button type="button" className={styles.closeBtn} onClick={toggleModalWindow}>
          &times;
        </button>
        <img className={styles.answerImage} src={answerImage} alt="answer" />
        <p>Are you sure to delete this (item)?</p>
        <div className={styles.buttonContainer}>
          <button type="button" className={styles.buttonYes} onClick={deleteItem}>
            Yes
          </button>
          <button type="button" className={styles.buttonNo} onClick={toggleModalWindow}>
            No
          </button>
        </div>
      </div>
    </button>
  );
}

export default ModalWindow;
