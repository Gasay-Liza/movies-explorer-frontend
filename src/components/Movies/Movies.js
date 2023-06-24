import React, { useState, useEffect } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreFilmsButton from "../MoreFilmsButton/MoreFilmsButton";

import beatfilmMoviesApi from "../../utils/MoviesApi";

function Movies() {
  const [allMovies, setAllMovies] = useState([]); // Данные всех фильмов с БД beatfilmMovies
  const [movies, setMovies] = useState([]); // Показываемые фильмы на странице
  const [searchMovies, setSearchMovies] = useState([]); // Результат поиска фильмов
  const [searchName, setSearchName] = useState(""); // Название фильма в поисковике
  const [shortMovies, setShortMovies] = useState([]); // Результат поиска фильмов
  const [isShortFilm, setIsShortFilm] = useState(false); // Короткометражки
  const savedMoviesPerPage = JSON.parse(localStorage.getItem("moviesPerPage"));
  const savedSearchedMovie = localStorage.getItem("searchName");
  const savedStateCheckbox = localStorage.getItem("stateCheckbox");

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
    // Имя фильма е в поисковике
    setSearchName(savedSearchedMovie);
    // состояние чек-бокса
    setIsShortFilm(savedStateCheckbox);
  }, []);

  useEffect(() => {
    // При изменении фильмов данные перезаписываются в localStorage
    localStorage.setItem("moviesPerPage", JSON.stringify(movies));
    localStorage.setItem("searchName", searchName);
    // localStorage.setItem("stateCheckbox", isShortFilm);
  }, [movies]);

  useEffect(() => {
    localStorage.setItem("stateCheckbox", isShortFilm);
  }, [isShortFilm]);

  function handleSearch(e) {
    // Функция при нажатии сабмита поиска
    e.preventDefault();
    filterBySearch(e); // Реализуем поиск по названию фильма

    // Результат поиска записываем в localStorage(moviesPerPage)
    console.log("movies", movies);
  }

  function handleChangeCheckbox() {
    // Функция при нажатии сабмита поиска
    isShortFilm ? filterByShort() : isShortFilm && filterByShort(); // Реализуем поиск по названию фильма

    // Результат поиска записываем в localStorage(moviesPerPage)
    console.log("movies", movies);
  }

  function filterBySearch(e) {
    let updatedList = [...allMovies]; // Сделаем копию списка фильмов
    updatedList = updatedList.filter((item) => {
      return (
        item.nameRU.toLowerCase().includes(searchName.toLowerCase()) || // Проверка в RU имени
        item.nameEN.toLowerCase().includes(searchName.toLowerCase()) // Проверка в EN имени
      );
    });
    // Результаты поиска запишем в стейт
    // setSearchMovies(updatedList); // Запись в стейт 
    return setMovies(updatedList);
    
  }

  function filterByShort() {
    let updatedList = [...allMovies]; // Сделаем копию списка фильмов
    updatedList = updatedList.filter((item) => {
      // Отфильтруем список на значение инпута
      return (
        item.duretion <= 40 // Проверка
      );
    });
    // Результаты поиска запишем в стейт
    return setShortMovies(updatedList);
  }

  return (
    <section className="movies">
      <SearchForm
        isShortFilm={isShortFilm}
        setIsShortFilm={setIsShortFilm}
        onChangeCheckbox={handleChangeCheckbox}
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
