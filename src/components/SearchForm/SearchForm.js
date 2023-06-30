import React, { useState, useEffect } from "react";
import "./SearchForm.css";
import FilterCheckbox from "./../FilterCheckbox/FilterCheckbox";

function SearchForm({
  onSubmit,
  searchName,
  handleToggleCheckbox,
  handleChangeMovieName,
  setIsShortFilms,
  isShortFilms
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
          onChange={handleChangeMovieName}
          required
        />
        <button
          type="submit"
          className="search-form__btn page__button"
        ></button>
      </form>
      <FilterCheckbox
        isShortFilms={isShortFilms}
        setIsShortFilms={setIsShortFilms}
        handleToggleCheckbox={handleToggleCheckbox}
      />
    </section>
  );
}

export default SearchForm;
