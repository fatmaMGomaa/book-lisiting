import React from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";

const CardsContainer = props => {
  const indexOfLastBook = props.currentPage * props.booksPerPage;
  const indexOfFirstBook = indexOfLastBook - props.booksPerPage;
  const currentBooks = props.itemsArray.slice(
    indexOfFirstBook,
    indexOfLastBook
  );
  if (props.itemsArray.length) {
    return (
      <div className="cards__container">
        {currentBooks.map(item => {
          return <Card url={props.url} item={item} key={item.id} />;
        })}
        <Pagination
          booksArray={props.itemsArray}
          booksPerPage={props.booksPerPage}
          handleClick={props.handleClick}
          currentPage={props.currentPage}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default CardsContainer;
