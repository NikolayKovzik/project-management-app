import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import signImage from '../../assets/images/registration.png';

import styles from './SignUpPage.module.scss';

const SignUpPage = (): ReactElement => {
  return (
    <section className={styles.signup}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.mainContainer}>
            <div className={styles.inputData}>
              <p className={styles.title}>Register your account</p>
              <input type="text" placeholder="login" />
              <input type="text" placeholder="password" />
              <Link to="singin" placeholder="i have acc" />
              <button type="button" className={styles.signUpBtn}>
                Sign up
              </button>
            </div>
            <div className={styles.imageBackground}>
              <img src={signImage} alt="sign-up" />
              <div className={styles.imageTitleContainer}>
                <p className={styles.imageTitle}>Hello,</p>
                <p className={styles.imageTitle}>Welcome back!</p>
              </div>
              <p className={styles.imageSubTitle}>Register your account on our platform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
