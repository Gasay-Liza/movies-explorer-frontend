import React, { useState, useEffect } from "react";
import "./SearchForm.css";
import FilterCheckbox from "./../FilterCheckbox/FilterCheckbox";

function SearchForm({
  onSubmit,
  searchName,
  setSearchName,
  isShortFilm,
  setIsShortFilm,
  onChangeCheckbox,
}) {
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
          value={searchName}
          onChange={(e) => {
            setSearchName(e.target.value);
          }}
          required
        />
        <button
          type="submit"
          className="search-form__btn page__button"
        ></button>
      </form>
      <FilterCheckbox
        isShortFilm={isShortFilm}
        setIsShortFilm={setIsShortFilm}
        onChange={onChangeCheckbox}
      />
    </section>
  );
}

export default SearchForm;
