import React, { useCallback, useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import useValidation from "../../hooks/useValidation";
import "./Profile.css";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function Profile({ onUpdateUser, onLogOut, isLoading, textServerError, setTextServerError}) {
  const [isEditProfile, setIsEditProfile] = useState(false);
  const currentUser = useContext(CurrentUserContext);
  const {navigate, values, errors, handleChange, resetValidation, isValid, } = useValidation();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onUpdateUser(values);
    },
    [values, onUpdateUser]
  );

  //Резет валидации ошибок инпутов
  useEffect(() => {
    resetValidation(currentUser);
  }, [resetValidation, currentUser]);

  
  //Резет валидации ошибки сервера
  useEffect(() => {
    setTextServerError("");
  }, [setTextServerError]);

  function handleEditProfileClick() {
    setIsEditProfile(true);
  }

  return (
    <section className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <h2 className="profile__title">{`Привет, ${currentUser.name}`}</h2>
        <fieldset className="profile__fieldset">
          <div className="profile__input-container">
            <label htmlFor="name" className="profile__label">
              Имя
            </label>
            <input
              className="profile__input"
              id="name"
              name="name"
              placeholder=""
              value={values.name || ''}
              onChange={handleChange}
              disabled={!isEditProfile}
              required
            />
          </div>
          <span className="profile__error">{errors.name || ""}</span>
          <div className="profile__input-container">
            <label htmlFor="email" className="profile__label">
              E-mail
            </label>
            <input
              className="profile__input"
              id="email"
              name="email"
              placeholder=""
              value={values.email || ''}
              onChange={handleChange}
              disabled={!isEditProfile}
              required
            />
            
          </div>
          <span className="profile__error">{errors.email || ""}</span>
        </fieldset>
        {isEditProfile ? (
        <>
          <span className="profile__server-error">{textServerError}</span>
          <button
            type="submit"
            className="profile__submit page__button"
            disabled={!isValid}
          >
            {isLoading ? "Сохранение..." : "Сохранить"}
          </button>
        </>
        ) : (
          <>
            <button
            type="submit"
            className="profile__button button button_type_edit-profile page__button"
            onClick={handleEditProfileClick}
          >
            Редактировать
          </button>

          <button
            to="/"
            className="profile__button button button_type_logout page__button"
            onClick={onLogOut}
          >
            Выйти из аккаунта
          </button>
          
          </>
        )}
      </form>
    </section>
  );
}

export default Profile;
