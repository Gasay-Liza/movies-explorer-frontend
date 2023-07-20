import React, { useState, useEffect, useCallback } from "react";
import "../Movies/Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies({ savedMovies,  onCardDelete }) {
  const [renderMovies, setRenderMovies] = useState([]); // Показываемые фильмы на странице
  const [foundMovies, setFoundMovies] = useState(null); // Результат поиска фильмов
  const [searchName, setSearchName] = useState(""); // Название фильма в поисковике
  const [isShortFilms, setIsShortFilms] = useState(false); // Короткометражки
  const [isMoviesNotFound, setIsMoviesNotFound] = useState(false);
  const [isSearchError, setSearchError] = useState(false);

  // При клике на поиск фильма
  function submitSearch(e) {
    e.preventDefault();
    const filter = filterBySearch(isShortFilms);
    console.log("filter", filter);
    setFoundMovies(filter);
    if (searchName === ""){
      setSearchError("Нужно ввести ключевое слово");
    } else {
      setSearchError("");
    }
    if (filter.length !== 0) {
      setIsMoviesNotFound(false);
    } else {
      setIsMoviesNotFound(true);
    }
    console.log("foundMovies", foundMovies);
    console.log("moviesNotFound", isMoviesNotFound);
  }

  // При вводе в форму
  function handleChangeMovieName(e) {
    setSearchName(e.target.value);
  }

  // Колбэк переключения чекбокса короткометражек
  const handleToggleCheckbox = useCallback(
    (isChecked) => {
      console.log(isChecked);
      setIsShortFilms(isChecked);
      const filter = filterBySearch(isChecked);
      setFoundMovies(filter);
      if (filter.length !== 0) {
        setIsMoviesNotFound(false);
      } else {
        setIsMoviesNotFound(true);
      }
      console.log("foundMovies", foundMovies);
    },
    [isShortFilms, foundMovies]
  );

  // Фильтрация поиска по слову и чекбоксу
  const filterBySearch = useCallback(
    (isChecked) => {
      console.log('savedMovies', savedMovies)
      let updatedList = [...savedMovies]; // Сделаем копию списка фильмов
      updatedList = updatedList.filter((movie) => {
        return (
          (isChecked ? movie.duration <= 40 : movie) &&
          (movie.nameRU.toLowerCase().includes(searchName.toLowerCase()) || // Проверка в RU имени
            movie.nameEN.toLowerCase().includes(searchName.toLowerCase())) // Проверка в EN имени
        );
      });
      return updatedList;
    },
    [savedMovies, searchName]
  );


  useEffect(() => {
    if (foundMovies) {
      setRenderMovies(foundMovies);
    }
  }, [foundMovies]);

  useEffect(() => {
    if (savedMovies){
      const filter = filterBySearch(isShortFilms);
      setRenderMovies(filter);
    }
  }, [savedMovies]);

  return (
    <section className="movies">
      <SearchForm
        onSubmit={submitSearch}
        searchName={searchName}
        setSearchName={setSearchName}
        handleChangeMovieName={handleChangeMovieName}
        handleToggleCheckbox={handleToggleCheckbox}
        isShortFilms={isShortFilms}
        setIsShortFilms={setIsShortFilms}
        isSearchError={isSearchError}
      />
        <div className="movies__container">
          <MoviesCardList
            movies={renderMovies}
            savedMovies={savedMovies}
            isMoviesNotFound={isMoviesNotFound}
            onCardDelete={onCardDelete}
          />
        </div>
    </section>
  );
}

export default SavedMovies;
