import React from "react";
import { createSorter } from "../../util/sort";
import data from "../../books.json";

export const DataContext = React.createContext();

let { books, authors, categories } = data;

class DataContextProvider extends React.Component {
  state = {
    books,
    authors,
    categories
  };
  sortByName = () => {
    this.setState({
      books: this.state.books.sort(createSorter("title", "ASC"))
    });
  };

  sortByYear = () => {
    this.setState({
      books: this.state.books.sort(createSorter("publishYear", "ASC"))
    });
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          sortByName: this.sortByName,
          sortByYear: this.sortByYear
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataContextProvider;
