import React from "react";
import "../index.css";
import avatar from "../images/Profile_Avatar.jpg";

// 1 попап
export const popupElementEdit = document.querySelector(".popup_type_edit");
// 2 попап
export const popupElementAdd = document.querySelector(".popup_type_add");
// 3 попап
export const popupElementAvatar = document.querySelector(".popup_type_avatar");
// 4 попап
export const popupElementTrash = document.querySelector(".popup_type_trash");

function handleEditAvatarClick() {
  popupElementEdit.classList.add("popup_opened");
}

function handleEditProfileClick() {
  popupElementAvatar.classList.add("popup_opened");
}

function handleAddPlaceClick() {
  popupElementAdd.classList.add("popup_opened");
}

function Main() {
  return (
    <main className='content page__content'>
      <section className='profile section content__section'>
        <div className='profile__content'>
          <div className='profile__avatar'>
            <img className='profile__avatar-icon link' src={avatar} alt='Аватар.' onClick={handleEditAvatarClick} />
          </div>
          <div className='profile__info'>
            <h1 className='profile__name'>Жак-Ив Кусто</h1>
            <p className='profile__job'>Исследователь океана</p>
          </div>
          <button className='profile__edit-button link' type='button' aria-label='popupEdit'></button>
        </div>
        <button className='profile__add-button link' type='button' aria-label='addCard'></button>
      </section>
      <section className='cards section content__section' aria-label='Карточки мест'></section>
      <div className='popup popup_type_edit'>
        <div className='popup__container'>
          <button className='popup__close-button link' type='button' aria-label='closePopup'></button>
          <label className='popup__title'>Редактировать профиль</label>
          <form className='popup__info popup__info_form_profile' name='popupInfo'>
            <input id='popup__name' name='userName' className='popup__input popup__input_string_name' type='text' defaultValue='' />
            <span className='popup__input-error popup__name-error'></span>
            <input id='popup__job' name='userJob' className='popup__input popup__input_string_job' type='text' defaultValue='' />
            <span className='popup__input-error popup__job-error'></span>
            <button type='submit' className='popup__button'>
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className='popup popup_type_add'>
        <div className='popup__container'>
          <button className='popup__close-button link' type='button' aria-label='closePopup'></button>
          <label className='popup__title'>Новое место</label>
          <form className='popup__info' name='popupImage'>
            <input id='popup__image' name='imageName' className='popup__input popup__input_string_title' type='text' defaultValue='' />
            <span className='popup__input-error popup__image-error'></span>
            <input id='popup__link' name='imagelink' className='popup__input popup__input_string_link' type='url' defaultValue='' />
            <span className='popup__input-error popup__link-error'></span>
            <button type='submit' className='popup__button popup__button-card'>
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className='popup popup_image_fullscreen'>
        <div className='popup__container popup__container_image'>
          <button className='popup__close-button link' type='button' aria-label='closePopup'></button>
          <img className='popup__image' />
          <h3 className='popup__photo-title'></h3>
        </div>
      </div>
      <div className='popup popup_type_avatar'>
        <div className='popup__container'>
          <button className='popup__close-button link' type='button' aria-label='closePopup'></button>
          <label className='popup__title'>Обновить аватар</label>
          <form className='popup__info popup__info_form_avatar' name='popupAvatar'>
            <input id='popup__avatar' name='avatarlink' className='popup__input popup__input_string_avatar-link' type='url' defaultValue='' />
            <span className='popup__input-error popup__avatar-error'></span>
            <button type='submit' className='popup__button'>
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className='popup popup_type_trash'>
        <div className='popup__container'>
          <button className='popup__close-button link' type='button' aria-label='closePopup'></button>
          <form className='popup__info'>
            <label className='popup__title popup__title_theme_trash'>Вы уверены?</label>
            <button type='submit' className='popup__button popup__button_da'>
              Да
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Main;
