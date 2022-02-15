import React from "react";
// import logo from "./logo.svg";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className='App'>
      <div className='page__container'>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
