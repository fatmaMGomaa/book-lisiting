import React from "react";
import { EditModeContext } from "../../contexts/EditModeContext";
import { DataContext } from "../../contexts/DataContext";
import { getLocalStorageItem } from "../../../util/localStorage";
import BaseForm from "../BaseForm/BaseForm";
import "../Form.css";
const uuidv4 = require("uuid/v4");

class BookForm extends React.Component {
  static contextType = DataContext;
  state = {
    newItemTitle: "",
    newItemDescription: "",
    newItemIsbn: "",
    newItemPublishYear: "",
    newItemPagesNumber: "",
    newItemImage: "",
    newItemAuthor: "",
    newItemCategory: ""
  };

  componentDidMount() {
    this.handlGetItemsFromLocalstorage();
  }

  handlGetItemsFromLocalstorage = () => {
    const { authors, categories } = this.context;
    const actionType = getLocalStorageItem("actionType");
    let item = getLocalStorageItem("item") || { name: "" };
    this.setState({
      ...item,
      actionType,
      authors,
      categories
    });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleNewBook = e => {
    e.preventDefault();
    let newItem = {
      id: uuidv4(),
      title: this.state.newItemTitle,
      author: this.state.newItemAuthor,
      description: this.state.newItemDescription,
      isbn: this.state.newItemIsbn,
      publishYear: this.state.newItemPublishYear,
      pagesNumber: this.state.newItemPagesNumber,
      image: this.state.newItemImage,
      category: this.state.newItemCategory
    };
    this.context.addNewItem(newItem, "book");
    this.props.history.push(`/`);
  };

  handleEditAuthor = e => {
    e.preventDefault();
    let editedItem = {
      id: this.state.id,
      title: this.state.title,
      author: this.state.author,
      description: this.state.description,
      isbn: this.state.isbn,
      publishYear: this.state.publishYear,
      pagesNumber: this.state.pagesNumber,
      image: this.state.image,
      category: this.state.category
    };
    this.context.editItem(editedItem, "book");
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
                title={`edit book: ${this.state.title}`}
                history={this.props.history}
              >
                <label>
                  title
                  <input
                    required
                    type="text"
                    onChange={this.handleInputChange}
                    name="title"
                    value={this.state.title}
                  />
                </label>
                <div className="outer">
                  <div className="inner">
                    <label>
                      category
                      <select
                        required
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputChange}
                        name="category"
                        value={this.state.category}
                      >
                        <option />
                        {this.state &&
                          this.state.categories &&
                          this.state.categories.map(category => {
                            return (
                              <option key={category.id} value={category.id}>
                                {category.name}
                              </option>
                            );
                          })}
                      </select>
                    </label>
                  </div>
                  <div className="inner">
                    <label>
                      author
                      <select
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputChange}
                        name="author"
                        value={this.state.author}
                        required
                      >
                        <option />
                        {this.state &&
                          this.state.authors &&
                          this.state.authors.map(author => {
                            return (
                              <option key={author.id} value={author.id}>
                                {author.name}
                              </option>
                            );
                          })}
                      </select>
                    </label>
                  </div>
                </div>
                <label>
                  description
                  <textarea
                    required
                    rows="10"
                    onChange={this.handleInputChange}
                    name="description"
                    value={this.state.description}
                  ></textarea>
                </label>
                <label>
                  ISBN
                  <input
                    required
                    type="text"
                    onChange={this.handleInputChange}
                    name="isbn"
                    value={this.state.isbn}
                  />
                </label>
                <div className="outer">
                  <div className="inner">
                    <label>
                      no of page
                      <input
                        required
                        type="number"
                        onChange={this.handleInputChange}
                        name="pagesNumber"
                        value={this.state.pagesNumber}
                      />
                    </label>
                  </div>
                  <div className="inner">
                    <label>
                      year puplished
                      <input
                        required
                        type="text"
                        onChange={this.handleInputChange}
                        name="publishYear"
                        value={this.state.publishYear}
                      />
                    </label>
                  </div>
                </div>
                <label>
                  image url
                  <input
                    required
                    type="url"
                    onChange={this.handleInputChange}
                    name="image"
                    value={this.state.image}
                  />
                </label>
              </BaseForm>
            );
          } else {
            return (
              <BaseForm
                handleSubmit={this.handleNewBook}
                title="add new book"
                history={this.props.history}
              >
                <label>
                  title
                  <input
                    required
                    type="text"
                    onChange={this.handleInputChange}
                    name="newItemTitle"
                    value={this.state.newItemTitle}
                  />
                </label>
                <div className="outer">
                  <div className="inner">
                    <label>
                      category
                      <select
                        required
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputChange}
                        name="newItemCategory"
                        value={this.state.newItemCategory}
                      >
                        <option />
                        {this.state &&
                          this.state.categories &&
                          this.state.categories.map(category => {
                            return (
                              <option key={category.id} value={category.id}>
                                {category.name}
                              </option>
                            );
                          })}
                      </select>
                    </label>
                  </div>
                  <div className="inner">
                    <label>
                      author
                      <select
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputChange}
                        name="newItemAuthor"
                        value={this.state.newItemAuthor}
                        required
                      >
                        <option />
                        {this.state &&
                          this.state.authors &&
                          this.state.authors.map(author => {
                            return (
                              <option key={author.id} value={author.id}>
                                {author.name}
                              </option>
                            );
                          })}
                      </select>
                    </label>
                  </div>
                </div>
                <label>
                  description
                  <textarea
                    required
                    rows="10"
                    onChange={this.handleInputChange}
                    name="newItemDescription"
                    value={this.state.newItemDescription}
                  ></textarea>
                </label>
                <label>
                  ISBN
                  <input
                    required
                    type="text"
                    onChange={this.handleInputChange}
                    name="newItemIsbn"
                    value={this.state.newItemIsbn}
                  />
                </label>
                <div className="outer">
                  <div className="inner">
                    <label>
                      no of page
                      <input
                        required
                        type="number"
                        onChange={this.handleInputChange}
                        name="newItemPagesNumber"
                        value={this.state.newItemPagesNumber}
                      />
                    </label>
                  </div>
                  <div className="inner">
                    <label>
                      year puplished
                      <input
                        required
                        type="text"
                        onChange={this.handleInputChange}
                        name="newItemPublishYear"
                        value={this.state.newItemPublishYear}
                      />
                    </label>
                  </div>
                </div>
                <label>
                  image url
                  <input
                    required
                    type="url"
                    onChange={this.handleInputChange}
                    name="newItemImage"
                    value={this.state.newItemImage}
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

export default BookForm;
