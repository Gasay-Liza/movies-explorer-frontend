import "./Promo.css";
import promoImage from "../../images/promo-img.svg";

function Promo(props) {
  return (
    <section className="promo">
      <div className="promo_container">
        <h1 className="promo__title">
          Учебный проект студента<br />
          факультета <br />
          Веб-разработки.
        </h1>
        <p className="promo__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <button type="button" className="promo_btn">
          Узнать больше
        </button>
      </div>
      <img className="promo_img" src={promoImage}></img>
    </section>
  );
}

export default Promo;