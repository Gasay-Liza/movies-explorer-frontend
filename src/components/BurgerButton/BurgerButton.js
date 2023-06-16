import React from "react";
import "./BurgerButton.css";

function BurrgerButton({onClick, isMenuActive}) {
    return (
      <button
        className={`burger-btn ${isMenuActive ? "burger-btn_fix" : ""}`}
        onClick={onClick}
      >
        <span className="burger-btn__line" />
      </button>
    );
}
            
export default BurrgerButton;
