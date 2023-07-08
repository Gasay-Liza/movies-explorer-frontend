import "./MoviesCard.css";
import { MOVIES_API_URL } from "../../utils/constans";
import {getConvertedTime} from "../../utils/getСonvertedTime"

function MoviesCard({
  movie, cbTrailerLink
}) {
  return (
    <li className="movie-card">
      <img
        className="movie-card__image"
        src={`${MOVIES_API_URL}${movie.image.url}`}
        alt={`Кадр из фильма "${movie.nameRU}"`}
        onClick={cbTrailerLink}
      />
      <div className="movie-card__description">
        <div className="movie-card__name-container">
          <h3 className="movie-card__name">{movie.nameRU}</h3>
          <button
            aria-label="Лайк"
            type="button"
            className="photo-card__like"
          />
        </div>

        <p className="movie-card__duration">{getConvertedTime(movie.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
