import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import {getLikeStatus} from "../../utils/utils";

function MoviesCardList({movies, savedMovies, isMoviesNotFound, isSearchError, onCardSave, onCardDelete}) {

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
          <MoviesCard key={movie._id || movie.id} isLiked={getLikeStatus(savedMovies, movie)} movie={movie} onCardSave={onCardSave} onCardDelete={onCardDelete}/>
        ))}
      </ul>}
    </section>
  );
}

export default MoviesCardList;

