import React, { ReactElement } from 'react';

import './SearchBar.scss';

function SearchBar(): ReactElement {
  return (
    <div className="search">
      <input className="search__input" type="search" />
    </div>
  );
}

export default SearchBar;
