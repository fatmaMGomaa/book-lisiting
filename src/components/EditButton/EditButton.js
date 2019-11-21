import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { EditModeContext } from "../contexts/EditModeContext";

const EditButton = props => {
  const { editMode } = React.useContext(EditModeContext);
  return editMode ? (
    <Link to={`${props.url + props.item.id}/edit`} className="edit-btn">
      <FontAwesomeIcon icon={faPencilAlt} size="xs" color="white" />
      Edit
    </Link>
  ) : null;
};
export default EditButton;
