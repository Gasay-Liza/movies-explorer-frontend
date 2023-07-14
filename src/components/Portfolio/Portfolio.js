import "./Portfolio.css";
import arrowIcon from "../../images/arrow-icon.svg";

function Portfolio(props) {
  return (
    <section className="portfolio page__section">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__projects">
        <li className="portfolio__project">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://gasay-liza.github.io/how-to-learn/"
            className="portfolio__link page__link"
          >
            <p className="portfolio__text">Статичный сайт</p>
            <img className="portfolio__icon" src={arrowIcon} alt="Иконка стрелки"/>
          </a>
        </li>

        <li className="portfolio__project">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://gasay-liza.github.io/russian-travel/index.html"
            className="portfolio__link page__link"
          >
            <p className="portfolio__text">Адаптивный сайт</p>
            <img className="portfolio__icon" src={arrowIcon} alt="Иконка стрелки"/>
          </a>
        </li>

        <li className="portfolio__project">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://gasayliza.nomoredomains.monster"
            className="portfolio__link page__link"
          >
            <p className="portfolio__text">Одностраничное приложение</p>
            <img className="portfolio__icon" src={arrowIcon} alt="Иконка стрелки"/>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
