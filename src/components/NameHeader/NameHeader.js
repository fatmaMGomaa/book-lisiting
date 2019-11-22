import React from "react";
import EditButton from "../EditButton/EditButton";

const NameHeader = props => {
  return (
    <h2>
      {props.item.name || props.item.title}
      <EditButton url={props.url} item={props.item} />
    </h2>
  );
};
export default NameHeader;
