/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';
import { sendLoginRequest } from 'store/authSlice';

import Loader from 'components/Loader/Loader';

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

  const handleSuccessSubmit = (): void => {
    // TODO redux global state isAuth = thue
    if (navState.from) {
      navigate(navState.from);
    } else navigate('/');
  };

  interface IFormInput {
    login: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput): void => {
    dispatch(sendLoginRequest({ login: data.login, password: data.password }));
    if (loginStatus === 'succeeded') {
      navigate('/');
    }
    // dispatch(sendLoginRequest({ login: 'Ilo7776', password: 'qwerty123' }));
  };

  return (
    <>
      {loginStatus === 'pending' && <Loader />}
      <section className={styles.signin}>
        <div className="container">
          <div className={styles.container}>
            <div className={styles.mainContainer}>
              <form className={styles.inputData} onSubmit={handleSubmit(onSubmit)}>
                <p className={styles.title}>Log in your account</p>
                <div className={styles.inputContainer}>
                  <input
                    {...register('login', {
                      required: 'Required field',
                      minLength: {
                        value: 4,
                        message: 'Login should contain minimum 3 symbols',
                      },
                    })}
                    type="text"
                    placeholder="login"
                  />
                  {errors.login && <p>{errors.login.message}</p>}
                  {loginStatus === 'failed' && <p>Wrong login or password</p>}
                </div>
                <div className={styles.inputContainer}>
                  <input
                    {...register('password', {
                      required: 'Required field',
                      minLength: {
                        value: 6,
                        message: 'Password should contain minimum 3 symbols',
                      },
                    })}
                    type="text"
                    placeholder="password"
                  />
                  {errors.password && <p>{errors.password.message}</p>}
                  {loginStatus === 'failed' && <p>Wrong login or password</p>}
                </div>
                <div className={styles.btnsContainer}>
                  <button type="submit" className={styles.signUpBtn}>
                    Log in
                  </button>
                  <Link className={styles.helpBtn} to="/signup">
                    I haven`t account
                  </Link>
                </div>
              </form>
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
    </>
  );
};

export default LoginPage;
