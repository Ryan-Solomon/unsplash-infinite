import React from 'react';
import './Search.styles.css';

const Search = () => {
  return (
    <section className='search-container'>
      <input type='text' placeholder='Search' />
      <div className='line'></div>
    </section>
  );
};

export default Search;
