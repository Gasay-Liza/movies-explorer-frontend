import { useLocation } from 'react-router-dom';
import "./MoviesCard.css";
import { MOVIES_API_URL } from "../../utils/constans";
import {getConvertedTime} from "../../utils/getСonvertedTime"

function MoviesCard({
  movie, cbTrailerLink, isSaved, onCardDelete, onCardSave
}) {
  
  const location = useLocation();
  
  function handleMovieSave (){
    onCardSave(movie)
  }

  function handleMovieDelete (){
    onCardDelete(movie)
  }

  return (
    <li className="movie-card">
      <img
        className="movie-card__image"
        src={location.pathname === "/movies" ? `${MOVIES_API_URL}${movie.image.url}` : `${movie.image}`}
        alt={`Кадр из фильма "${movie.nameRU}"`}
        onClick={cbTrailerLink}
      />
      <div className="movie-card__description">
        <div className="movie-card__name-container">
          <h3 className="movie-card__name">{movie.nameRU}</h3>
          {location.pathname === "/movies" ? <button
            onClick={handleMovieSave}
            aria-label="Сохранение фильма"
            type="button"
            className={`page__button movie-card__like-btn ${isSaved ? "movie-card__like-btn_active" : ""}`}
          /> : <button
          onClick={handleMovieDelete}
          aria-label="Удаление из сохраненных"
          type="button"
          className={`page__button movie-card__delete-btn`}
        />}
        </div>

        <p className="movie-card__duration">{getConvertedTime(movie.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
