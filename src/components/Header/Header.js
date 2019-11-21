import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import { EditModeContext } from "../contexts/EditModeContext";

import "./Header.css";

class Header extends React.Component {
  static contextType = EditModeContext;

  render() {
    let {
      editMode,
      editModeTheme,
      readModeTheme,
      enableEditMode
    } = this.context;
    let theTheme = editMode ? editModeTheme : readModeTheme;
    return (
      <header
        className="main-header"
        style={{ background: theTheme.headerColor }}
      >
        <Link to={`/`} className="main-header__h1">
          <h1>Book Listing</h1>
        </Link>
        <div className="main-header__nav">
          <Nav itemsArray="" />
          <button
            type="button"
            className="main-header__edit btn"
            onClick={enableEditMode}
            style={{ background: theTheme.buttonColor }}
          >
            {editMode ? "Exit Edit Mode" : "Edit Mode"}
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
