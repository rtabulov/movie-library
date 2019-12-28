import React from 'react';
import PropTypes from 'prop-types';

import noimage from '../assets/img/noimage.png';

const Movie = ({ title, desc, poster }) => {
  return (
    <div className="movie">
      <img src={poster === 'N/A' ? noimage : poster} alt="Title poster" />
      <h2 className="movie__title">
        {title}
        <br />
        <span className="movie__desc">{desc}</span>
      </h2>
    </div>
  );
};

Movie.defaultProps = {
  desc: '',
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  poster: PropTypes.string.isRequired,
};

export default Movie;
