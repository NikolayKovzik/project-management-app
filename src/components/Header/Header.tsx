import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import languageImage from '../../assets/images/language.png';
import logo from '../../assets/images/logo.png';
import signInImg from '../../assets/images/signIn.png';
import signUpImg from '../../assets/images/signUp.png';

import { SetActiveCallback, SetActiveCallbackProps } from './Models';

import styles from './Header.module.scss';

const setActive: SetActiveCallback = (props: SetActiveCallbackProps): string =>
  props.isActive ? 'active' : 'inactive';

function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.logo}>
            <NavLink to="/" className={setActive as SetActiveCallback} end>
              <img src={logo} alt="project-manager-logp" />
            </NavLink>
          </div>
          <ul className={styles.menu}>
            <li>
              <NavLink to="/boards" className={setActive as SetActiveCallback}>
                Boards
              </NavLink>
            </li>
            <li className={styles.box}>
              <img src={languageImage} alt="language" />
              <select>
                <option>En</option>
                <option>Ru</option>
              </select>
            </li>
            <li className={styles.itemSignIn}>
              <NavLink to="/signin" className={setActive as SetActiveCallback}>
                <img src={signInImg} alt="sign-in" />
                Sign In
              </NavLink>
            </li>
            <li className={styles.itemSignUp}>
              <NavLink to="/signup" className={setActive as SetActiveCallback}>
                <img src={signUpImg} alt="sign-up" />
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
