import React, {useCallback, useState} from 'react';
import { Link} from "react-router-dom";
import Auth from "../Auth/Auth";
import useValidation from '../../hooks/useValidation';
function Register({isLoading, onRegister, isLoggedIn, infoToolTipText}) {
const {navigate, values, errors, handleChange, resetValidation, isValid} = useValidation();

  const handleSubmit = useCallback((e) => {
      e.preventDefault();
      // resetValidation();
      console.log(values)
      onRegister(values);
  },[values, onRegister])
  

  if (isLoggedIn){
      navigate('/', { replace: true })
  }

  return (
    <div className="page page__wrapper" aria-label="Cтраница регистрации">
      <Auth
        isValid={isValid}
        infoToolTipText={infoToolTipText}
        title="Добро пожаловать!"
        buttonText={isLoading ? "Регистрация..." : "Зарегистрироваться"}
        hint={
          <div className="auth__hint">
            <p className="auth__hint-text">Уже зарегистрированы?</p>
            <Link to="/signin" className="auth__hint-link">
              Войти
            </Link>
          </div>
        }
        handleSubmit={handleSubmit}
      >
        <fieldset className="auth__fieldset auth__fieldset_type_register">
          <label htmlFor="name" className="auth__label">
            <h3 className="auth__input-subtitle">Имя</h3>
            <input
              className="auth__input"
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name  || ''}
              minLength="2"
              required
            />
            <span className="auth__error">{errors.name || ''}</span>
          </label>

          <label htmlFor="email" className="auth__label">
            <h3 className="auth__input-subtitle">E-mail</h3>
            <input
              className="auth__input"
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email || ''}
              required
            />
            <span className="auth__error">{errors.email || ''}</span>
          </label>

          <label htmlFor="password" className="auth__label">
            <h3 className="auth__input-subtitle">Пароль</h3>
            <input
              className={`auth__input ${errors.password ==="" ? "" : "auth__input_type_invalid"}`}
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              value={values.password || ''} 
              minLength="8"
              required
            />
            <span className="auth__error">{errors.password || ''}</span>
          </label>
        </fieldset>
      </Auth>
    </div>
  );
}

export default Register;