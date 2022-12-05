import React, { ReactElement, useState } from 'react';

import ModalWindow from 'components/ModalWindow/ModalWindow';

import binImage from '../../assets/images/bin.png';
import profileImage from '../../assets/images/profile.png';

import styles from './ProfilePage.module.scss';

const ProfilePage = (): ReactElement => {
  const [modalWindow, setModalWindow] = useState(false);
  const [modalSaveWindow, setModalSaveWindow] = useState(false);

  const toggleModalWindow = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    setModalWindow(!modalWindow);
  };

  const toggleSaveModalWindow = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault();
    setModalSaveWindow(!modalSaveWindow);
  };

  const deleteProfile = (): void => {
    console.log('delete profile');
  };

  return (
    <section className={styles.profile}>
      {modalWindow && (
        <ModalWindow
          type="deleteprofile"
          toggleModalWindow={toggleModalWindow}
          deleteProfile={deleteProfile}
        />
      )}
      {modalSaveWindow && (
        <ModalWindow type="saveprofile" toggleModalWindow={toggleSaveModalWindow} />
      )}
      <div className="container">
        <div className={styles.container}>
          <div className={styles.mainContainer}>
            <div className={styles.profileForm}>
              <div className={styles.mainInfo}>
                <img src={profileImage} alt="profile" />
                <div className={styles.title}>
                  <div className={styles.divider} />
                  <p>Edit your profile</p>
                </div>
              </div>
              <ModalWindow type="profile" setModalSaveWindow={setModalSaveWindow} />
            </div>
            <div className={styles.deleteAccount}>
              <button type="button" onClick={toggleModalWindow}>
                <img src={binImage} alt="bin" />
                Delete my account
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
