import React from "react";
import { EditModeContext } from "../../contexts/EditModeContext";
import { DataContext } from "../../contexts/DataContext";
import { getLocalStorageItem } from "../../../util/localStorage";
import BaseForm from "../BaseForm/BaseForm";
import "../Form.css";
const uuidv4 = require("uuid/v4");

class CategoryForm extends React.Component {
  static contextType = DataContext;
  state = { newItemName: "" };
  componentDidMount() {
    this.handlGetItemsFromLocalstorage();
  }

  handlGetItemsFromLocalstorage = () => {
    const actionType = getLocalStorageItem("actionType");
    let item = getLocalStorageItem("item") || { name: "" };
    this.setState({
      ...item,
      actionType
    });
  };
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleNewCategory = e => {
    e.preventDefault();
    let newItem = { id: uuidv4(), name: this.state.newItemName };
    this.context.addNewItem(newItem, "category");
    this.props.history.push(`/`);
  };
  handleEditCategory = e => {
    e.preventDefault();
    let editedItem = { id: this.state.id, name: this.state.name };
    this.context.editItem(editedItem, "category");
    localStorage.clear();
    this.props.history.push("/");
  };
  render() {
    return (
      <EditModeContext.Consumer>
        {editModeContext => {
          const { editMode } = editModeContext;
          if (editMode && this.state.actionType === "edit") {
            return (
              <BaseForm
                handleSubmit={this.handleEditCategory}
                title={`edit category: ${this.state.name}`}
                history={this.props.history}
              >
                <label>
                  name
                  <input
                    required
                    type="text"
                    onChange={this.handleInputChange}
                    name="name"
                    value={this.state.name}
                  />
                </label>
              </BaseForm>
            );
          } else {
            return (
              <BaseForm
                handleSubmit={this.handleNewCategory}
                title="add new category"
                history={this.props.history}
              >
                <label>
                  name
                  <input
                    required
                    type="text"
                    onChange={this.handleInputChange}
                    name="newItemName"
                    value={this.state.newItemName}
                  />
                </label>
              </BaseForm>
            );
          }
        }}
      </EditModeContext.Consumer>
    );
  }
}

export default CategoryForm;
