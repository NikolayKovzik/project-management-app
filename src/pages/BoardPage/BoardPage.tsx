import React, { ReactElement, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ColumnsApi from 'core/api/ColumnsApi';
import { ColumnBody } from 'core/api/models';

import Board from 'components/Board/Board';
import ModalWindow from 'components/ModalWindow/ModalWindow';

import styles from './BoardPage.module.scss';

const BoardPage = (): ReactElement => {
  const navigate = useNavigate();
  const [modalWindow, setModalWindow] = useState(false);
  const [boards, setBoards] = useState([1]);
  const toggleModalWindow = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    event.preventDefault();
    setModalWindow(!modalWindow);
  };

  const createColumn = (column: ColumnBody): void => {
    ColumnsApi.createColumn('1', column);
    navigate('/');
    setBoards((prevState) => {
      return [...prevState, 1];
    });
  };

  return (
    <section className={styles.boards}>
      <div className="container">
        <div className={styles.container}>
          <NavLink className={styles.backButton} to="/main">
            <button type="button">&#5130;</button>
          </NavLink>
          <div className={styles.mainContainer}>
            {boards.map((elem) => (
              <Board />
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
