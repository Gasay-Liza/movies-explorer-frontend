import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logoPath from "../../images/header-logo.svg";
import AuthLinks from "../AuthLinks/AuthLinks";
import BurgerButton from "../BurgerButton/BurgerButton";
import NavTab from "../NavTab/NavTab";
import Overlay from "../Overlay/Overlay";

function Header(props) {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  function handleBurgerBtnClick() {
     setBurgerMenuActive(!burgerMenuActive);
  }

  const isMain = useLocation().pathname === "/";
  console.log(isMain);
  return (
    <header
      className={`header page__section ${isMain ? "header_theme_blue" : ""}`}
    >
      <img className="header__logo" src={logoPath} alt="Логотип" />
      {isMain ? (
        <AuthLinks />
      ) : (
        <div className="header__links">
          <NavTab isburgerMenuActive={burgerMenuActive} />
          <BurgerButton
            onClick={handleBurgerBtnClick}
            isMenuActive={burgerMenuActive}
          />
        </div>
      )}
      <Overlay isActive={burgerMenuActive} />
    </header>
  );
}

export default Header;
