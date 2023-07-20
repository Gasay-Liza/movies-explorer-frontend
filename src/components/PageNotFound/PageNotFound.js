import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./PageNotFound.css";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="page__wrapper">
      <section className="not-found">
        <h3 className="not-found__title">404</h3>
        <p className="not-found__text">Страница не найдена</p>
        <Link
          className="page__link not-found__link not-found__link_type_to-main"
          onClick={() => navigate(-1)}
        >
          Назад
        </Link>
      </section>
    </div>
  );
}

export default PageNotFound;
