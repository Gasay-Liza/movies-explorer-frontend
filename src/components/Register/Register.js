import React from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth/Auth";

function Register(props) {
  return (
    <div class="page page__wrapper" aria-label="Cтраница регистрации">
      <Auth
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        hint={
          <div className="auth__hint">
            <p className="auth__hint-text">Уже зарегистрированы?</p>
            <Link to="/signin" className="auth__hint-link">
              Войти
            </Link>
          </div>
        }
      >
        <fieldset class="auth__fieldset auth__fieldset_type_register">
          <label htmlFor="name" className="auth__label">
            <h3 className="auth__input-subtitle">Имя</h3>
            <input
              className="auth__input"
              id="name"
              name="name"
              placeholder="Елизавета"
              required
            />
          </label>

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
            <p className="auth__error">Что-то пошло не так...</p>
          </label>
        </fieldset>
      </Auth>
    </div>
  );
}

export default Register;