import React, { ReactElement } from 'react';
import { useAppDispatch, useAppSelector } from 'store';

import mainImage from '../../assets/images/kanaban.png';

import styles from './HomePage.module.scss';

function HomePage(): ReactElement {
  const todos = useAppSelector((state) => state.todos.list);
  const dispatch = useAppDispatch();
  return (
    <section className={styles.home}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.mainContainer}>
            <div className={styles.info}>
              <div className={styles.titleContainer}>
                <p className={styles.title}>Project Management System</p>
                <p>
                  If you want to find a convenient application in which it will be convenient to set
                  and complete tasks
                </p>
                <p>Then we are ready to present to your attention our application PMA</p>
                <p>
                  With this application, you can easily manage your project, be aware of all tasks
                  and control the progress of their implementation
                </p>
              </div>

              <div className={styles.imageContainer}>
                <img className={styles.mainImage} src={mainImage} alt="home-kanban" />
              </div>
            </div>
            <div>
              <button className={styles.startBtn} type="button">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
