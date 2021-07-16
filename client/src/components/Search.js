import React from 'react';
import SearchBox from './SearchBox';
import './css/Button.css';

const Search = () => {
  return (
    <div>
      <form action='/api/post' method='post'>
        <SearchBox />
        <div className="button">
        <button type="submit"><i className="logo fas fa-search"></i></button>
        </div>
      </form>
    </div>
  );
}

export default Search;
