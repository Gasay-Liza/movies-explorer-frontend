import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import logo from "../../images/header-logo.svg";

function Auth({ title, buttonText, hint, children, }) {
  return (
    <main className="auth">
      <Link to="/" className="auth__logo-link">
        <img className="auth__logo" src={logo} alt="Логотип" />
      </Link>

      <h1 className="auth__title">{title}</h1>
      <form className="auth__form">
        {children}
        <button type="submit" className="auth__btn">
          {buttonText}
        </button>
      </form>
      {hint}
    </main>
  );
}

export default Auth;
