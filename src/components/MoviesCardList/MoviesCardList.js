import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";


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
    </section>
  );
}

export default MoviesCardList;

