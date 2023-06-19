import "./FilterCheckbox.css";

function FilterCheckbox(props) {
    return (
      <label htmlFor="checkbox" className="filter-checkbox">
        <input
          type="checkbox"
          className="filter-checkbox__real"
          id="checkbox"
        />
        <span className="filter-checkbox__custom"></span>
        <span className="filter-checkbox__title">Короткометражки</span>
      </label>
    );
}


export default FilterCheckbox;
