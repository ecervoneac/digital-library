import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        Logo
      </Link>
      <ul className="header__nav">
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shelves">Shelfs</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
