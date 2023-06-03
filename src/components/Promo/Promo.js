import "./Promo.css";
import promoImage from "../../images/promo-img.svg";

function Promo(props) {
  return (
    <section className="promo">
      <div class="promo_container">
        <h1 class="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p class="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <button type="button" class="promo_btn">
          Узнать больше
        </button>
      </div>
      <img class="promo_img" src={promoImage}></img>
    </section>
  );
}

export default Promo;