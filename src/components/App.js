import React from "react";
// import logo from "./logo.svg";
import "../index.css";
import Header from "./Header";

function App() {
  return (
    <div className='App'>
      <div className='page__container'>
        <Header />
        <main className='content page__content'>
          <section className='profile section content__section'>
            <div className='profile__content'>
              <div className='profile__avatar'>
                <img className='profile__avatar-icon link' src="<%=require('./images/Profile_Avatar.jpg')%>" alt='Аватар.' />
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
        </main>
        <footer className='footer section page__footer'>
          <p className='footer__copyright'>&copy; 2021 Mesto Russia</p>
        </footer>
        <div className='popup popup_type_edit'>
          <div className='popup__container'>
            <button className='popup__close-button link' type='button' aria-label='closePopup'></button>
            <label className='popup__title'>Редактировать профиль</label>
            <form className='popup__info popup__info_form_profile' name='popupInfo' novalidate>
              <input id='popup__name' name='userName' className='popup__input popup__input_string_name' type='text' value='' placeholder='Имя' required autocomplete='off' minlength='2' maxlength='40' />
              <span className='popup__input-error popup__name-error'></span>
              <input id='popup__job' name='userJob' className='popup__input popup__input_string_job' type='text' value='' placeholder='О себе' required autocomplete='off' minlength='2' maxlength='200' />
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
            <form className='popup__info' name='popupImage' novalidate>
              <input id='popup__image' name='imageName' className='popup__input popup__input_string_title' type='text' value='' placeholder='Название' required autocomplete='off' minlength='2' maxlength='30' />
              <span className='popup__input-error popup__image-error'></span>
              <input id='popup__link' name='imagelink' className='popup__input popup__input_string_link' type='url' value='' placeholder='Ссылка на картинку' required autocomplete='off' />
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
            <form className='popup__info popup__info_form_avatar' name='popupAvatar' novalidate>
              <input id='popup__avatar' name='avatarlink' className='popup__input popup__input_string_avatar-link' type='url' value='' placeholder='Ссылка на картинку' required autocomplete='off' />
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
      </div>
    </div>
  );
}

export default App;
