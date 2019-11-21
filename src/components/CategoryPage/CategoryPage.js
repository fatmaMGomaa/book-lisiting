import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import { DataContext } from "../contexts/DataContext";
import { EditModeContext } from "../contexts/EditModeContext";
import EditButton from "../EditButton/EditButton";

class CategoryPage extends React.Component {
  static contextType = DataContext;
  render() {
    const { books, categories } = this.context;
    const categoryId = this.props.match.params.categoryId;
    const category = categories.find(category => category.id === categoryId);
    const categoryBooks = books.filter(book => book.category === categoryId);
    console.log(categoryBooks);
    return (
      <EditModeContext.Consumer>
        {editContxt => {
          const { editMode } = editContxt;
          return (
            <React.Fragment>
              <h2>
                {category.name} Category{" "}
                {editMode ? (
                  <EditButton url={"/category/"} item={category} />
                ) : null}
              </h2>
              <CardsContainer itemsArray={categoryBooks} url="/book/" />;
            </React.Fragment>
          );
        }}
      </EditModeContext.Consumer>
    );
  }
}

export default CategoryPage;
