import React, { useState, useEffect } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreFilmsButton from "../MoreFilmsButton/MoreFilmsButton";

import MoviesApi from "../../utils/MoviesApi";


function Movies() {
  const [movies, setMovies] = useState([])

  useEffect(() => {

    // Сохраняем фильмы в localStorage
    localStorage.setItem("movies", movies);
  }, [movies]);
  
  function handleSearch(e) {
    e.preventDefault();
    
    MoviesApi.getInitialMovies()
      .then((movies) => {
        setMovies(movies);
        console.log(movies);
      })
      .catch((err) => {
        console.log(err);
      });
}
  
  return (
    <section className="movies">
      <SearchForm onSubmit={handleSearch} />
      <MoviesCardList movies={movies} />
      <MoreFilmsButton />
    </section>
  );
}

export default Movies;
