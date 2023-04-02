import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

export default function Movie({
  movie,
  addToRented,
  rentOrUnRent,
  addMovieToCategory,
}) {
  return (
    <div className="catalog-item">
      <div className="catalog-item-image-container">
        <Link to={`/catalog/${movie.id}`}>
          <img src={movie.img} alt={movie.title} />
        </Link>
      </div>
      <div className="catalog-item-info">
        <h2>{movie.title}</h2>
        {rentOrUnRent === "RENT" ? (
          <button onClick={() => addToRented(movie.id)}>{rentOrUnRent}</button>
        ) : (
          <button onClick={() => addMovieToCategory(movie.id)}>
            {rentOrUnRent}
          </button>
        )}
      </div>
    </div>
  );
}
