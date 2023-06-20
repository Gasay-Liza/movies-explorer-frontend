import React, { useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import MoreFilmsButton from "../MoreFilmsButton/MoreFilmsButton";

function Movies({ moviesCards }) {
  console.log(moviesCards);
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList moviesCards={moviesCards} />
      <MoreFilmsButton />
    </section>
  );
}

export default Movies;
