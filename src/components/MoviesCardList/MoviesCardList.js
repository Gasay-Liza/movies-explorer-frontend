import "./MoviesCardList.css";
import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({movies}) {
  return (
    <section className="movies-cards page__section">
      <ul className="movies-cards__list">
        {movies && movies.map((movie) => (
          <MoviesCard movie={movie} />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;

