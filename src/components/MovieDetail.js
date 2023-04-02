import React from "react";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";

export default function MovieDetail(props) {
  let { movieId } = useParams();
  const movie = props.getMovieById(movieId);

  return (
    <div className="movie-detail">
      {movie ? (
        <div>
          <h1 className="movie-title">
            {movie.title} ({movie.year})
          </h1>
          <img className="movie-image" src={movie.img} alt={movie.title} />
          <p className="movie-description">{movie.descrShort}</p>
        </div>
      ) : null}
    </div>
  );
}
