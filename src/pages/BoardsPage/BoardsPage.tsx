import React, { ReactElement } from 'react';

import styles from './BoardsPage.module.scss';

function BoardsPage(): ReactElement {
  return (
    <section className={styles.boards}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.mainContainer}>
            <div className={styles.board}>
              <p className={styles.boardTitleDo}>To do</p>
              <ul className={styles.boardContainer}>
                <li>
                  <p>Task 1</p>
                  <button type="button" className={styles.deleteBtn}>
                    &#10006;
                  </button>
                </li>
                <li>
                  <p>Task 5</p>
                  <button type="button" className={styles.deleteBtn}>
                    &#10006;
                  </button>
                </li>
              </ul>
            </div>
            <div className={styles.board}>
              <p className={styles.boardTitlePro}>In progress</p>
              <ul className={styles.boardContainer}>
                <li>
                  <p>Task 4</p>
                  <button type="button" className={styles.deleteBtn}>
                    &#10006;
                  </button>
                </li>
                <li>
                  <p>Task 6</p>
                  <button type="button" className={styles.deleteBtn}>
                    &#10006;
                  </button>
                </li>
                <li>
                  <p>Task 2</p>
                  <button type="button" className={styles.deleteBtn}>
                    &#10006;
                  </button>
                </li>
              </ul>
            </div>
            <div className={styles.board}>
              <p className={styles.boardTitleDone}>Done</p>
              <ul className={styles.boardContainer}>
                <li>
                  <p>Task 3</p>
                  <button type="button" className={styles.deleteBtn}>
                    &#10006;
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BoardsPage;
