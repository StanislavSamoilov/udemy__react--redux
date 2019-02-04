import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
  return (
    <dir className="search-box">
      <input
        className="search-box__input"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </dir>
  );
};

export default SearchBox;
