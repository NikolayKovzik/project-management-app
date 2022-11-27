import React, { ReactElement, useState } from 'react';
import { ColumnPostBody, TaskCreateBody } from 'core/api/models';

import ModalWindow from 'components/ModalWindow/ModalWindow';

import binImage from '../../assets/images/bin.png';

import styles from './Column.module.scss';

type Props = {
  boardId: string;
  column: ColumnPostBody;
  deleteColumn: (id: string) => void;
};

const Column = ({ boardId, column, deleteColumn }: Props): ReactElement => {
  const [tasks, setTasks] = useState<TaskCreateBody[]>([
    {
      title: 'TaskOne',
      order: 0,
      description: 'Today',
      userId: '',
      users: [],
    },
  ]);
  const [modalWindow, setModalWindow] = useState(false);
  const [modalDeleteWindow, setModalDeleteWindow] = useState(false);

  const toggleModalWindow = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    event.preventDefault();
    setModalWindow(!modalWindow);
  };
  const toggleDeleteModalWindow = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    event.preventDefault();
    setModalDeleteWindow(!modalDeleteWindow);
  };

  const createTask = (task: TaskCreateBody): void => {
    setTasks((prevState) => {
      return [...prevState, task];
    });
    setModalWindow(!modalWindow);
  };

  const deleteCurrentColumn = (): void => {
    deleteColumn(column.boardId);
  };

  return (
    <>
      {modalDeleteWindow && (
        <ModalWindow
          type="deletecolumn"
          toggleModalWindow={toggleDeleteModalWindow}
          deleteCurrentColumn={deleteCurrentColumn}
        />
      )}
      <div className={styles.board}>
        <div className={styles.boardTitle}>
          <p>{column.title}</p>
          <button type="button" onClick={toggleDeleteModalWindow}>
            <img src={binImage} alt="bin" />
          </button>
        </div>
        <p>{boardId}</p>
        <div className={styles.filterContainer}>
          <ul className={styles.boardContainer}>
            {tasks.map((elem) => (
              <li>
                <p>{elem.title}</p>
                <button type="button" className={styles.deleteBtn}>
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
