import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name='avatar'
      title='Обновить аватар'
      buttonText='Создать'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id='popup__avatar'
        name='avatarlink'
        className='popup__input popup__input_string_avatar-link'
        type='url'
        placeholder='Ссылка на картинку'
        required
        autoComplete='off'
        ref={avatarRef}
      />
      <span className='popup__input-error popup__avatar-error'></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
