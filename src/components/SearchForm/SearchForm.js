import "./SearchForm.css";
import FilterCheckbox from "./../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
  return (
    <section class="search-form">
      <div class="search-form__container">
        <input type="search" className="search-form__bar" placeholder="Фильм" />
        <button className="search-form__btn"></button>
      </div>
      <FilterCheckbox/>
    </section>
  );
}

export default SearchForm;
