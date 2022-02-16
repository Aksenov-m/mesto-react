import React from "react";
import "../index.css";
// import avatar from "../images/Profile_Avatar.jpg";
import api from "../../src/utils/api";

// Функциональный компонент Main
function Main(props) {
  const [userName, setUserName] = React.useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = React.useState("Исследователь океана");
  const [userAvatar, setUserAvatar] = React.useState("");

  React.useEffect(() => {
    api
      .getAllData()
      .then(([data, user]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
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
      <section className='cards section content__section' aria-label='Карточки мест'></section>
    </main>
  );
}

export default Main;
