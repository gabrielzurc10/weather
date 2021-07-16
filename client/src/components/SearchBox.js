import React from 'react';
import './css/SearchBox.css';

const SearchBox = () => {
  return(
    <div className="search">
      <input type="text" name="search" placeholder="Search a Country, State, or City..."/>
    </div>
  );
}

export default SearchBox;
