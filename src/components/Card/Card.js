import React from "react";
import { Link } from "react-router-dom";
import EditButton from "../EditButton/EditButton";

import "./Card.css";

const Card = props => {
  return (
    <Link to={`${props.url + props.item.id}`} className="card">
      <div className="card__img__div">
        <img src={props.item.image} alt={props.item.title}></img>
      </div>
      <div className="card__info__div">
        <div className="top">
          <h3>{props.item.title}</h3>
          <EditButton url={props.url} item={props.item} />
        </div>
        <p>{props.item.description.substring(0, 300) + " . . . . ."}</p>
      </div>
    </Link>
  );
};
export default Card;
