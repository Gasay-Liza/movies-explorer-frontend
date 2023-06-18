import React, { useState } from "react";

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import testMoviesCards from "../../utils/utils";
import MoreFilmsButton from "../MoreFilmsButton/MoreFilmsButton";

function Movies(props) {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList movies={testMoviesCards} />
      <MoreFilmsButton />
    </section>
  );
}

export default Movies;
