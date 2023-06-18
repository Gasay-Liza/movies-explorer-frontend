import "./Portfolio.css";
import myPhoto from "../../images/my-photo.jpg";
import arrowIcon from "../../images/arrow-icon.svg";

function Portfolio(props) {
  return (
    <section className="portfolio page__section">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__projects">
        <li className="portfolio__project">
          <a href="#" className="portfolio__link page__link">
            <p className="portfolio__text">Статичный сайт</p>
            <img className="portfolio__icon" src={arrowIcon} />
          </a>
        </li>

        <li className="portfolio__project">
          <a href="#" className="portfolio__link page__link">
            <p className="portfolio__text">Адаптивный сайт</p>
            <img className="portfolio__icon" src={arrowIcon} />
          </a>
        </li>

        <li className="portfolio__project">
          <a href="#" className="portfolio__link page__link">
            <p className="portfolio__text">Одностраничное приложение</p>
            <img className="portfolio__icon" src={arrowIcon} />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
