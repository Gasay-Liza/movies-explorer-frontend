import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({movies, isMoviesNotFound, isSearchError, onCardSave}) {
  return (
    <section className="movies-cards page__section">
      {isMoviesNotFound && (
        <p className="movies-cards__info">Ничего не&nbsp;найдено</p>
      )}
      {isSearchError && (
        <p className="movies-cards__info">
          Во&nbsp;время запроса произошла ошибка. Возможно, проблема
          с&nbsp;соединением или сервер недоступен. Подождите немного
          и&nbsp;попробуйте ещё раз
        </p>
      )}
      {movies && !isMoviesNotFound &&
        <ul className="movies-cards__list">
        {movies.map((movie) => (
          <MoviesCard movie={movie} onCardSave={onCardSave}/>
        ))}
      </ul>}
    </section>
  );
}

export default MoviesCardList;

