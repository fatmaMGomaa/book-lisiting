import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { EditModeContext } from "../contexts/EditModeContext";
import { saveToLocalStorage } from "../../util/localStorage";

class EditButton extends React.Component {
  static contextType = EditModeContext;
  handleClick = item => {
    saveToLocalStorage("item", item);
    saveToLocalStorage("actionType", "edit");
  };
  render() {
    const { editMode } = this.context;
    return editMode ? (
      <Link
        to={`${this.props.url + this.props.item.id}/edit`}
        className="edit-btn"
        onClick={e => this.handleClick(this.props.item)}
      >
        <FontAwesomeIcon icon={faPencilAlt} size="xs" color="white" />
        Edit
      </Link>
    ) : null;
  }
}

export default EditButton;
