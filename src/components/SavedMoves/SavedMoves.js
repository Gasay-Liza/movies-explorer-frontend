import React, { useState, useEffect, useCallback } from "react";
import "../Movies/Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import mainApi from "../../utils/mainApi";

function Movies({savedMovies, setSavedMovies, onCardDelete}) {
  const [renderMovies, setRenderMovies] = useState([]); // Показываемые фильмы на странице
  const [foundMovies, setFoundMovies] = useState(null); // Результат поиска фильмов
  const [searchName, setSearchName] = useState(''); // Название фильма в поисковике
  const [isShortFilms, setIsShortFilms] = useState(false); // Короткометражки
  const [isLoading, setIsLoading] = useState(false); // Загрузка
  const [isMoviesNotFound, setIsMoviesNotFound] = useState(false);
  const [isSearchError, setSearchError] = useState(false);
  
  
  const [isSaved, setIsSaved] = useState(false); // Сохранение карточки
  
  
// При клике на поиск фильма
function submitSearch(e){ 
  e.preventDefault();
  const filter = filterBySearch(isShortFilms);
  console.log('filter', filter)
  setFoundMovies(filter);
  if (filter.length !== 0) {
    setIsMoviesNotFound(false);
  } else {
    setIsMoviesNotFound(true);
    }
  console.log('foundMovies', foundMovies)
  console.log('moviesNotFound', isMoviesNotFound)
}

// При вводе в форму
function handleChangeMovieName(e) { 
  setSearchName(e.target.value);
}

// Колбэк переключения чекбокса короткометражек
const handleToggleCheckbox = useCallback(
  (isChecked) => {
    console.log(isChecked)
    setIsShortFilms(isChecked);
    const filter = filterBySearch(isChecked);
    setFoundMovies(filter);
    console.log('foundMovies', foundMovies)
  }, [isShortFilms, foundMovies]
);

// Фильтрация поиска по слову и чекбоксу
const filterBySearch = useCallback((isChecked) => { 
      let updatedList = [...savedMovies]; // Сделаем копию списка фильмов
      updatedList = updatedList.filter((movie) => { 
      return( (isChecked ?  movie.duration <= 40 : movie) && (
          movie.nameRU.toLowerCase().includes(searchName.toLowerCase()) || // Проверка в RU имени
          movie.nameEN.toLowerCase().includes(searchName.toLowerCase()) // Проверка в EN имени
      ))}
      )
      return updatedList
}, [savedMovies, searchName]);

  // При перезагрузке страницы загружаем данные с сервера
  useEffect(() => {
      setIsLoading(true);
      mainApi
      .getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies); // Сохраняем в стейт
        setRenderMovies(movies);
        console.log(movies)
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

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
      {isLoading ? (
        <div className='movies__container'> 
          <Preloader />
        </div> 
      ) : (
      <div className='movies__container'> 
        <MoviesCardList movies={renderMovies} isMoviesNotFound={isMoviesNotFound} isSearchError={isSearchError} onCardSave={onCardDelete}/>
        </div> 
      )}
    </section>
  );
}

export default Movies;
