import React, { useState } from "react";

import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import testMoviesCards from "../../utils/utils";
import Footer from "../Footer/Footer";


function Movies(props) {
  const [cards, setCards] = React.useState([]);



  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList movies={testMoviesCards} />
      {/* <Footer /> */}
    </section>
  );
}

export default Movies;
