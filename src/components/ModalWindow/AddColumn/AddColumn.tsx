import React, { ReactElement, useState } from 'react';
import { Column } from 'core/api/models';

import { Props } from '../types/AddColumn.types';

import styles from './AddColumn.module.scss';

const AddColumn = ({ toggleModalWindow, createColumn }: Props): ReactElement => {
  const [title, setTitle] = useState('');

  const changeInputTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const addColumn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    const column: Column = {
      title,
      order: 0,
      boardId: String(Math.random() * 1000),
      _id: '',
    };
    createColumn?.(column);
    toggleModalWindow?.(e);
  };

  return (
    <>
      <p className={styles.title}>Create new column</p>
      <div className={styles.inputContainer}>
        <p>Column title</p>
        <input value={title} onChange={changeInputTitle} />
      </div>
      <button className={styles.createButton} type="button" onClick={addColumn}>
        Add
      </button>
    </>
  );
};

export default AddColumn;
