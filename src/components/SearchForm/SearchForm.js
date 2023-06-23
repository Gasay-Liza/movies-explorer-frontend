import React, { useState, useEffect } from "react";
import "./SearchForm.css";
import FilterCheckbox from "./../FilterCheckbox/FilterCheckbox";

function SearchForm({ onSubmit, queryMovie, setQueryMovie }) {
  const [nameMovie, setNameMovie] = useState("");
  const [value, setValue] = useState("");
  // function handleChange(e) {
  //   console.log(e.target.value);
  //   return (e.target.value);
  // }
  
  return (
    <section
      className="search-form page__section"
      aria-label="Форма поиска фильмов"
    >
      <form className="search-form__container" onSubmit={onSubmit}>
        <input
          className="search-form__bar"
          type="search"
          id="search-form"
          name="Поиск"
          placeholder="Фильм"
          value={queryMovie}
          onChange={(e) => {
            setQueryMovie(e.target.value);
          }}
          required
        />
        <button
          type="submit"
          className="search-form__btn page__button"
        ></button>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
