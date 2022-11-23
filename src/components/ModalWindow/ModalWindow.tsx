/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactElement } from 'react';

import CreateBoard from './CreateBoard/CreateBoard';
import DeleteBoard from './DeleteBoard/DeleteBoard';
import EditProfile from './EditProfile/EditProfile';
import { Props, TYPES } from './types/ModalWindow.types';

import styles from './ModalWindow.module.scss';

const ModalWindow = ({ toggleModalWindow, deleteBoard, type }: Props): ReactElement => {
  const disableClick = (event: { stopPropagation: () => void }): void => {
    event.stopPropagation();
  };

  return (
    <button
      type="button"
      className={type === TYPES.PROFILE ? styles.modalProfileWindow : styles.modalWindow}
      onClick={toggleModalWindow}
    >
      <div className={type === TYPES.PROFILE ? styles.filterUnActive : styles.filter} />
      <div
        className={type === TYPES.PROFILE ? styles.containerProfile : styles.container}
        onClick={disableClick}
      >
        <button
          type="button"
          className={type === TYPES.PROFILE ? styles.closeBtnUnActive : styles.closeBtn}
          onClick={toggleModalWindow}
        >
          &times;
        </button>
        {type === TYPES.DELETE && (
          <DeleteBoard deleteBoard={deleteBoard} toggleModalWindow={toggleModalWindow} />
        )}
        {type === TYPES.CREATE && <CreateBoard toggleModalWindow={toggleModalWindow} />}
        {type === TYPES.PROFILE && <EditProfile />}
      </div>
    </button>
  );
};

export default ModalWindow;
