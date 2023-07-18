import React, { useState} from "react";
import { useLocation, Link } from "react-router-dom";
import "./Header.css";
import logoPath from "../../images/header-logo.svg";
import AuthLinks from "../AuthLinks/AuthLinks";
import BurgerButton from "../BurgerButton/BurgerButton";
import NavTab from "../NavTab/NavTab";
import Overlay from "../Overlay/Overlay";

function Header({loggedIn}) {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  function handleBurgerBtnClick() {
     setBurgerMenuActive(!burgerMenuActive);
  }
  function handleCloseMenu(){
    setBurgerMenuActive(false);
  }
  
  const isMain = useLocation().pathname === "/";
  return (
    <header
      className={`header page__section ${isMain ? "header_theme_blue" : ""}`}
    >
      <Link to="/" className="header__logo-link page__link">
        <img className="header__logo" src={logoPath} alt="Логотип" />
      </Link>

      {!loggedIn ? (
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
      <Overlay isActive={burgerMenuActive} onClose={handleCloseMenu}/>
    </header>
  );
}

export default Header;
