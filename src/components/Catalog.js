import React from "react";
import Movie from "./Movie";
import { useState } from "react";
import "./Catalog.css";
import RentedMovies from "./RentedMovies";

export default function Catalog(props) {
  const catalog = props.catalog;
  const rented = props.rented;

  const [search, setSearch] = useState("");
  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="catalog-container">
      <div className="budget">Budget:{props.budgit}</div>
      <div className="search-bar">
        <input
          id="search-input"
          onChange={updateSearch}
          value={search}
          placeholder="Search movies..."
        />
      </div>

      {rented.length > 0 ? (
        <div>
          <h1>rented</h1>
          <RentedMovies
            RentedMovies={rented}
            search={search}
            addMovieToCategory={props.addMovieToCategory}
          />
        </div>
      ) : null}

      <div className="movie-container">
        {search === ""
          ? catalog.map((c) => (
              <Movie
                movie={c}
                addToRented={props.addToRented}
                rentOrUnRent="RENT"
              />
            ))
          : catalog.map((c) =>
              c.title.toLowerCase().includes(search) ? (
                <Movie
                  movie={c}
                  addToRented={props.addToRented}
                  rentOrUnRent="RENT"
                />
              ) : null
            )}
      </div>
    </div>
  );
}
