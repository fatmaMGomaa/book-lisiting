import React from "react";
import { Link } from "react-router-dom";

const Nav = props => {
  if (Array.isArray(props.itemsArray) && props.itemsArray.length > 1) {
    return (
      <nav>
        <ul>
          {props.itemsArray.map(item => {
            return (
              <li key={item.id} className="side-nav__li">
                <Link
                  to={props.url + item.id}
                  id={item.id}
                  className="side-nav__a"
                >
                  {item.name}
                </Link>
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
            <Link to="#" className="btn">
              New Book
            </Link>
          </li>
          <li>
            <Link to="#" className="btn">
              New Author
            </Link>
          </li>
          <li>
            <Link to="#" className="btn">
              New Category
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Nav;
