import React, { ReactElement } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';
import { sendLoginRequest } from 'store/authSlice';

import signImage from '../../assets/images/authorization.png';

import styles from './SignInPage.module.scss';

const LoginPage = (): ReactElement => {
  // const { state } = useLocation();
  const navState = useLocation().state;
  const navigate = useNavigate();
  //* REDUX using
  const { message, loginStatus } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  // ***
  const prevLocation = navState?.from || '';

  const submit = (): void => {
    //*  REDUX THUNK using
    dispatch(sendLoginRequest({ login: '123123', password: '123123' }));
    // ***
  };

  const handleSuccessSubmit = (): void => {
    // TODO redux global state isAuth = thue
    if (navState.from) {
      navigate(navState.from);
    } else navigate('/');
  };

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
                {/* Redux using */}
                {loginStatus === 'failed' && <p>{message}</p>}
                {loginStatus === 'pending' && <p>Loading...</p>}
                {/* *** */}
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
};

export default LoginPage;
