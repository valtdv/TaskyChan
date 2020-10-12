import React from "react";
import "./SquareCard.css";

const SquareCard = (props) => {
  return (
    <div className="SquareCard">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
};

export default SquareCard;
