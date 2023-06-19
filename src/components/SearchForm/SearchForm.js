import "./SearchForm.css";
import FilterCheckbox from "./../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
  return (
    <section
      className="search-form page__section"
      aria-label="Форма поиска фильмов"
    >
      <form className="search-form__container">
        <input
          className="search-form__bar"
          type="search"
          id="search-form"
          name="Поиск"
          placeholder="Фильм"
          required
        />
        <button className="search-form__btn page__button"></button>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
