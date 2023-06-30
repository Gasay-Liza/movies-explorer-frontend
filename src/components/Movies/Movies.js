import React, { useState, useEffect, useCallback } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreFilmsButton from "../MoreFilmsButton/MoreFilmsButton";

import beatfilmMoviesApi from "../../utils/MoviesApi";

function Movies() {
  const [allMovies, setAllMovies] = useState([]); // Данные всех фильмов с БД beatfilmMovies
  const [renderMovies, setRenderMovies] = useState([]); // Показываемые фильмы на странице
  // const [foundMovies, setFoundMovies] = useState(JSON.parse(localStorage.getItem("moviesPerPage")) ?? []); // Результат поиска фильмов
  // const [searchName, setSearchName] = useState(localStorage.getItem('searchName') ?? ''); // Название фильма в поисковике
  // const [isShortFilms, setIsShortFilms] = useState(JSON.parse(localStorage.getItem('stateCheckbox')) ?? false); // Короткометражки
  // const [foundMovies, setFoundMovies] = useState([]); // Результат поиска фильмов
  const [searchName, setSearchName] = useState(''); // Название фильма в поисковике
  const [isShortFilms, setIsShortFilms] = useState(false); // Короткометражки
  const savedMoviesPerPage = JSON.parse(localStorage.getItem("moviesPerPage")) ?? [];
  const savedSearchName = localStorage.getItem("searchName") ?? '';
  const savedStateCheckbox = JSON.parse(localStorage.getItem("stateCheckbox")) ?? false;

// При клике на поиск фильма
function submitSearch(e){ 
  e.preventDefault();
  const filter = filterBySearch(isShortFilms);
  setRenderMovies(filter);
}

// При вводе в форму
function handleChangeMovieName(e) { 
  setSearchName(e.target.value);
}

// Колбэк переключения чекбокса короткометражек
const handleToggleCheckbox = useCallback(
  (isChecked) => {
    console.log()
    console.log(isChecked)
    setIsShortFilms(isChecked);
    const filter = filterBySearch(isChecked);
    setRenderMovies(filter);
  }, [isShortFilms, savedMoviesPerPage]
);

// Фильтрация поиска по слову и чекбоксу
const filterBySearch = useCallback((isChecked) => { 
      let updatedList = [...allMovies]; // Сделаем копию списка фильмов
      updatedList = updatedList.filter((movie) => { 
      return( (isChecked ?  movie.duration <= 40 : movie) && (
          movie.nameRU.toLowerCase().includes(searchName.toLowerCase()) || // Проверка в RU имени
          movie.nameEN.toLowerCase().includes(searchName.toLowerCase()) // Проверка в EN имени
      ))}
      )
      return updatedList
}, [allMovies, searchName]);


useEffect(() => {
    // Загружаем фильмы в beatfilmMovies в localStorage
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

  // useEffect(() => {
  //   setRenderMovies(foundMovies);
  // }, [foundMovies]);


  // При перезагрузке страницы отображаются c LocalStorage:
  useEffect(() => {
    //Фильмы на страницу
    setRenderMovies(savedMoviesPerPage);
    // Название фильма в поисковике
    setSearchName(savedSearchName)
    //Состояние чекбокса
    setIsShortFilms(savedStateCheckbox)
  }, []);

  // Сохраняю данные запроса, чекбокса, показываемых фильмов в localStorage
  useEffect(() => {
      localStorage.setItem('moviesPerPage', JSON.stringify(renderMovies)); // Сохраняем в LocalStorage
      localStorage.setItem('searchName', searchName);
      localStorage.setItem(
        'stateCheckbox',
        JSON.stringify(isShortFilms)
      );
  }, [searchName, isShortFilms, renderMovies]);
  


  return (
    <section className="movies">
      <SearchForm
        onSubmit={submitSearch}
        searchName = {searchName}
        setSearchName = {setSearchName}
        handleChangeMovieName = {handleChangeMovieName}
        handleToggleCheckbox = {handleToggleCheckbox}
        isShortFilms={isShortFilms}
        setIsShortFilms={setIsShortFilms}
      />
      <MoviesCardList movies={renderMovies} />
      <MoreFilmsButton />
    </section>
  );
}

export default Movies;
