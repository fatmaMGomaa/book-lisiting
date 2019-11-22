import React from "react";
import { DataContext } from "../contexts/DataContext";
import Details from "../Details/Details";
import NameHeader from "../NameHeader/NameHeader";

import "./BookPage.css";

const BookPage = props => {
  const { books, authors, categories } = React.useContext(DataContext);
  const bookId = props.match.params.bookId;
  let book = books.find(book => book.id === bookId);
  const bookAuthor = authors.find(author => author.id === book.author);
  const bookCategory = categories.find(
    category => category.id === book.category
  );
  book = {
    ...book,
    bookCategory: bookCategory,
    bookAuthor: bookAuthor
  };
  return (
    <React.Fragment>
      <Details item={book}>
        <div className="clearfix">
          <img src={book.image} alt={book.title} className="details__img" />
          <NameHeader url="/book/" item={book} />
          <ul className="details__ul">
            <li>
              <span>by:</span> {book.bookAuthor.name}
            </li>
            <li>
              <span>Number Of Pages:</span> {book.pagesNumber}
            </li>
            <li>
              <span>publish year:</span> {book.publishYear}
            </li>
            <li>
              <span>ISBN:</span> {book.isbn}
            </li>
            <li>
              <span>classification:</span> {book.bookCategory.name}
            </li>
          </ul>
        </div>

        <p className="details__p">{book.description}</p>
      </Details>
    </React.Fragment>
  );
};
export default BookPage;
