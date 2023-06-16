import React, { useState } from "react";
import "./NavTab.css";
import { NavLink } from "react-router-dom";


function NavTab({ isburgerMenuActive }) {
  return (
    <nav className={`navtab ${isburgerMenuActive ? "navtab__active" : ""}`}
    >
      <ul className="navtab__items">
        <li className="navtab__item">
          <NavLink to="/" className="navtab__link navtab__link_type_main">
            Главная
          </NavLink>
        </li>

        <li className="navtab__item">
          <NavLink
            to="/movies"
            className="navtab__link navtab__link_type_moves"
          >
            Фильмы
          </NavLink>
        </li>

        <li className="navtab__item">
          <NavLink
            to="/saved-movies"
            className="navtab__link navtab__link_type_saved-moves"
          >
            Сохраненные фильмы
          </NavLink>
        </li>

        <li className="navtab__item">
          <NavLink
            to="/profile"
            className="navtab__link navtab__link_type_profile"
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
