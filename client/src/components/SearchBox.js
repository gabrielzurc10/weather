import React from 'react';
import './css/SearchBox.css';

const SearchBox = () => {
  return(
    <div className="search">
      <input type="text" name="search" autoComplete="off" placeholder="Search..."/>
    </div>
  );
}

export default SearchBox;
