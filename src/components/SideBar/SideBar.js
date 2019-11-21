import React from "react";
import SideNav from "../SideNav/SideNav.js";
import { DataContext } from "../contexts/DataContext";

class SideBar extends React.Component {
  static contextType = DataContext;

  render() {
    let { authors, categories } = this.context;
    return (
      <React.Fragment>
        <SideNav name="Authors" items={authors} url="/author/" />
        <SideNav name="Categories" items={categories} url="/category/" />
      </React.Fragment>
    );
  }
}

export default SideBar;
