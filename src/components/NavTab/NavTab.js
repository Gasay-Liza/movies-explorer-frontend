import React from "react";
import "./NavTab.css";
import { NavLink, useLocation } from "react-router-dom";

function NavTab({ isburgerMenuActive, onClose }) {
  const currentPath = useLocation().pathname;

  return (
    <nav className={`navtab ${isburgerMenuActive ? "navtab__active" : ""}`}>
      <ul className="navtab__items">
        <li className="navtab__item">
          <NavLink
            to="/"
            onClick={onClose}
            className="navtab__link navtab__link_type_main"
          >
            Главная
          </NavLink>
        </li>

        <li className="navtab__item">
          <NavLink
            to="/movies"
            onClick={onClose}
            className={`navtab__link navtab__link_type_moves 
              ${currentPath === "/movies" ? "navtab__link_active" : ""}`}
          >
            Фильмы
          </NavLink>
        </li>
        <li className="navtab__item">
          <NavLink
            to="/saved-movies"
            onClick={onClose}
            className={`navtab__link navtab__link_type_saved-moves 
              ${currentPath === "/saved-movies" ? "navtab__link_active" : ""}`}
          >
            Сохраненные фильмы
          </NavLink>
        </li>
        <li className="navtab__item navtab__item_type_profile">
          <NavLink
            to="/profile"
            onClick={onClose}
            className={`navtab__link navtab__link_type_profile 
              ${currentPath === "/profile" ? "navtab__link_active" : ""}`}
          >
            <div className="navtab__text-link">Аккаунт</div>
            <div className="navtab__profile-icon"></div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
