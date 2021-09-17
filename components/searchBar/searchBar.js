import React, { useEffect } from 'react';
import SearchIcon from 'public/Images/search-icon.svg';

const SearchBar = (props) => {
  useEffect(() => {
    const form = document.querySelector('.search__form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
    return () => {
      form.removeEventListener('submit', (e) => {
        e.preventDefault();
      });
    };
  }, []);

  return (
    <form className="search__form" autoComplete="off" role="search">
      <div role="search" className="indicator-search-container">
        <label className="search__label" htmlFor="search">
          <span className="search__text screen-reader-text">
            Search Indicators
          </span>
          <input
            id="search"
            type="search"
            autoComplete="off"
            inputMode="search"
            className="indicator-search-input"
            placeholder="Search Indicators"
            onChange={props.handleChangeSearchTerm}
          />
          <SearchIcon
            fill="#0D1018"
            fillOpacity={0.4}
            className="search-icon"
          />
        </label>
      </div>
    </form>
    // <div className="indicator-search-container mb-2">
    //   <input
    //     className="indicator-search-input"
    //     placeholder="Search Indicators"
    //     onChange={props.handleChangeSearchTerm}
    //   />
    //   <SearchIcon fill="#0D1018" fillOpacity={0.4} className="search-icon" />
    // </div>
  );
};

export default SearchBar;
