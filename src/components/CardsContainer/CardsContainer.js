import React from "react";
import Card from "../Card/Card";

const CardsContainer = props => {
  return (
    <div className="cards__container">
      {props.itemsArray.length ? (
        props.itemsArray.map(item => {
          return <Card url={props.url} item={item} key={item.id} />;
        })
      ) : (
        <h3>no books</h3>
      )}
    </div>
  );
};

export default CardsContainer;
