import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Searchbar.module.css';

function Searchbar({ onSubmit, onChangeQuery }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);

  const handleChange = e => {
    const curQuery = e.currentTarget.value;
    if (curQuery === '') {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      onChangeQuery(true);
    }
    setSearchQuery(curQuery);
  };

  const handleSubmit = e => {
    //console.log('submit btn pressed');
    e.preventDefault();
    const normalizedSearchQuery = searchQuery.trim();

    if (normalizedSearchQuery.length !== 0) {
      onSubmit(normalizedSearchQuery);
    }
    setBtnDisabled(true);
  };

  return (
    <header className={styles.Searchbar}>
      <form className="SearchForm" onSubmit={handleSubmit}>
        {btnDisabled ? (
          <button
            type="submit"
            disabled
            className={styles.SearchForm__button_disabled}
          >
            <span>Search</span>
          </button>
        ) : (
          <button type="submit" className={styles.SearchForm__button}>
            <span>Search</span>
          </button>
        )}

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search a movie"
          value={searchQuery}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChangeQuery: PropTypes.func.isRequired,
};

export default Searchbar;
