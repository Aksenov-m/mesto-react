import React from "react";
// import logo from "./logo.svg";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

// // 1 попап
// export const popupElementEdit = document.querySelector(".popup_type_edit");
// // 2 попап
// export const popupElementAdd = document.querySelector(".popup_type_add");
// // 3 попап
// export const popupElementAvatar = document.querySelector(".popup_type_avatar");
// // 4 попап
// export const popupElementTrash = document.querySelector(".popup_type_trash");

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

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
  }

  return (
    <div className='App'>
      <div className='page__container'>
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} />
        <Footer />
        <PopupWithForm name='edit' title='Редактировать профиль' buttonText='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input id='popup__name' name='userName' className='popup__input popup__input_string_name' type='text' placeholder='Имя' required autocomplete='off' minlength='2' maxlength='40' />
          <span className='popup__input-error popup__name-error'></span>
          <input id='popup__job' name='userJob' className='popup__input popup__input_string_job' type='text' placeholder='О себе' required autocomplete='off' minlength='2' maxlength='200' />
          <span className='popup__input-error popup__job-error'></span>
        </PopupWithForm>
        <PopupWithForm name='add' title='Новое место' buttonText='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input id='popup__image' name='imageName' className='popup__input popup__input_string_title' type='text' placeholder='Название' required autocomplete='off' minlength='2' maxlength='30' />
          <span className='popup__input-error popup__image-error'></span>
          <input id='popup__link' name='imagelink' className='popup__input popup__input_string_link' type='url' placeholder='Ссылка на картинку' required autocomplete='off' />
          <span className='popup__input-error popup__link-error'></span>
        </PopupWithForm>
        <PopupWithForm name='avatar' title='Обновить аватар' buttonText='Создать' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input id='popup__avatar' name='avatarlink' className='popup__input popup__input_string_avatar-link' type='url' placeholder='Ссылка на картинку' required autocomplete='off' />
          <span className='popup__input-error popup__avatar-error'></span>
        </PopupWithForm>
      </div>
    </div>
  );
}

export default App;
