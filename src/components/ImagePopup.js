import React from "react";
import "../index.css";

// Функциональный компонент ImagePopup
function ImagePopup(props) {
  return (
    <div className='popup popup_image_fullscreen'>
      <div className='popup__container popup__container_image'>
        <button className='popup__close-button link' type='button' aria-label='closePopup'></button>
        <img className='popup__image' />
        <h3 className='popup__photo-title'></h3>
      </div>
    </div>
  );
}

export default ImagePopup;
