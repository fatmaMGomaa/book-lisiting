import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import { DataContext } from "../contexts/DataContext";

class Index extends React.Component {
  static contextType = DataContext;
  state = {
    searchText: "",
    currentPage: 1,
    booksPerPage: 5
  };
  handleClick = event => {
    this.setState({
      currentPage: +event.target.id
    });
  };
  handleSearchText = e => {
    this.setState({
      searchText: e.target.value
    });
  };
  sortByName = this.context.sortByName;
  sortByYear = this.context.sortByYear;
  render() {
    let { books } = this.context;
    // I didn't make searching by author because the user can find them from the sidebar authors navegation
    let filteredBooks = books.filter(
      book =>
        book["title"]
          .toLowerCase()
          .includes(this.state.searchText.toLowerCase()) ||
        book["isbn"].includes(this.state.searchText)
    );

    return (
      <React.Fragment>
        <div className="user-search">
          <label>
            search:{" "}
            <input
              type="search"
              id="search-text"
              onChange={this.handleSearchText}
            />
          </label>
          <div>
            <button onClick={this.sortByName} className="btn">
              sort by name
            </button>
            <button onClick={this.sortByYear} className="btn">
              sort by year
            </button>
          </div>
        </div>
        <CardsContainer
          itemsArray={filteredBooks}
          url="/book/"
          booksPerPage={this.state.booksPerPage}
          handleClick={this.handleClick}
          currentPage={this.state.currentPage}
        />
      </React.Fragment>
    );
  }
}

export default Index;
