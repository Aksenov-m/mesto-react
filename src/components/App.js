import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import api from "../../src/utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  // Стейт, отвечающий за данные текущего пользователя
  const [currentUser, setСurrentUser] = useState({ name: "Жак-Ив Кусто", about: "Исследователь океана", avatar: " " });

  useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setСurrentUser(user);
      })
      .catch((err) => alert(err));
  }, []);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(data) {
    setSelectedCard(data);
  }

  function handleUpdateUser(data) {
    api.setUserInfo(data).then((data) => {
      setСurrentUser(data);
      closeAllPopups();
    });
  }

  return (
    <div className='App'>
      <CurrentUserContext.Provider value={currentUser}>
        <div className='page__container'>
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <PopupWithForm
            name='add'
            title='Новое место'
            buttonText='Создать'
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <input
              id='popup__image'
              name='imageName'
              className='popup__input popup__input_string_title'
              type='text'
              placeholder='Название'
              required
              autoComplete='off'
              minLength='2'
              maxLength='30'
            />
            <span className='popup__input-error popup__image-error'></span>
            <input
              id='popup__link'
              name='imagelink'
              className='popup__input popup__input_string_link'
              type='url'
              placeholder='Ссылка на картинку'
              required
              autoComplete='off'
            />
            <span className='popup__input-error popup__link-error'></span>
          </PopupWithForm>
          <PopupWithForm
            name='avatar'
            title='Обновить аватар'
            buttonText='Создать'
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <input
              id='popup__avatar'
              name='avatarlink'
              className='popup__input popup__input_string_avatar-link'
              type='url'
              placeholder='Ссылка на картинку'
              required
              autoComplete='off'
            />
            <span className='popup__input-error popup__avatar-error'></span>
          </PopupWithForm>
          <ImagePopup onClose={closeAllPopups} cardInfo={selectedCard} />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
