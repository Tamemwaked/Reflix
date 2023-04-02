import React from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";
export default function RentedMovies({
  RentedMovies,
  search,
  addMovieToCategory,
}) {
  return (
    <span>
      {search === ""
        ? RentedMovies.map((c) => (
            <Movie
              movie={c}
              rentOrUnRent="UN-RENT"
              addMovieToCategory={addMovieToCategory}
            />
          ))
        : RentedMovies.map((c) =>
            c.title.toLowerCase().includes(search) ? (
              <Movie
                movie={c}
                addMovieToCategory={addMovieToCategory}
                rentOrUnRent="UN-RENT"
              />
            ) : null
          )}
    </span>
  );
}
