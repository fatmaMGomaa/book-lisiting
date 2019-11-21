import React from "react";
import CardsContainer from "../CardsContainer/CardsContainer";
import { DataContext } from "../contexts/DataContext";

class Index extends React.Component {
  static contextType = DataContext;

  render() {
    let { books } = this.context;
    return <CardsContainer itemsArray={books} url="/book/" />;
  }
}

export default Index;
