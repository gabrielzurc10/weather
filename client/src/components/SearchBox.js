import React from 'react';
import './css/SearchBox.css';

const SearchBox = () => {
  return(
    <div className="search">
      <input type="text" name="search" autocomplete="off" placeholder="City, State/Province, Country..."/>
    </div>
  );
}

export default SearchBox;
