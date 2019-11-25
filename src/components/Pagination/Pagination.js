import React from "react";
import "./Pagination.css";

const Pagination = props => {
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(props.booksArray.length / props.booksPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  return (
    <ul className="pagination__ul">
      {pageNumbers.map(num => {
        return (
          <li
            id={num}
            key={num}
            onClick={props.handleClick}
            className={props.currentPage === num ? "active " : ""}
          >
            {num}
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
