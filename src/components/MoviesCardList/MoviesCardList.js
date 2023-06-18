import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoreFilmsButton from "../MoreFilmsButton/MoreFilmsButton";

function MoviesCardList({
  movies,
}) {
  return (
    <section className="movies-cards page__section">
      <ul className="movies-cards__list">
        {movies.map((movie) => (
          <MoviesCard movie={movie} />
        ))}
      </ul>
      <MoreFilmsButton/>
    </section>
  );
}

export default MoviesCardList;
