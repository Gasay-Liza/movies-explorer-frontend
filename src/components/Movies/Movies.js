import React, { useState, useEffect, useCallback } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreFilmsButton from "../MoreFilmsButton/MoreFilmsButton";
import Preloader from "../Preloader/Preloader";
import beatfilmMoviesApi from "../../utils/moviesApi";
import { WINDOW_SIZE_L, WINDOW_SIZE_M, WINDOW_SIZE_S } from "../../utils/constans";

function Movies({}) {
  const [allMovies, setAllMovies] = useState([]); // Данные всех фильмов с БД beatfilmMovies
  const [renderMovies, setRenderMovies] = useState([]); // Показываемые фильмы на странице
  const [foundMovies, setFoundMovies] = useState(null); // Результат поиска фильмов
  // const [searchName, setSearchName] = useState(localStorage.getItem('searchName') ?? ''); // Название фильма в поисковике
  // const [isShortFilms, setIsShortFilms] = useState(JSON.parse(localStorage.getItem('stateCheckbox')) ?? false); // Короткометражки
  // const [RenderMovies, setRenderMovies] = useState([]); // Результат поиска фильмов
  const [searchName, setSearchName] = useState(''); // Название фильма в поисковике
  const [isShortFilms, setIsShortFilms] = useState(false); // Короткометражки
  const [isLoading, setIsLoading] = useState(false); // Загрузка
  const [windowSize, setWindowSize] = useState(window.innerWidth); // Размер окна
  const [moreCards, setMoreCards] = useState(window.innerWidth); // Число карточек кнопки еще
  const savedMoviesPerPage = JSON.parse(localStorage.getItem("moviesPerPage"));
  const savedSearchName = localStorage.getItem("searchName") ?? '';
  const savedStateCheckbox = JSON.parse(localStorage.getItem("stateCheckbox")) ?? false;
  
// При клике на поиск фильма
function submitSearch(e){ 
  e.preventDefault();
  const filter = filterBySearch(isShortFilms);
  setFoundMovies(filter)
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
    setFoundMovies(filter);
    console.log('foundMovies', foundMovies)
  }, [isShortFilms, savedMoviesPerPage, foundMovies]
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


  // При перезагрузке страницы отображаются c LocalStorage:
  useEffect(() => {
    // Если данные были сохранены в LocalStorage
      //Фильмы на страницу
      // Название фильма в поисковике
      setSearchName(savedSearchName)
      //Состояние чекбокса
      setIsShortFilms(savedStateCheckbox)
      setIsLoading(true); // Прелоадер включен
      beatfilmMoviesApi
      .getInitialMovies()
      .then((movies) => {
        localStorage.setItem("allMovies", JSON.stringify(movies));
        setAllMovies(movies); // Сохраняем в стейт
        setRenderMovies(savedMoviesPerPage);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  // Сохраняю данные запроса, чекбокса, показываемых фильмов в localStorage
  useEffect(() => {
    if (foundMovies !== null ){
      localStorage.setItem('moviesPerPage', JSON.stringify(foundMovies)); // Сохраняем в LocalStorage
    }
      localStorage.setItem('searchName', searchName);
      localStorage.setItem(
        'stateCheckbox',
        JSON.stringify(isShortFilms)
      );
  }, [searchName, isShortFilms, foundMovies]);

  // Отслеживаю ширину окна

  function handleResize() {
    setWindowSize(window.innerWidth)
  };

  // Устанавливаю слушатель на изменение размера окна
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize]);

        // Определяю количество карточек на странице в зависимости от ширины
        useEffect(() => {
          console.log(windowSize)
          if (foundMovies !== null){
            console.log('f', foundMovies)
            if (windowSize >= 960) {
              setRenderMovies(foundMovies.slice(0, 12))
              console.log('foundMovies.slice(0, 12)',foundMovies.slice(0, 12))
              setMoreCards(3)
            } else if (windowSize < 960 && windowSize  > 560) {
              setRenderMovies(foundMovies.slice(0, 8))
              setMoreCards(2)
            } else if (windowSize  <= 560) {
              setRenderMovies(foundMovies.slice(0, 5))
              setMoreCards(2)
            }
          
          console.log(foundMovies)
          console.log(renderMovies)
          }
          
      }, [foundMovies, windowSize, savedMoviesPerPage]);


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
        <MoviesCardList movies={renderMovies} />
        <MoreFilmsButton />
        </div> 
      )}
    </section>
  );
}

export default Movies;
