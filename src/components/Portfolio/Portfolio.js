import "./Portfolio.css";
import myPhoto from "../../images/my-photo.jpg";

function Portfolio(props) {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__projects">
        <li>
          <a href="#" className="portfolio__project">
                      Статичный сайт
         </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
