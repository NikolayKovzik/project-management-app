/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactElement } from 'react';

import answerImage from '../../assets/images/answer.png';

import styles from './ModalWindow.module.scss';

type Props = {
  showModalWindow: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function ModalWindow({ showModalWindow }: Props): ReactElement {
  function disableClick(event: { stopPropagation: () => void }): void {
    event.stopPropagation();
  }

  function deleteItem(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    console.log('delete');
    showModalWindow(e);
  }

  return (
    <button type="button" className={styles.modalWindow} onClick={showModalWindow}>
      <div className={styles.filter} />
      <div className={styles.container} onClick={disableClick}>
        <button type="button" className={styles.closeBtn} onClick={showModalWindow}>
          &times;
        </button>
        <img className={styles.answerImage} src={answerImage} alt="answer" />
        <p>Are you sure to delete this (item)?</p>
        <div className={styles.buttonContainer}>
          <button type="button" className={styles.buttonYes} onClick={deleteItem}>
            Yes
          </button>
          <button type="button" className={styles.buttonNo} onClick={showModalWindow}>
            No
          </button>
        </div>
      </div>
    </button>
  );
}

export default ModalWindow;
