import React, { useState, useEffect, useCallback } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreFilmsButton from "../MoreFilmsButton/MoreFilmsButton";
import Preloader from "../Preloader/Preloader";
import beatfilmMoviesApi from "../../utils/moviesApi";
import {
  DURATION_OF_SHORT_FILMS,
  WINDOW_SIZE_M,
  WINDOW_SIZE_S,
  NUMBER_OF_CARDS_XL,
  NUMBER_OF_CARDS_L,
  NUMBER_OF_CARDS_M,
  NUMBER_OF_CARDS_S,
  NUMBER_OF_CARDS_XS,
} from "../../utils/constans";
function Movies({ savedMovies, onCardSave, onCardDelete, setSavedMovies }) {
  const [allMovies, setAllMovies] = useState([]); // Данные всех фильмов с БД beatfilmMovies
  const [renderMovies, setRenderMovies] = useState([]); // Показываемые фильмы на странице
  const [foundMovies, setFoundMovies] = useState(null); // Результат поиска фильмов
  const [searchName, setSearchName] = useState(""); // Название фильма в поисковике
  const [isShortFilms, setIsShortFilms] = useState(false); // Короткометражки
  const [isLoading, setIsLoading] = useState(false); // Загрузка
  const [windowSize, setWindowSize] = useState(window.innerWidth); // Размер окна
  const [isMoviesNotFound, setIsMoviesNotFound] = useState(false);
  const [isSearchError, setSearchError] = useState(false);
  const [moreCards, setMoreCards] = useState(0); // Число карточек кнопки еще
  const [renderCards, setRenderCards] = useState(null); // Число карточек кнопки еще
  const savedFoundMovies = JSON.parse(localStorage.getItem("foundMovies"));
  const savedSearchName = localStorage.getItem("searchName") ?? "";
  const savedStateCheckbox =
    JSON.parse(localStorage.getItem("stateCheckbox")) ?? false;

  // При сабмите формы поиска фильма
  function submitSearch(e) {
    e.preventDefault();
    const filter = filterBySearch(isShortFilms);
    setFoundMovies(filter);
    if (searchName === "") {
      setSearchError("Нужно ввести ключевое слово");
    } else {
      setSearchError("");
    }
    if (filter.length !== 0) {
      setIsMoviesNotFound(false);
    } else {
      setIsMoviesNotFound(true);
    }
  }

  // При вводе в форму
  function handleChangeMovieName(e) {
    setSearchName(e.target.value);
  }

  // Колбэк переключения чекбокса короткометражек
  const handleToggleCheckbox = useCallback(
    (isChecked) => {
      setIsShortFilms(isChecked);
      const filter = filterBySearch(isChecked);
      setFoundMovies(filter);
      if (filter.length !== 0) {
        setIsMoviesNotFound(false);
      } else {
        setIsMoviesNotFound(true);
      }
    },
    [isShortFilms, foundMovies]
  );

  // Фильтрация поиска по слову и чекбоксу
  const filterBySearch = useCallback(
    (isChecked) => {
      let updatedList = [...allMovies]; // Сделаем копию списка фильмов
      updatedList = updatedList.filter((movie) => {
        return (
          (isChecked ? movie.duration <= DURATION_OF_SHORT_FILMS : movie) &&
          (movie.nameRU.toLowerCase().includes(searchName.toLowerCase()) || // Проверка в RU имени
            movie.nameEN.toLowerCase().includes(searchName.toLowerCase())) // Проверка в EN имени
        );
      });
      return updatedList;
    },
    [allMovies, searchName]
  );

  // Определяю количество карточек на странице в зависимости от ширины
  useEffect(() => {
    if (windowSize >= WINDOW_SIZE_M) {
      setRenderCards(NUMBER_OF_CARDS_XL);
      setMoreCards(NUMBER_OF_CARDS_S);
    } else if (windowSize < WINDOW_SIZE_M && windowSize > WINDOW_SIZE_S) {
      setRenderCards(NUMBER_OF_CARDS_L);
      setMoreCards(NUMBER_OF_CARDS_XS);
    } else if (windowSize <= WINDOW_SIZE_S) {
      setRenderCards(NUMBER_OF_CARDS_M);
      setMoreCards(NUMBER_OF_CARDS_XS);
    }
  }, [windowSize]);

  // При перезагрузке страницы отображаются c LocalStorage:
  useEffect(() => {
    // Если данные были сохранены в LocalStorage
    //Фильмы на страницу
    // Название фильма в поисковике
    setSearchName(savedSearchName);
    //Состояние чекбокса
    setIsShortFilms(savedStateCheckbox);
    setIsLoading(true); // Прелоадер включен
    beatfilmMoviesApi
      .getInitialMovies()
      .then((movies) => {
        localStorage.setItem("allMovies", JSON.stringify(movies));
        setAllMovies(movies); // Сохраняем в стейт
        setFoundMovies(savedFoundMovies);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (renderCards && foundMovies) {
      setRenderMovies(foundMovies.slice(0, renderCards));
    }
  }, [renderCards, foundMovies]);

  // Сохраняю данные запроса, чекбокса, показываемых фильмов в localStorage
  useEffect(() => {
    if (foundMovies !== null) {
      localStorage.setItem("foundMovies", JSON.stringify(foundMovies)); // Сохраняем в LocalStorage
    }
    localStorage.setItem("searchName", searchName);
    localStorage.setItem("stateCheckbox", JSON.stringify(isShortFilms));
  }, [isShortFilms, foundMovies]);

  // Отслеживаю ширину окна
  function handleResize() {
    setWindowSize(window.innerWidth);
  }

  // Устанавливаю слушатель на изменение размера окна
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  // Колбэк переключения чекбокса короткометражек
  const handleMoreCards = useCallback(() => {
    setRenderCards((prev) => prev + moreCards);
  }, [renderCards]);

  return (
    <section className="movies">
      <SearchForm
        onSubmit={submitSearch}
        searchName={searchName}
        setSearchName={setSearchName}
        setSearchError={setSearchError}
        isSearchError={isSearchError}
        handleChangeMovieName={handleChangeMovieName}
        handleToggleCheckbox={handleToggleCheckbox}
        isShortFilms={isShortFilms}
        setIsShortFilms={setIsShortFilms}
      />
      {isLoading ? (
        <div className="movies__container">
          <Preloader />
        </div>
      ) : (
        <div className="movies__container">
          <MoviesCardList
            movies={renderMovies}
            savedMovies={savedMovies}
            isMoviesNotFound={isMoviesNotFound}
            isSearchError={isSearchError}
            onCardSave={onCardSave}
            onCardDelete={onCardDelete}
          />
          {foundMovies && renderCards < foundMovies.length && (
            <MoreFilmsButton onClick={handleMoreCards} />
          )}
        </div>
      )}
    </section>
  );
}

export default Movies;
