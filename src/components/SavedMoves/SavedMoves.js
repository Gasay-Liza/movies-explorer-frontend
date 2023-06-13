import React, { useState } from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import testMoviesCards from "../../utils/utils";
import Footer from "../Footer/Footer";

function SavedMovies(props) {
  const [cards, setCards] = React.useState([]);

  return (
    <section className="movies">
      <Header isAuthorized={true} />
      <SearchForm />
      <MoviesCardList movies={testMoviesCards} />
      <Footer />
    </section>
  );
}

export default SavedMovies;
