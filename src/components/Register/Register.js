import React, {useCallback, useEffect} from 'react';
import { Link, Navigate } from "react-router-dom";
import Auth from "../Auth/Auth";
import useValidation from '../../hooks/useValidation';
import {NAME_REG_EXP} from '../../utils/constans';
function Register({isLoading, onRegister, loggedIn, textServerError, setTextServerError}) {
const {values, errors, handleChange, isValid, resetValidation} = useValidation();

  const handleSubmit = useCallback((e) => {
      e.preventDefault();
      onRegister(values);
  },[values, onRegister])
  
  //Резет валидации ошибок инпутов
  useEffect(() => {
    resetValidation();
  }, [resetValidation]);

  //Резет валидации ошибки сервера
  useEffect(() => {
    setTextServerError("");
  }, [setTextServerError]);


  return loggedIn ? (
    <Navigate to="/" replace />
  ) : (
    <div className="page page__wrapper" aria-label="Cтраница регистрации">
      <Auth
        isLoading={isLoading}
        isValid={isValid}
        textServerError={textServerError}
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
              className={`auth__input ${errors.name==="" ? "" : "auth__input_type_invalid"}`}
              id="name"
              type="text"
              name="name"
              pattern={NAME_REG_EXP}
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
              className={`auth__input ${errors.email==="" ? "" : "auth__input_type_invalid"}`}
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email || ''}
              disabled={isLoading}
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
              disabled={isLoading}
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