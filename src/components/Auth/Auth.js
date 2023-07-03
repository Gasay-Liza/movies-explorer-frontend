import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import logo from "../../images/header-logo.svg";

function Auth({ title, buttonText, hint, children, handleSubmit, isValid }) {
  return (
    <section className="auth page__section">
      <div className="auth__inner">
        <Link to="/" className="auth__logo-link">
          <img className="auth__logo" src={logo} alt="Логотип" />
        </Link>

        <h1 className="auth__title">{title}</h1>
        <form className="auth__form" onSubmit={handleSubmit}>
          {children}
          <button type="submit" className="auth__btn page__button" disabled={!isValid}>
            {buttonText}
          </button>
        </form>
        {hint}
      </div>
    </section>
  );
}

export default Auth;
