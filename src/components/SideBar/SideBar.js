import React from "react";
import data from "../../books.json";
import SideNav from "../SideNav/SideNav.js";

const SideBar = props => {
  const { books, authors, categories } = data;
  return (
    <React.Fragment>
      <SideNav name="Authors" items={authors} />
      <SideNav name="Categories" items={categories} />
    </React.Fragment>
  );
};

export default SideBar;
