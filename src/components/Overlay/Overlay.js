import React from "react";
import "./Overlay.css";

function Overlay({ isActive }) {
  return <div className={`overlay ${isActive ? "overlay_active" : ""}`}></div>;
}

export default Overlay;
