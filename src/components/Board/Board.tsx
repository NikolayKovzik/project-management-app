import React, { ReactElement, useState } from 'react';
import { ColumnBody, TaskCreateBody } from 'core/api/models';

import ModalWindow from 'components/ModalWindow/ModalWindow';

import styles from './Board.module.scss';

type Props = {
  boardId: string;
  board: ColumnBody;
};

const Board = ({ boardId, board }: Props): ReactElement => {
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

  const toggleModalWindow = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    event.preventDefault();
    setModalWindow(!modalWindow);
  };

  const createTask = (task: TaskCreateBody): void => {
    setTasks((prevState) => {
      return [...prevState, task];
    });
    setModalWindow(!modalWindow);
  };

  return (
    <div className={styles.board}>
      <p className={styles.boardTitle}>{board.title}</p>
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
  );
};

export default Board;
