import React from "react";
import { Link } from "react-router-dom";

import "./Profile.css";

function Profile(props) {
  return (
    <section className="profile">
      <form className="profile__form">
        <h2 className="profile__title">Привет, Виталий!</h2>
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
              required
            />
          </div>

          <div className="profile__input-container">
            <label htmlFor="email" className="profile__label">
              E-mail
            </label>
            <input
              className="profile__input"
              id="email"
              name="email"
              placeholder=""
              required
            />
          </div>
        </fieldset>

        <button
          type="submit"
          className="profile__button button button_type_edit-profile"
        >
          Редактировать
        </button>

        <Link to="/" className="profile__link profile__link_type_logout ">
          Выйти из аккаунта
        </Link>
      </form>
      v
    </section>
  );
}

export default Profile;
