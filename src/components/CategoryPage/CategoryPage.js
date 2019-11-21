import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import { DataContext } from "../contexts/DataContext";
import EditButton from "../EditButton/EditButton";

class CategoryPage extends React.Component {
  static contextType = DataContext;
  render() {
    const { books, categories } = this.context;
    const categoryId = this.props.match.params.categoryId;
    const category = categories.find(category => category.id === categoryId);
    const categoryBooks = books.filter(book => book.category === categoryId);
    return (
      <React.Fragment>
        <h2>
          {category.name} Category
          <EditButton url={"/category/"} item={category} />
        </h2>
        <CardsContainer itemsArray={categoryBooks} url="/book/" />;
      </React.Fragment>
    );
  }
}

export default CategoryPage;
