import React, { useState, useEffect } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreFilmsButton from "../MoreFilmsButton/MoreFilmsButton";

import beatfilmMoviesApi from "../../utils/MoviesApi";

function Movies() {
  const [allMovies, setAllMovies] = useState([]); // Данные всех фильмов с БД beatfilmMovies
  const [movies, setMovies] = useState([]); // Показываемые фильмы на странице
  const [searchName, setSearchName] = useState(""); // Название фильма в поисковике
  const [isShortFilm, setIsShortFilm] = useState(false); // Короткометражки
  const savedMoviesPerPage = JSON.parse(localStorage.getItem("moviesPerPage"));
  const savedSearchedMovie = localStorage.getItem("searchName");

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
    // При перезагрузке страницы отображаются фильмы localStorage(moviesPerPage)
    setMovies(savedMoviesPerPage);
    // И последнее название в поиске
    setSearchName(savedSearchedMovie);
  }, []);

  useEffect(() => {
    // При изменении фильмов данные перезаписывабтся в localStorage
    localStorage.setItem("moviesPerPage", JSON.stringify(movies));
    localStorage.setItem("searchName", searchName);
    localStorage.setItem("stateCheckbox", isShortFilm);
  }, [movies]);

  function handleSearch(e) {
    // Функция при нажатии сабмита поиска
    e.preventDefault();
    filterBySearch(e); // Реализуем поиск по названию фильма

    // Результат поиска записываем в localStorage(moviesPerPage)
    console.log("movies", movies);
  }

  function filterBySearch(e) {
    let updatedList = [...allMovies]; // Сделаем копию списка фильмов
    updatedList = updatedList.filter((item) => {
      // Отфильтруем список на значение инпута
      console.log(item.nameRU.toLowerCase());
      return (
        item.nameRU.toLowerCase().includes(searchName.toLowerCase()) || // Проверка в RU имени
        item.nameEN.toLowerCase().includes(searchName.toLowerCase()) // Проверка в EN имени
      );
    });
    // Результаты поиска запишем в стейт
    return setMovies(updatedList);
  }

  // function filterByShort(e) {
  //   let updatedList = [...allMovies]; // Сделаем копию списка фильмов
  //   updatedList = updatedList.filter((item) => {
  //     // Отфильтруем список на значение инпута
  //     console.log(item.nameRU.toLowerCase());
  //     return (
  //       item.duretion.toLowerCase().includes(searchName.toLowerCase()) || // Проверка в RU имени
  //       item.nameEN.toLowerCase().includes(searchName.toLowerCase()) // Проверка в EN имени
  //     );
  //   });
  //   // Результаты поиска запишем в стейт
  //   return setMovies(updatedList);
  // }

  return (
    <section className="movies">
      <SearchForm
        isShortFilm={isShortFilm}
        setIsShortFilm={setIsShortFilm}
        onSubmit={handleSearch}
        searchName={searchName}
        setSearchName={setSearchName}
      />
      <MoviesCardList movies={movies} />
      <MoreFilmsButton />
    </section>
  );
}

export default Movies;
