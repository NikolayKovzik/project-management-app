/* eslint-disable react-hooks/rules-of-hooks */
import React, { ReactElement, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { ColumnBody } from 'core/api/models';

import Board from 'components/Board/Board';
import ModalWindow from 'components/ModalWindow/ModalWindow';

import styles from './BoardPage.module.scss';

const BoardPage = (): ReactElement => {
  const [modalWindow, setModalWindow] = useState(false);
  const [boards, setBoards] = useState([1]);
  const params = useParams();

  const toggleModalWindow = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    event.preventDefault();
    setModalWindow(!modalWindow);
  };

  const createColumn = (column: ColumnBody): void => {
    console.log(column);
    // ColumnsApi.createColumn('1', column);
    // navigate('/');
    setBoards((prevState) => {
      return [...prevState, 1];
    });
    setModalWindow(!modalWindow);
  };

  return (
    <section className={styles.boards}>
      <div className="container">
        <div className={styles.container}>
          <NavLink className={styles.backButton} to="/main">
            <button type="button">&#5130;</button>
          </NavLink>
          <div className={styles.mainContainer}>
            {boards.map(() => (
              <Board boardId={String(params.id)} />
            ))}
            <div className={styles.addButton}>
              <div className={styles.buttonAddContainer}>
                <button
                  className={styles.addColumnButton}
                  type="button"
                  onClick={toggleModalWindow}
                >
                  {modalWindow && (
                    <ModalWindow
                      type="createcolumn"
                      toggleModalWindow={toggleModalWindow}
                      createColumn={createColumn}
                    />
                  )}
                  + Add column
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardPage;
