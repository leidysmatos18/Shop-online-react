import React, { useContext, useState } from "react";
import "../styles/Header.scss";
import Menu from "./Menu";
import AppContext from "../context/AppContext";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <img src="./icons/icon_menu.svg" alt="menu" className="menu" />

      <div className="navbar-left">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            user@example.com
          </li>
          <li className="navbar-shopping-cart">
            <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
        {toggle ? <Menu /> : null}
      </div>
    </nav>
  );
};

export default Header;
