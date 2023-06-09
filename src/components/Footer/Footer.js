import "./Footer.css";

function Footer(props) {
  return (
    <section className="footer">
      <p className="footer__copyright">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__block">
        <p className="footer__year">&#169; 2023</p>
        <ul className="footer__socials">
          <li className="footer__social">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://practicum.yandex.ru"
              className="footer__social-link page__link"
            >
              Яндекс.Практикум
            </a>
          </li>

          <li className="footer__social">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Gasay-Liza"
              className="footer__social-link page__link"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
