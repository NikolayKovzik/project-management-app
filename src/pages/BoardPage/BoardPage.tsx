/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { ReactElement, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import ColumnsApi from 'core/api/ColumnsApi';
import { Column, ColumnBody, ColumnPostBody } from 'core/api/models';

import ColumnItem from 'components/ColumnItem/ColumnItem';
import ModalWindow from 'components/ModalWindow/ModalWindow';

import styles from './BoardPage.module.scss';

const BoardPage = (): ReactElement => {
  const [modalWindow, setModalWindow] = useState(false);
  const params = useParams();
  const [columns, setColumns] = useState<Column[]>([]);

  const toggleModalWindow = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    event.preventDefault();
    setModalWindow(!modalWindow);
  };

  useEffect(() => {
    const getAllColumns = async (): Promise<void> => {
      const getColumns = await ColumnsApi.getAllColumnsByBoardId(String(params.id));
      setColumns(getColumns.data);
    };
    getAllColumns();
  }, []);

  const createColumn = (column: Column): void => {
    console.log(column);
    // ColumnsApi.createColumn('1', column);
    // navigate('/');
    setColumns((prevState) => {
      return [...prevState, column];
    });
    setModalWindow(!modalWindow);
  };

  const deleteColumn = (id: string): void => {
    setColumns(columns.filter((column) => column.boardId !== id));
  };

  return (
    <section className={styles.boards}>
      <div className="container">
        <div className={styles.container}>
          <NavLink className={styles.backButton} to="/main">
            <button type="button">&#5130;</button>
          </NavLink>
          <div className={styles.mainContainer}>
            {columns.map((column: ColumnPostBody) => (
              <ColumnItem boardId={String(params.id)} column={column} deleteColumn={deleteColumn} />
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
