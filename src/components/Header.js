import React from "react";
import "../index.css";

function Header() {
  return (
    <header className='header section page__header'>
      <img className='header__logo' src="<%=require('./images/header-logo.svg')%>" alt='Логотип места России.' />
    </header>
  );
}

export default Header;
