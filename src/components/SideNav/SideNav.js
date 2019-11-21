import React from "react";
import "./SideNav.css";
import Nav from "../Nav/Nav.js";

const SideNav = props => {
  return (
    <div className="side-nav">
      <h3 className="side-nav__h3">{props.name}</h3>
      <Nav itemsArray={props.items} url={props.url} />
    </div>
  );
};

export default SideNav;
