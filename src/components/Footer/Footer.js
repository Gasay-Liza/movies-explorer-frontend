import "./Footer.css";

function Footer(props) {
  return (
    <section className="footer">
      <p className="footer__copyright">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__block">
        <p className="footer_year">&#169; 2023</p>
        <ul className="footer__socials">
          <li className="footer__social">
            <a href="#" className="footer__social-link">
              Яндекс.Практикум
            </a>
          </li>

          <li className="footer__social">
            <a href="#" className="footer__social-link">
              Github
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
