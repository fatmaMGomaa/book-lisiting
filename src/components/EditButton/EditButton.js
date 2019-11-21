import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const EditButton = props => {
  return (
    <Link to={`${props.url + props.item.id}/edit`} className="edit-btn">
      <FontAwesomeIcon icon={faPencilAlt} size="xs" color="white" />
      Edit
    </Link>
  );
};
export default EditButton;
