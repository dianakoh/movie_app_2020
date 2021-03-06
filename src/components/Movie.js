import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres, rating, back }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres,
          rating,
          back,
        },
      }}
      className="link"
    >
      <div className="movie">
        <div className="info__section">
          <div className="movie__header">
            <img className="locandina" src={poster} alt={title} title={title} />
            <h1 className="title">{title}</h1>
            <h4 className="year">{year}</h4>
            <ul className="genres">
              {genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
          </div>
          <div className="movie__desc">
            <p className="summary">{summary.slice(0, 140)}...</p>
          </div>
        </div>
        {/*<div
          className="blur_back"
          style={{
            background: `url(${poster})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>*/}
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  back: PropTypes.string.isRequired,
};

export default Movie;
