import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = props => {
  if (Array.isArray(props.itemsArray) && props.itemsArray.length > 0) {
    return (
      <nav>
        <ul>
          {props.itemsArray.map(item => {
            return (
              <li key={item.id} className="side-nav__li">
                <NavLink
                  to={props.url + item.id}
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
            <Link to="/book/new" className="btn">
              New Book
            </Link>
          </li>
          <li>
            <Link to="/author/new" className="btn">
              New Author
            </Link>
          </li>
          <li>
            <Link to="/category/new" className="btn">
              New Category
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Nav;
