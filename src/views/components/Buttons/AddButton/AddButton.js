import React from "react";
import "./AddButton.css";

const AddButton = (props) => {
  return (
    <button className="AddButton" id="AddButton" onClick={props.click}>
      <i className="fas fa-plus"></i>
    </button>
  );
};

export default AddButton;
