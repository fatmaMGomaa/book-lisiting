import React from "react";
import { EditModeContext } from "../../contexts/EditModeContext";
import { DataContext } from "../../contexts/DataContext";
import { getLocalStorageItem } from "../../../util/localStorage";
import BaseForm from "../BaseForm/BaseForm";
import "../Form.css";
const uuidv4 = require("uuid/v4");

class AuthorForm extends React.Component {
  static contextType = DataContext;
  state = { newItemName: "", newItemJobTitle: "", newItemBio: "" };
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
  handleNewAuthor = e => {
    e.preventDefault();
    let newItem = {
      id: uuidv4(),
      name: this.state.newItemName,
      jobTitle: this.state.newItemJobTitle,
      bio: this.state.newItemBio
    };
    this.context.addNewItem(newItem, "author");
    this.props.history.push(`/`);
  };
  handleEditAuthor = e => {
    e.preventDefault();
    let editedItem = {
      id: this.state.id,
      name: this.state.name,
      jobTitle: this.state.jobTitle,
      bio: this.state.bio
    };
    this.context.editItem(editedItem, "author");
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
                handleSubmit={this.handleEditAuthor}
                title={`edit author: ${this.state.name}`}
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
                <label>
                  job title
                  <input
                    required
                    type="text"
                    onChange={this.handleInputChange}
                    name="jobTitle"
                    value={this.state.jobTitle}
                  />
                </label>
                <label>
                  bio
                  <textarea
                    required
                    rows="15"
                    onChange={this.handleInputChange}
                    name="bio"
                    value={this.state.bio}
                  ></textarea>
                </label>
              </BaseForm>
            );
          } else {
            return (
              <BaseForm
                handleSubmit={this.handleNewAuthor}
                title="add new author"
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
                <label>
                  job title
                  <input
                    required
                    type="text"
                    onChange={this.handleInputChange}
                    name="newItemJobTitle"
                    value={this.state.newItemJobTitle}
                  />
                </label>
                <label>
                  bio
                  <textarea
                    required
                    rows="15"
                    onChange={this.handleInputChange}
                    name="newItemBio"
                    value={this.state.newItemBio}
                  ></textarea>
                </label>
              </BaseForm>
            );
          }
        }}
      </EditModeContext.Consumer>
    );
  }
}

export default AuthorForm;
