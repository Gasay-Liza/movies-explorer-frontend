import "./Header.css";
import headerLogo from "../../images/header-logo.svg";

function Header(props) {
  return (
    <section class="header">
      <img class="header__logo" src={headerLogo} />
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item">Регистрация</li>
          <li class="header__nav-item header__nav-item_type_green">Войти</li>
        </ul>
      </nav>
    </section>
  );
}

export default Header ;
