import React from "react";
import { Link } from "react-router-dom";
import { EditModeContext } from "../contexts/EditModeContext";

import "./Card.css";

const Card = props => {
  return (
    <Link to={`${props.url + props.item.id}`} className="card">
      <div className="card__img__div">
        <img
          src={props.item.image || props.defaultImge}
          alt={props.item.title}
        ></img>
      </div>
      <div className="card__info__div">
        <h1>{props.item.title}</h1>
        <p>{props.item.description.substring(0, 300) + "..."}</p>
      </div>
    </Link>
  );
};

export default Card;
