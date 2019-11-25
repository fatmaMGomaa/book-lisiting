import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import { DataContext } from "../contexts/DataContext";
import Details from "../Details/Details";
import NameHeader from "../NameHeader/NameHeader";

class AuthorPage extends React.Component {
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
    const { books, authors } = this.context;
    const authorId = this.props.match.params.authorId;
    const author = authors.find(author => author.id === authorId);
    const authorBooks = books.filter(book => book.author === authorId);
    return (
      <React.Fragment>
        <Details>
          <NameHeader url="/author/" item={author} />
          <h4>-- {author.jobTitle}</h4>
          <p>{author.bio}</p>
        </Details>
        <CardsContainer
          itemsArray={authorBooks}
          url="/book/"
          booksPerPage={this.state.booksPerPage}
          handleClick={this.handleClick}
          currentPage={authorBooks.length < 6 ? 1 : this.state.currentPage}
        />
      </React.Fragment>
    );
  }
}

// const AuthorPage = props => {
//   const { books, authors } = React.useContext(DataContext);
//   const authorId = props.match.params.authorId;
//   const author = authors.find(author => author.id === authorId);
//   const authorBooks = books.filter(book => book.author === authorId);
//   return (
//     <React.Fragment>
//       <Details>
//         <NameHeader url="/author/" item={author} />
//         <h4>-- {author.jobTitle}</h4>
//         <p>{author.bio}</p>
//       </Details>
//       <CardsContainer itemsArray={authorBooks} url="/book/" />
//     </React.Fragment>
//   );
// };
export default AuthorPage;
