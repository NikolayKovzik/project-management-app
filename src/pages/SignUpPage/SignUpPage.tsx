/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from 'store';

import Loader from 'components/Loader/Loader';

import signImage from '../../assets/images/registration.png';

import styles from './SignUpPage.module.scss';

const SignUpPage = (): ReactElement => {
  const navigate = useNavigate();
  const { message, loginStatus } = useAppSelector((state) => state.auth);
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
    console.log('register');
    navigate('/');
    // dispatch(sendLoginRequest({ login: 'Ilo7776', password: 'qwerty123' }));
  };

  return (
    <>
      {loginStatus === 'pending' && <Loader />}
      <section className={styles.signup}>
        <div className="container">
          <div className={styles.container}>
            <div className={styles.mainContainer}>
              <form className={styles.inputData} onSubmit={handleSubmit(onSubmit)}>
                <p className={styles.title}>Register your account</p>
                <div className={styles.inputContainer}>
                  <input
                    {...register('login', {
                      required: 'Required field',
                      minLength: {
                        value: 3,
                        message: 'Login should contain minimum 3 symbols',
                      },
                      maxLength: {
                        value: 15,
                        message: 'Login should contain maximum 15 symbols',
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
                        value: 5,
                        message: 'Password should contain minimum 5 symbols',
                      },
                      maxLength: {
                        value: 20,
                        message: 'Password should contain maximum 20 symbols',
                      },
                    })}
                    type="text"
                    placeholder="password"
                  />
                  {errors.password && <p>{errors.password.message}</p>}
                  {loginStatus === 'failed' && <p>Wrong login or password</p>}
                </div>
                <Link to="singin" placeholder="i have acc" />
                <button type="submit" className={styles.signUpBtn}>
                  Sign up
                </button>
              </form>
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
    </>
  );
};

export default SignUpPage;
