import React from 'react';
import './Header.css';
import logo from '../img/logo.svg';


function Header(props) {
  return (
    <header className="Header">
      <img className="Header-logo" src={logo} alt=""/>
      <div className="Header-text">
        <h1 className="Header-title">Промокоды Тимс</h1>
        <small>{props.subtitle}</small>
      </div>
    </header>
  );
}

export default Header;