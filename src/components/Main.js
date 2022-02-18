import React from "react";
import "../index.css";
import api from "../../src/utils/api";
import Card from "./Card";

// Функциональный компонент Main
function Main(props) {
  const [userName, setUserName] = React.useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = React.useState("Исследователь океана");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getAllData()
      .then(([data, user]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(data);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <main className='content page__content'>
      <section className='profile section content__section'>
        <div className='profile__content'>
          <div className='profile__avatar'>
            <img className='profile__avatar-icon link' src={userAvatar} alt='Аватар.' onClick={props.onEditAvatar} />
          </div>
          <div className='profile__info'>
            <h1 className='profile__name'>{userName}</h1>
            <p className='profile__job'>{userDescription}</p>
          </div>
          <button className='profile__edit-button link' type='button' aria-label='popupEdit' onClick={props.onEditProfile}></button>
        </div>
        <button className='profile__add-button link' type='button' aria-label='addCard' onClick={props.onAddPlace}></button>
      </section>
      <section className='cards section content__section' aria-label='Карточки мест'>
        {cards.map((cardInfo) => {
          return <Card key={cardInfo._id} info={cardInfo} onCardClick={props.onCardClick} />;
        })}
      </section>
    </main>
  );
}

export default Main;
