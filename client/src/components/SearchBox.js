import React from 'react';
import './css/SearchBox.css';

const SearchBox = () => {
  return(
    <div className="search">
      <input type="text" name="search" autocomplete="off" placeholder="Search a location..."/>
    </div>
  );
}

export default SearchBox;
