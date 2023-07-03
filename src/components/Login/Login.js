import React, {useCallback, useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import Auth from "../Auth/Auth";
import useValidation from '../../hooks/useValidation';

function Login({onLogin, isLoggedIn, onLoading}) {

  const {navigate, values, errors, handleChange, resetValidation, isValid} = useValidation();

const handleSubmit = useCallback((e) => {
    e.preventDefault();
    resetValidation();
    onLogin(values.email, values.password);
},[onLogin, values])

useEffect(() => {
    if (isLoggedIn) {
        navigate('/', { replace: true })
    }
}, );

  return (
    <div className="page page__wrapper" aria-label="Cтраница авторизации">
      <Auth
        isValid={isValid}
        title="Рады видеть!"
        buttonText={onLoading ? "Вход..." : "Войти"}
        hint={
          <div className="auth__hint">
            <p className="auth__hint-text">Ещё не зарегистрированы?</p>
            <Link to="/signup" className="auth__hint-link page__link">
              Регистрация
            </Link>
          </div>
        }
        handleSubmit={handleSubmit}
      >
        <fieldset className="auth__fieldset auth__fieldset_type_login">
          <label htmlFor="email" className="auth__label">
            <h3 className="auth__input-subtitle">E-mail</h3>
            <input
              className="auth__input"
              id="email"
              name="email"
              type="email"
              minLength="2"
              maxLength="30"
              onChange={handleChange}
              disabled={onLoading ? true : false}
              value={values.email}
              required
            />
            <span className="auth__error">{errors.email || ''}</span>
          </label>


          <label htmlFor="password" className="auth__label">
            <h3 className="auth__input-subtitle">Пароль</h3>
            <input
              className={`auth__input ${errors.password==="" ? "" : "auth__input_type_invalid"}`}
              id="password"
              name="password"
              type="password"
              minLength="8"
              maxLength="30"
              onChange={handleChange}
              disabled={onLoading ? true : false}
              value={values.password}
              required
            />
            <span className="auth__error">{errors.password || ''}</span>
          </label>
        </fieldset>
      </Auth>
    </div>
  );
}

export default Login;
