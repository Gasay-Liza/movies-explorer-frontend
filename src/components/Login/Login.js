import React from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth/Auth";

function Login(props) {
  return (
    <div class="page page__wrapper" aria-label="Cтраница авторизации">
      <Auth
        title="Рады видеть!"
        buttonText="Войти"
        hint={
          <div className="auth__hint">
            <p className="auth__hint-text">Ещё не зарегистрированы?</p>
            <Link to="/signup" className="auth__hint-link page__link">
              Регистрация
            </Link>
          </div>
        }
      >
        <fieldset class="auth__fieldset auth__fieldset_type_login">
          <label htmlFor="email" className="auth__label">
            <h3 className="auth__input-subtitle">E-mail</h3>
            <input
              className="auth__input"
              id="email"
              name="email"
              type="email"
              placeholder="pochta@yandex.ru"
              required
            />
          </label>

          <label htmlFor="password" className="auth__label">
            <h3 className="auth__input-subtitle">Пароль</h3>
            <input
              className="auth__input auth__input_type_password"
              id="password"
              name="password"
              type="password"
              placeholder="password"
              required
            />
          </label>
        </fieldset>
      </Auth>
    </div>
  );
}

export default Login;
