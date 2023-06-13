import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";


function NavBar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <NavLink to="/movies" className="navbar__link">
            Фильмы
          </NavLink>
        </li>

        <li className="navbar__list-item">
          <NavLink to="/saved-movies" className="navbar__link navbar__link_type_saved-moves">
            Сохраненные фильмы
          </NavLink>
        </li>
      </ul>

      <NavLink to="/profile" className="navbar__link navbar__link_type_profile">
        <div className="navbar__text-link">Аккаунт</div>
        <div className="navbar__profile-icon"></div>
      </NavLink>
    </nav>
  );
} 

export default NavBar;
