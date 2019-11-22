import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import { DataContext } from "../contexts/DataContext";
import Details from "../Details/Details";
import NameHeader from "../NameHeader/NameHeader";

const AuthorPage = props => {
  const { books, authors } = React.useContext(DataContext);
  const authorId = props.match.params.authorId;
  const author = authors.find(author => author.id === authorId);
  const authorBooks = books.filter(book => book.author === authorId);
  return (
    <React.Fragment>
      <Details url="/author/" item={author}>
        <NameHeader url="/author/" item={author} />
        <h4>-- {author.jobTitle}</h4>
        <p>{author.bio}</p>
      </Details>
      <CardsContainer itemsArray={authorBooks} url="/book/" />;
    </React.Fragment>
  );
};
export default AuthorPage;
