import React, { ChangeEvent } from 'react';
import { useAppContext } from '../../context/appContext';
import './Search.styles.css';

const Search = () => {
  const { setSearchTerm } = useAppContext();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    let id;
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      setSearchTerm(e.target.value);
    }, 1000);
  };

  return (
    <section className='search-container'>
      <input
        onChange={(e) => handleSearch(e)}
        type='text'
        placeholder='Search'
      />
      <div className='line'></div>
    </section>
  );
};

export default Search;
