import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import { DataContext } from "../contexts/DataContext";

class Index extends React.Component {
  static contextType = DataContext;
  state = {
    searchText: ""
  };
  handleSearchText = e => {
    this.setState({
      searchText: e.target.value
    });
  };
  render() {
    let { books, sortByName, sortByYear } = this.context;
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
        <div className="user-search top">
          <label>
            search:{" "}
            <input
              type="search"
              id="search-text"
              onChange={this.handleSearchText}
            />
          </label>
          <div>
            <button onClick={sortByName} className="btn">
              sort by name
            </button>
            <button onClick={sortByYear} className="btn">
              sort by year
            </button>
          </div>
        </div>
        <CardsContainer itemsArray={filteredBooks} url="/book/" />
      </React.Fragment>
    );
  }
}

export default Index;
