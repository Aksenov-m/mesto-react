import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

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

  return (
    <div className='App'>
      <div className='page__container'>
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name='edit'
          title='Редактировать профиль'
          buttonText='Сохранить'
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id='popup__name'
            name='userName'
            className='popup__input popup__input_string_name'
            type='text'
            placeholder='Имя'
            required
            autoComplete='off'
            minLength='2'
            maxLength='40'
          />
          <span className='popup__input-error popup__name-error'></span>
          <input
            id='popup__job'
            name='userJob'
            className='popup__input popup__input_string_job'
            type='text'
            placeholder='О себе'
            required
            autoComplete='off'
            minLength='2'
            maxLength='200'
          />
          <span className='popup__input-error popup__job-error'></span>
        </PopupWithForm>
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
    </div>
  );
}

export default App;
