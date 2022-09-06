import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink to='/'>
        <h1 className="header__logo">e-commerce</h1>
      </NavLink>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink to="/login" className={({isActive}) => isActive ? 'active-link' : ''} >
            <i className="fa-solid fa-user"></i>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/purchases"  className={({isActive}) => isActive ? 'active-link' :''}>
              <i className="fa-solid fa-box-archive"></i>
            </NavLink>
          </li>
          <li className="header__item">
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
