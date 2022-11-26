/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { ReactElement, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import ModalWindow from 'components/ModalWindow/ModalWindow';

import languageImage from '../../assets/images/language.png';
import logo from '../../assets/images/logo.png';
import signInImg from '../../assets/images/signIn.png';
import signOutImg from '../../assets/images/signOut.png';
import signUpImg from '../../assets/images/signUp.png';

import { SetActiveCallback, SetActiveCallbackProps } from './Models';

import styles from './Header.module.scss';

const setActive: SetActiveCallback = (props: SetActiveCallbackProps): string =>
  props.isActive ? 'active' : 'inactive';

const Header = (): ReactElement => {
  const [auth, setAuth] = useState(true);

  const [modalWindow, setModalWindow] = useState(false);
  const toggleModalWindow = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    event.preventDefault();
    setModalWindow(!modalWindow);
  };

  const [navbar, setNavbar] = useState(false);

  const changeBackground = (): void => {
    if (window.scrollY >= 50) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change Logo
    window.addEventListener('scroll', changeBackground);
  });

  return (
    <header className={navbar ? styles.header : styles.headerActive}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.logo}>
            <NavLink to="/" className={setActive as SetActiveCallback} end>
              <img src={logo} alt="project-manager-logp" />
            </NavLink>
          </div>
          <ul className={styles.menu}>
            {auth && (
              <li onClick={toggleModalWindow}>
                <NavLink to="/" className={setActive as SetActiveCallback} end>
                  + New board
                  {modalWindow && (
                    <ModalWindow type="create" toggleModalWindow={toggleModalWindow} />
                  )}
                </NavLink>
              </li>
            )}
            {auth && (
              <li>
                <NavLink to="/profile" className={setActive as SetActiveCallback}>
                  Edit profile
                </NavLink>
              </li>
            )}
            {auth && (
              <li>
                <NavLink to="/main" className={setActive as SetActiveCallback}>
                  Main page
                </NavLink>
              </li>
            )}

            <li className={styles.box}>
              <img src={languageImage} alt="language" />
              <select>
                <option>En</option>
                <option>Ru</option>
              </select>
            </li>

            {auth && (
              <li className={styles.itemSignOut}>
                <NavLink to="/" className={setActive as SetActiveCallback}>
                  <img src={signOutImg} alt="sign-out" />
                  Sign out
                </NavLink>
              </li>
            )}

            {!auth && (
              <li className={styles.itemSignIn}>
                <NavLink to="/signin" className={setActive as SetActiveCallback}>
                  <img src={signInImg} alt="sign-in" />
                  Sign In
                </NavLink>
              </li>
            )}

            {!auth && (
              <li className={styles.itemSignUp}>
                <NavLink to="/signup" className={setActive as SetActiveCallback}>
                  <img src={signUpImg} alt="sign-up" />
                  Sign Up
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
