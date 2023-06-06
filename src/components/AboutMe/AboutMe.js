import "./AboutMe.css";
import myPhoto from "../../images/my-photo.jpg";

function AboutMe(props) {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__content">
          <h3 className="about-me__name">Елизавета</h3>
          <h3 className="about-me__about">
            Начинающий фронтенд-разработчик, 24 года
          </h3>
          <p className="about-me__description">
            Я работаю инженером-конструктором, но очень увлечена
            веб-разработкой. Я учусь на Я.Практикуме и занимаюсь изучением HTML,
            CSS, JavaScript и React. Я уже создала несколько проектов под
            присмотром опытных наставников и получаю обратную связь в рамках
            ревью. Могу легко сверстать страницы по макету и добавить
            адаптивность и кроссбраузерность. Моя мечта - сменить профессию и
            стать крутым фронтенд-разработчиком. А в свободное время я увлекаюсь
            чтением книг, просмотром фильмов и любимых дорам и аниме. Я
            настроена серьезно и готова много работать, чтобы достичь своих
            целей. Буду рада поделиться своими успехами и учиться у других
            профессионалов своей области. Всегда открыта к новым идеям и готова
            к сотрудничеству.
          </p>
          <nav className="about-me__contacts">
            <a href="#" className="about-me__link">
              <p className="about-me__link-text">Github</p>
            </a>
          </nav>
        </div>
        <img src={myPhoto} className="about-me__image" />
      </div>
    </section>
  );
}

export default AboutMe;
