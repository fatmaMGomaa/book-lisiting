import React from "react";
import data from "../../books.json";

export const DataContext = React.createContext();

let { books, authors, categories } = data;

class DataContextProvider extends React.Component {
  state = {
    books,
    authors,
    categories
  };

  render() {
    return (
      <DataContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataContextProvider;
