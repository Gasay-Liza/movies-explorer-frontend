import "./MoviesCard.css";

function MoviesCard({ movie, onCardLike}) {
  const cardLikeButtonclassName = `photo-card__like ${
    isLiked && "photo-card__like_active"
  }`;

  return (
    <li className="movie-card">
      <img
        className="movie-card__image"
        src={movie.link}
        alt={`Кадр из фильма ${name}`}
      />
      <div className="movie-card__description">
        <div className="movie-card__name-container">
          <h3 className="movie-card__name">{movie.name}</h3>
          <button
            onClick={handleLikeClick}
            aria-label="Лайк"
            type="button"
            className={cardLikeButtonclassName}
          />
        </div>

        <p className="movie-card__duration">{movie.duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
