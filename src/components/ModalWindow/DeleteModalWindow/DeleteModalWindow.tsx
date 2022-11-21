import React, { ReactElement } from 'react';

import answerImage from '../../../assets/images/answer.png';

import styles from './DeleteModalWindow.module.scss';

type Props = {
  toggleModalWindow: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  deleteBoard: () => void;
};

const DeleteModalWindow = ({ deleteBoard, toggleModalWindow }: Props): ReactElement => {
  const deleteItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    deleteBoard();
    toggleModalWindow(e);
  };

  return (
    <>
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
    </>
  );
};

export default DeleteModalWindow;
