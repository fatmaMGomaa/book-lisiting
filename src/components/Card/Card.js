import React from "react";
import { Link } from "react-router-dom";
import { EditModeContext } from "../contexts/EditModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import "./Card.css";

const Card = props => {
  const { editMode } = React.useContext(EditModeContext);
  return (
    <Link to={`${props.url + props.item.id}`} className="card">
      <div className="card__img__div">
        <img src={props.item.image} alt={props.item.title}></img>
      </div>
      <div className="card__info__div">
        <div className="top">
          <h1>{props.item.title}</h1>
          {editMode ? (
            <Link to={`${props.url + props.item.id}/edit`} className="edit-btn">
              <FontAwesomeIcon icon={faPencilAlt} size="xs" color="white" />
              Edit
            </Link>
          ) : null}
        </div>

        <p>{props.item.description.substring(0, 300) + "..."}</p>
      </div>
    </Link>
  );
};

export default Card;
