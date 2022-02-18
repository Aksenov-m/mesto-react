import React from "react";
import "../index.css";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.info);
  }

  return (
    <article className='card cards__item'>
      <button className='card__trash link' type='button' aria-label='deleteCard'></button>
      <img className='card__image' src={props.info.link} alt={props.info.name} onClick={handleClick} />
      <div className='card__flex'>
        <h2 className='card__title'>{props.info.name}</h2>
        <div className='card__likes'>
          <button className='card__like-icon' type='button' aria-label='like'></button>
          <p className='card__like-counter'>{props.info.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
