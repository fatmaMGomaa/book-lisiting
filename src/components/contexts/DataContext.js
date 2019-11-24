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

  addNewItem = (item, type) => {
    if (type === "book") {
      this.setState({
        books: [...this.state.books, item]
      });
    } else if (type === "category") {
      this.setState({
        categories: [...this.state.categories, item]
      });
      console.log(this.state.categories);
    } else if (type === "author") {
      this.setState({
        authors: [...this.state.authors, item]
      });
    }
  };

  editItem = (item, type) => {
    let newItemsArray;
    if (type === "book") {
      const indexOfItem = this.state.books.findIndex(
        book => book.id === item.id
      );
      if (indexOfItem) {
        newItemsArray = this.state.books;
        newItemsArray[indexOfItem] = item;
        this.setState({
          books: newItemsArray
        });
      }
    } else if (type === "category") {
      const indexOfItem = this.state.categories.findIndex(
        category => category.id === item.id
      );
      if (indexOfItem !== -1) {
        newItemsArray = this.state.categories;
        newItemsArray[indexOfItem] = item;
        this.setState({
          categories: newItemsArray
        });
      }
    } else if (type === "author") {
      const indexOfItem = this.state.authors.findIndex(
        author => author.id === item.id
      );
      if (indexOfItem) {
        newItemsArray = this.state.authors;
        newItemsArray[indexOfItem] = item;
        this.setState({
          authors: newItemsArray
        });
      }
    }
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          sortByName: this.sortByName,
          sortByYear: this.sortByYear,
          addNewItem: this.addNewItem,
          editItem: this.editItem
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default DataContextProvider;
