import React from "react";
import "../index.css";

// Функциональный компонент ImagePopup
function ImagePopup(props) {
  return (
    <div className={`popup popup_image_fullscreen ${props.cardInfo.link ? "popup_opened" : ""}`}>
      <div className='popup__container popup__container_image'>
        <button className='popup__close-button link' type='button' aria-label='closePopup' onClick={props.onClose}></button>
        <img className='popup__image' src={props.cardInfo.link} />
        <h3 className='popup__photo-title'>{props.cardInfo.name}</h3>
      </div>
    </div>
  );
}

export default ImagePopup;
