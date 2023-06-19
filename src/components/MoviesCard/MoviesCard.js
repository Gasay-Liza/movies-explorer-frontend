import "./MoviesCard.css";

function MoviesCard({
  movie,
}) {
  return (
    <li className="movie-card">
      <img
        className="movie-card__image"
        src={movie.image.url}
        alt={`Кадр из фильма "${movie.nameRU}"`}
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

        <p className="movie-card__duration">{movie.duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
