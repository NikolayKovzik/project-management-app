/* eslint-disable no-underscore-dangle */
import React, { ReactElement, useState } from 'react';
import { ColumnPostBody, Task } from 'core/api/models';

import ModalWindow from 'components/ModalWindow/ModalWindow';

import binImage from '../../assets/images/bin.png';

import styles from './Column.module.scss';

type Props = {
  boardId: string;
  column: ColumnPostBody;
  deleteColumn: (id: string) => void;
};

const Column = ({ boardId, column, deleteColumn }: Props): ReactElement => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      _id: String(Math.random() * 1000),
      title: 'TaskOne',
      order: 0,
      boardId: '',
      columnId: '',
      description: 'Today',
      userId: '',
      users: [],
    },
  ]);
  const [deleteId, setDeleteId] = useState('');
  const [modalWindow, setModalWindow] = useState(false);
  const [modalDeleteColumnWindow, setModalDeleteColumnWindow] = useState(false);
  const [modalDeleteTaskWindow, setModalDeleteTaskWindow] = useState(false);

  const toggleModalWindow = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    event.preventDefault();
    setModalWindow(!modalWindow);
  };
  const toggleDeleteColumnModalWindow = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ): void => {
    event.preventDefault();
    setModalDeleteColumnWindow(!modalDeleteColumnWindow);
  };
  const toggleDeleteTaskModalWindow = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    event.preventDefault();
    setModalDeleteTaskWindow(!modalDeleteTaskWindow);
  };

  const createTask = (task: Task): void => {
    setTasks((prevState) => {
      return [...prevState, task];
    });
    setModalWindow(!modalWindow);
  };

  const deleteCurrentTask = (): void => {
    setTasks(tasks.filter((task) => task._id !== deleteId));
  };

  const deleteCurrentColumn = (): void => {
    deleteColumn(column.boardId);
  };

  return (
    <>
      {modalDeleteColumnWindow && (
        <ModalWindow
          type="deletecolumn"
          toggleModalWindow={toggleDeleteColumnModalWindow}
          deleteCurrentColumn={deleteCurrentColumn}
        />
      )}
      {modalDeleteTaskWindow && (
        <ModalWindow
          type="deletetask"
          toggleModalWindow={toggleDeleteTaskModalWindow}
          deleteCurrentTask={deleteCurrentTask}
        />
      )}
      <div className={styles.board}>
        <div className={styles.boardTitle}>
          <p>{column.title}</p>
          <button type="button" onClick={toggleDeleteColumnModalWindow}>
            <img src={binImage} alt="bin" />
          </button>
        </div>
        <p>{boardId}</p>
        <div className={styles.filterContainer}>
          <ul className={styles.boardContainer}>
            {tasks.map((elem) => (
              <li>
                <p>{elem.title}</p>
                <button
                  type="button"
                  className={styles.deleteBtn}
                  onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
                    setDeleteId(elem._id);
                    toggleDeleteTaskModalWindow(event);
                  }}
                >
                  &#10006;
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button type="button" className={styles.addItem} onClick={toggleModalWindow}>
          {modalWindow && (
            <ModalWindow
              type="createtask"
              toggleModalWindow={toggleModalWindow}
              createTask={createTask}
            />
          )}
          + Add task
        </button>
      </div>
    </>
  );
};

export default Column;
