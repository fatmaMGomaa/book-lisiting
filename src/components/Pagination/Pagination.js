import React from "react";
import "./Pagination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAngleDoubleLeft
} from "@fortawesome/free-solid-svg-icons";

class Pagination extends React.Component {
  state = { startPage: 0 };
  increasePages = () => {
    if (
      this.props.booksArray.length / this.props.booksPerPage >
      this.state.startPage
    ) {
      this.setState({ startPage: this.state.startPage + 5 });
    }
  };
  decreasePages = () => {
    if (this.state.startPage > 0) {
      this.setState({ startPage: this.state.startPage - 5 });
    }
  };
  render() {
    const pageNumbers = [];
    let lastPage = this.state.startPage + 5;
    for (
      let i = 1;
      i <= Math.ceil(this.props.booksArray.length / this.props.booksPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }

    const currentPages = pageNumbers.slice(this.state.startPage, lastPage);
    return (
      <ul className="pagination__ul">
        {pageNumbers.length > 5 ? (
          <li onClick={this.decreasePages}>
            <FontAwesomeIcon
              icon={faAngleDoubleLeft}
              size="xs"
              color="#999999"
            />
          </li>
        ) : null}
        {currentPages.map(num => {
          return (
            <li
              id={num}
              key={num}
              onClick={this.props.handleClick}
              className={this.props.currentPage === num ? "active " : ""}
            >
              {num}
            </li>
          );
        })}
        {pageNumbers.length > 5 ? (
          <li onClick={this.increasePages}>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              size="xs"
              color="#999999"
            />
          </li>
        ) : null}
      </ul>
    );
  }
}

// const Pagination = props => {
//   const pageNumbers = [];
//   for (
//     let i = 1;
//     i <= Math.ceil(props.booksArray.length / props.booksPerPage);
//     i++
//   ) {
//     pageNumbers.push(i);
//   }
//   let startPage = 0;
//   let lastPage = startPage + 5;
//   const currentPages = pageNumbers.slice(startPage, lastPage);
//   return (
//     <ul className="pagination__ul">
//       {currentPages.map(num => {
//         <li></li>
//         return (
//           <li
//             id={num}
//             key={num}
//             onClick={props.handleClick}
//             className={props.currentPage === num ? "active " : ""}
//           >
//             {num}
//           </li>
//         );
//       })}
//       <li></li>
//     </ul>
//   );
// };

export default Pagination;
