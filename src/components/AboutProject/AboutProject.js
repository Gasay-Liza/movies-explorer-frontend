import "./AboutProject.css";

function AboutProject(props) {
  return (
    <section className="about-project">
      <h2 class="about-project__title">О проекте</h2>
      <div class="about-project__container">
        <h3 class="about-project__subtitle">
          Дипломный проект включал 5 этапов
        </h3>
        <p class="about-project__text">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <h3 class="about-project__subtitle">
          На выполнение диплома ушло 5 недель
        </h3>
        <p class="about-project__text">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div class="about-project__bar">
        <div class="about-project__bar-block about-project__bar-block_type_green">
          1 неделя
        </div>
        <p class="about-project__description">Back-end</p>
        <div class="about-project__bar-block about-project__bar-block_type_grey">
          4 недели
        </div>
        <p class="about-project__description">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
