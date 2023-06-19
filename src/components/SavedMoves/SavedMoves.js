import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import testMoviesCards from "../../utils/utils";

function SavedMovies(props) {

  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList movies={testMoviesCards} />
    </section>
  );
}

export default SavedMovies;
