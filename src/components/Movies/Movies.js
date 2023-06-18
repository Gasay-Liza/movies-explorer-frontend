import React, { useState } from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import testMoviesCards from "../../utils/utils";
import Footer from "../Footer/Footer";


function Movies(props) {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList movies={testMoviesCards} />
    </section>
  );
}

export default Movies;
