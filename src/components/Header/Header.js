import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <Link to={`/`} className="main-header__h1">
        <h1>Book Listing</h1>
      </Link>
      <div className="main-header__nav">
        <Nav itemsArray="" />
        <button type="button" className="main-header__edit btn">
          Edit Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
