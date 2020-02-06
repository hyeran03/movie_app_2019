import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movies({
  id,
  release_date,
  title,
  overview,
  poster_path,
  popularity
}) {
  return (
    <div className="movie">
      <img
        src={"https://image.tmdb.org/t/p/w500" + poster_path}
        alt={title}
        title={title}
      />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{release_date}</h5>
        <p className="movie__generes">{popularity}</p>
        <p className="movie__summary">{overview.slice(0, 140)}</p>
      </div>
    </div>
  );
}

Movies.propTypes = {
  id: PropTypes.number.isRequired,
  release_date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired
};

export default Movies;
