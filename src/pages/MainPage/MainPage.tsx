/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-underscore-dangle */
import React, { ReactElement, useEffect, useState } from 'react';
import BoardsApi from 'core/api/BoardsApi';
import { Board } from 'core/api/models';

import BoardItem from 'components/BoardItem/BoardItem';
import Loader from 'components/Loader/Loader';

import styles from './MainPage.module.scss';

const MainPage = (): ReactElement => {
  const [data, setData] = useState<Board[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getAllBoards = async (): Promise<void> => {
      const result = await BoardsApi.getAllBoards();
      setData(result.data);
      setLoading(false);
    };
    getAllBoards();
  }, []);

  const deleteCurrentBoard = (id: string): void => {
    BoardsApi.deleteBoard(id);
    setData(data.filter((board) => board._id !== id));
  };

  return (
    <>
      {loading && <Loader />}
      <section className={styles.home}>
        <div className="container">
          <div className={styles.container}>
            <div className={styles.mainContainer}>
              {data.map((board: Board) => (
                <BoardItem boardInfo={board} deleteCurrentBoard={deleteCurrentBoard} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
