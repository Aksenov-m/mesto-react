import React, { useState, useEffect, useContext } from "react";
import api from "../../src/utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

// Функциональный компонент Main
function Main(props) {
  const currentUser = useContext(CurrentUserContext);
  // const [cards, setCards] = useState([]);

  // function handleCardLike(card) {
  //   // Снова проверяем, есть ли уже лайк на этой карточке
  //   const isLiked = card.likes.some((i) => i._id === currentUser._id);

  //   // Отправляем запрос в API и получаем обновлённые данные карточки
  //   api.changeLikeCardStatus(card, !isLiked).then((newCard) => {
  //     setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
  //   });
  // }

  // function handleCardDelete(card) {
  //   // Отправляем запрос в API и получаем обновлённые данные без удалённой карточки
  //   api.deleteCard(card).then(() => {
  //     setCards((state) => state.filter((cardDelete) => cardDelete._id != card._id));
  //   });
  // }

  // useEffect(() => {
  //   api
  //     .getInitialCards()
  //     .then((data) => {
  //       setCards(data);
  //     })
  //     .catch((err) => alert(err));
  // }, []);

  return (
    <main className='content page__content'>
      <section className='profile section content__section'>
        <div className='profile__content'>
          <div className='profile__avatar'>
            <img
              className='profile__avatar-icon link'
              src={currentUser.avatar}
              alt='Аватар.'
              onClick={props.onEditAvatar}
            />
          </div>
          <div className='profile__info'>
            <h1 className='profile__name'>{currentUser.name}</h1>
            <p className='profile__job'>{currentUser.about}</p>
          </div>
          <button
            className='profile__edit-button link'
            type='button'
            aria-label='popupEdit'
            onClick={props.onEditProfile}
          ></button>
        </div>
        <button
          className='profile__add-button link'
          type='button'
          aria-label='addCard'
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className='cards section content__section' aria-label='Карточки мест'>
        {props.cards.map((cardInfo) => (
          <Card
            key={cardInfo._id}
            info={cardInfo}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
