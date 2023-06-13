import "./Header.css";
import headerLogo from "../../images/header-logo.svg";
import AuthLinks from "../AuthLinks/AuthLinks";
import NavBar from "../NavBar/NavBar";

function Header({ isAuthorized = false }) {
  return (
    <section className={`header ${isAuthorized ? "" : "header_theme_blue"}`}>
      <img
        className="header__logo "
        src={headerLogo}
        alt="Логотип приложения"
      />
      {isAuthorized ? <NavBar /> : <AuthLinks />}
    </section>
  );
}

export default Header ;
