import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth/Auth";
import useValidation from "../../hooks/useValidation";
import { PATTERN_EMAIL } from "../../utils/constans";

function Login({
  onLogin,
  isLoggedIn,
  isLoading,
  textServerError,
  setTextServerError,
}) {
  const { values, errors, handleChange,  isValid } =
    useValidation();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onLogin(values);
    },
    [values, onLogin]
  );

  //Резет валидации ошибки сервера
  useEffect(() => {
    setTextServerError("");
  }, [setTextServerError]);

  return (
    <div className="page page__wrapper" aria-label="Cтраница авторизации">
      <Auth
        isLoading={isLoading}
        textServerError={textServerError}
        isValid={isValid}
        title="Рады видеть!"
        buttonText={isLoading ? "Вход..." : "Войти"}
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
              autoComplete="on"
              className={`auth__input ${
                errors.email === "" ? "" : "auth__input_type_invalid"
              }`}
              id="email"
              name="email"
              type="email"
              minLength="2"
              maxLength="30"
              onChange={handleChange}
              value={values.email || ""}
              required
            />
            <span className="auth__error">{errors.email || ""}</span>
          </label>

          <label htmlFor="password" className="auth__label">
            <h3 className="auth__input-subtitle">Пароль</h3>
            <input
              autoComplete="on"
              className={`auth__input ${
                errors.password === "" ? "" : "auth__input_type_invalid"
              }`}
              id="password"
              name="password"
              type="password"
              minLength="8"
              maxLength="30"
              onChange={handleChange}
              value={values.password || ""}
              required
            />
            <span className="auth__error">{errors.password || ""}</span>
          </label>
        </fieldset>
      </Auth>
    </div>
  );
}

export default Login;
