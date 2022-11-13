import React, { ReactElement } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import signImage from '../../assets/images/authorization.png';

import styles from './SignInPage.module.scss';

function LoginPage(): ReactElement {
  const { state } = useLocation();
  const navigate = useNavigate();

  const prevLocation = state?.from || '';
  function handleSuccessSubmit(): void {
    // TODO redux global state isAuth = thue
    if (state.from) {
      navigate(state.from);
    } else navigate('/');
  }
  return (
    <section className={styles.signin}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.mainContainer}>
            <div className={styles.inputData}>
              <p className={styles.title}>Log in your account</p>
              <input type="text" placeholder="login" />
              <input type="text" placeholder="password" />
              <div className={styles.btnsContainer}>
                <button type="button" className={styles.signUpBtn}>
                  Log in
                </button>
                <Link className={styles.helpBtn} to="/signup">
                  I haven`t account
                </Link>
              </div>
            </div>
            <div className={styles.imageBackground}>
              <img src={signImage} alt="sign-up" />
              <div className={styles.imageTitleContainer}>
                <p className={styles.imageTitle}>Hello,</p>
                <p className={styles.imageTitle}>Welcome back!</p>
              </div>
              <p className={styles.imageSubTitle}>Log in your account on our platform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
