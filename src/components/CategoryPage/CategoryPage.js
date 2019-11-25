import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import { DataContext } from "../contexts/DataContext";
import NameHeader from "../NameHeader/NameHeader";

class CategoryPage extends React.Component {
  static contextType = DataContext;
  state = {
    currentPage: 1,
    booksPerPage: 5
  };

  handleClick = event => {
    this.setState({
      currentPage: +event.target.id
    });
  };
  render() {
    const { books, categories } = this.context;
    const categoryId = this.props.match.params.categoryId;
    const category = categories.find(category => category.id === categoryId);
    const categoryBooks = books.filter(book => book.category === categoryId);

    return (
      <React.Fragment>
        <NameHeader url="/category/" item={category} />
        <CardsContainer
          itemsArray={categoryBooks}
          url="/book/"
          booksPerPage={this.state.booksPerPage}
          handleClick={this.handleClick}
          currentPage={categoryBooks.length < 6 ? 1 : this.state.currentPage}
        />
      </React.Fragment>
    );
  }
}

export default CategoryPage;
