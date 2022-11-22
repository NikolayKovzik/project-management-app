import React, { ReactElement } from 'react';

import ModalWindow from 'components/ModalWindow/ModalWindow';

import styles from './ProfilePage.module.scss';

const ProfilePage = (): ReactElement => {
  return (
    <section className={styles.profile}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.mainContainer}>
            <ModalWindow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
