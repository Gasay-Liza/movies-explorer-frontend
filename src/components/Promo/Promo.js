import "./Promo.css";
import promoImage from "../../images/promo-img.svg";

function Promo(props) {
  return (
    <section
      aria-label="Баннер страницы «О проекте»"
      className="promo page__section"
    >
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <a className="page__link promo__link" href="#aboutme">
          Узнать больше
        </a>
      </div>
      <img
        className="promo__img"
        src={promoImage}
        alt='Множество слов "WEB" в форме глобуса'
      ></img>
    </section>
  );
}

export default Promo;
