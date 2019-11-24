import React from "react";
import { Link, NavLink } from "react-router-dom";
import { saveToLocalStorage } from "../../util/localStorage";

class Nav extends React.Component {
  saveActionType = () => {
    saveToLocalStorage("actionType", "add");
  };
  render() {
    if (
      Array.isArray(this.props.itemsArray) &&
      this.props.itemsArray.length > 0
    ) {
      return (
        <nav>
          <ul>
            {this.props.itemsArray.map(item => {
              return (
                <li key={item.id} className="side-nav__li">
                  <NavLink
                    to={this.props.url + item.id}
                    id={item.id}
                    className="side-nav__a"
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      );
    } else {
      return (
        <nav>
          <ul>
            <li>
              <Link
                to="/book/new"
                className="btn"
                onClick={this.saveActionType}
              >
                New Book
              </Link>
            </li>
            <li>
              <Link
                to="/author/new"
                className="btn"
                onClick={this.saveActionType}
              >
                New Author
              </Link>
            </li>
            <li>
              <Link
                to="/category/new"
                className="btn"
                onClick={this.saveActionType}
              >
                New Category
              </Link>
            </li>
          </ul>
        </nav>
      );
    }
  }
}

export default Nav;
