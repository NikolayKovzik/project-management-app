import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import { SetActiveCallback, SetActiveCallbackProps } from './Models';

import styles from './Header.module.scss';

const setActive: SetActiveCallback = (props: SetActiveCallbackProps): string =>
  props.isActive ? 'active' : 'inactive';

function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.container}>
          <ul className={styles.menu}>
            <li>
              <NavLink to="/" className={setActive as SetActiveCallback} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/boards" className={setActive as SetActiveCallback}>
                Boards
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/signin" className={setActive as SetActiveCallback}>
                Sign In
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/signup" className={setActive as SetActiveCallback}>
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
