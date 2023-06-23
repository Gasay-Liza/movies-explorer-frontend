import React, { useState, useEffect } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreFilmsButton from "../MoreFilmsButton/MoreFilmsButton";

import beatfilmMoviesApi from "../../utils/MoviesApi";


function Movies() {
  const [allMovies, setAllMovies] = useState([]); // все фильмы с БД beatfilmMovies
  const [movies, setMovies] = useState([]); // показываемые фильмы на странице
  const [queryName, setQueryName] = useState([]);
  // const allMovies = JSON.parse(localStorage.getItem("movies"));
  const moviesPerPage = JSON.parse(localStorage.getItem("moviesPerPage"));

  useEffect(() => {
    // Сохраняем фильмы из в beatfilmMovies в localStorage
    beatfilmMoviesApi
      .getInitialMovies()
      .then((movies) => {
        localStorage.setItem("allMovies", JSON.stringify(movies));
        setAllMovies(movies); // Сохраняем в стейт
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // При перезагрузке страницы отображаются фильмы localStorage moviesPerPage
    setMovies(moviesPerPage);
  }, []);

  function handleSearch(e) {
    // Функция при нажатии сабмита поиска
    e.preventDefault();
    filterBySearch(e); // Реализуем поиск по названию фильма

    // Результат поиска записываем в localStorage(moviesPerPage)
    console.log("movies", movies);
    localStorage.setItem("moviesPerPage", JSON.stringify(movies));
  }

  function filterBySearch(e) {
    let updatedList = [...allMovies]; // Сделаем копию списка фильмов
    updatedList = updatedList.filter((item) => {
      // Отфильтруем список на значение инпута
      console.log(item.nameRU.toLowerCase());
      return item.nameRU.toLowerCase().includes(queryName.toLowerCase());
    });
    // Результаты поиска запишем в стейт
    return setMovies(updatedList);
  }

  return (
    <section className="movies">
      <SearchForm
        onSubmit={handleSearch}
        queryMovie={queryName}
        setQueryMovie={setQueryName}
      />
      <MoviesCardList movies={movies} />
      <MoreFilmsButton />
    </section>
  );
}

export default Movies;
