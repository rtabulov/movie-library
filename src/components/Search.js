import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ onSubmit }) => {
  const [query, setQuery] = useState('spider-man');

  const onQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <nav className="blue-grey darken-4">
      <div className="nav-wrapper container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(query);
          }}
        >
          <div className="input-field">
            <input
              placeholder="Search for any movie or tv show"
              id="search"
              type="search"
              value={query}
              onChange={onQueryChange}
              onClick={() => setQuery('')}
              required
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
