import React from "react";
import "./BurgerButton.css";

function BurrgerButton({ onClick, isMenuActive }) {
  return (
    <button
      className={`burger-btn ${isMenuActive ? "burger-btn_close" : ""}`}
      onClick={onClick}
    >
      {/* Если бургер меню открыто - добавляется класс с анимацией бургер-кнопки */}
      <span
        className={`burger-btn__line ${
          isMenuActive ? "burger-btn__line_close" : ""
        }`}
      />
    </button>
  );
}

export default BurrgerButton;
