import React from "react";
import Card from "../Card/Card";

const CardsContainer = props => {
  return (
    <div className="cards__container">
      {props.itemsArray.map(item => {
        return <Card url={props.url} item={item} key={item.id} />;
      })}
    </div>
  );
};

export default CardsContainer;
