import "./FilterCheckbox.css";

function FilterCheckbox({
  isShortFilms,
  setIsShortFilms,
  handleToggleCheckbox,
}) {
  return (
    <label htmlFor="checkbox" className="filter-checkbox">
      <input
        type="checkbox"
        className="filter-checkbox__real"
        id="checkbox"
        checked={isShortFilms}
        onChange={(e) => handleToggleCheckbox(e.target.checked)}
      />

      <span className="filter-checkbox__custom"></span>
      <span className="filter-checkbox__title">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;
