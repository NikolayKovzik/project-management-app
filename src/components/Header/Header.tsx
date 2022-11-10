import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import SearchBar from 'components/SearchBar/SearchBar';

import { SetActiveCallback, SetActiveCallbackProps } from './Models';

import './Header.scss';

const setActive: SetActiveCallback = (props: SetActiveCallbackProps): string =>
  props.isActive ? 'menu__link--active' : 'menu__link';

function Header(): ReactElement {
  return (
    <header className="header">
      <SearchBar />
      <ul className="menu">
        <li className="menu__item">
          <NavLink to="/" className={setActive as SetActiveCallback} end>
            Home
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/boards" className={setActive as SetActiveCallback}>
            Boards
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/about" className={setActive as SetActiveCallback}>
            About
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
