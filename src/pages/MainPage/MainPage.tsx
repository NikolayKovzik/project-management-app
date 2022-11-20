/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-underscore-dangle */
import React, { ReactElement } from 'react';
import BoardsApi from 'core/api/BoardsApi';
import { Board } from 'core/api/models';

import BoardItem from 'components/BoardItem/BoardItem';

import styles from './MainPage.module.scss';

function MainPage(): ReactElement {
  const [data, setData] = React.useState<Board[]>([]);

  React.useEffect(() => {
    const getAllBoards = async (): Promise<void> => {
      const result = await BoardsApi.getAllBoards();
      setData(result.data);
    };
    getAllBoards();
  }, []);

  function deleteCurrentBoard(id: string): void {
    BoardsApi.deleteBoard(id);
    setData(data.filter((board) => board._id !== id));
  }

  return (
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
  );
}

export default MainPage;
