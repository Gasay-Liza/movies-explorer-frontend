import React, {useEffect} from "react";
import "./Overlay.css";

function Overlay({ isActive, onClose }) {
  useEffect(() => {
    function closeByEscape(evt) {
        if (evt.key === 'Escape') {
            onClose();
        }
    }

    if (isActive) { // навешиваем только при открытии
        document.addEventListener('keydown', closeByEscape);
        return () => {
            document.removeEventListener('keydown', closeByEscape);
        }
    }
}, [isActive, onClose])

const closeByClickOnOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    onClose();
  }
};

  return (
    <div
      className={`overlay ${isActive ? "overlay_active" : ""}`}
      onMouseDown={closeByClickOnOverlay}
    ></div>
  );
}

export default Overlay;
