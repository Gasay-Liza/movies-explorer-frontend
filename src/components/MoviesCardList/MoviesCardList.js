import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList({
  moviesCards,
}) {
  console.log(moviesCards);

  return (
    <section className="movies-cards page__section">
      <ul className="movies-cards__list">
        {moviesCards.map((movie) => (
          <MoviesCard movie={movie} />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;

