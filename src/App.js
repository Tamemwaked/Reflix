import React, { useState } from "react";
import "./App.css";
import { CATALOG, USERS } from "./Constants";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Catalog from "./components/Catalog";
import MovieDetail from "./components/MovieDetail";
import Navbar from "./components/Navbar";
function App() {
  const [catalog, setcatalog] = useState(CATALOG);
  const [users, setuser] = useState(USERS);
  const [rented, setRented] = useState([]);
  const [budgit, setbudgit] = useState(10);
  const getMovieById = (id) => {
    return (
      catalog.find((movie) => movie.id === parseInt(id)) ||
      rented.find((movie) => movie.id === parseInt(id))
    );
  };

  const addToRented = (id) => {
    const movie = catalog.find((movie) => movie.id === parseInt(id));
    let newRented = [...rented];
    let checkIfExists = newRented.find((rent) => rent.id === movie.id);
    if (checkIfExists === undefined) {
      newRented.push(movie);
      setRented(newRented);
      deleteMovieFromCategoryById(movie.id);
    }
    let newBudgit = budgit;
    setbudgit(newBudgit - 3);
  };

  const deleteMovieFromCategoryById = (id) => {
    let newCatalog = [...catalog];
    let indexToDelete = newCatalog.findIndex(
      (movie) => movie.id === parseInt(id)
    );
    if (indexToDelete > -1) {
      newCatalog.splice(indexToDelete, 1);
      setcatalog(newCatalog);
    }
  };

  const addMovieToCategory = (id) => {
    const movie = rented.find((movie) => movie.id === parseInt(id));
    let newCatalog = [...catalog];
    if (movie) {
      newCatalog.push(movie);
      setcatalog(newCatalog);
      deleteMovieFromRented(movie.id);
    }
    let newBudgit = budgit;
    setbudgit(newBudgit + 3);
  };

  const deleteMovieFromRented = (id) => {
    let newRented = [...rented];
    let indexToDelete = newRented.findIndex(
      (movie) => movie.id === parseInt(id)
    );
    if (indexToDelete > -1) {
      newRented.splice(indexToDelete, 1);
      setRented(newRented);
    }
  };

  return (
    <Router>
      <div className="App"> </div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing users={users} />} />
        <Route
          path="/catalog"
          element={
            <Catalog
              catalog={catalog}
              users={users}
              addToRented={addToRented}
              addMovieToCategory={addMovieToCategory}
              rented={rented}
              budgit={budgit}
            />
          }
        />
        <Route
          path="/catalog/:movieId"
          element={
            <MovieDetail catalog={catalog} getMovieById={getMovieById} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
