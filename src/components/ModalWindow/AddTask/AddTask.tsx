import React, { ReactElement, useState } from 'react';
import { Task } from 'core/api/models';

import { Props } from '../types/AddTask.types';

import styles from './AddTask.module.scss';

const AddTask = ({ toggleModalWindow, createTask }: Props): ReactElement => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const changeInputTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };
  const changeInputDescription = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDescription(e.target.value);
  };

  const addTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    const task: Task = {
      _id: String(Math.random() * 1000),
      title,
      order: 0,
      boardId: '',
      columnId: '',
      description,
      userId: '',
      users: [],
    };
    createTask?.(task);
    toggleModalWindow?.(e);
  };

  return (
    <>
      <p className={styles.title}>Create new task</p>
      <div className={styles.inputContainer}>
        <p>Task title</p>
        <input value={title} onChange={changeInputTitle} />
      </div>
      <div className={styles.inputContainer}>
        <p>Task description</p>
        <input value={description} onChange={changeInputDescription} />
      </div>
      <button className={styles.createButton} type="button" onClick={addTask}>
        Add
      </button>
    </>
  );
};

export default AddTask;
