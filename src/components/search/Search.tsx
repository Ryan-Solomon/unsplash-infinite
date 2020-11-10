import React from 'react';
import { useAppContext } from '../../context/appContext';
import './Search.styles.css';

const Search = () => {
  const { setSearchTerm } = useAppContext();

  return (
    <section className='search-container'>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        type='text'
        placeholder='Search'
      />
      <div className='line'></div>
    </section>
  );
};

export default Search;
