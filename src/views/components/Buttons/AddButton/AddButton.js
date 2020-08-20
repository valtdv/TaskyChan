import React, { Component } from "react";
import "./AddButton.css";

const AddButton = (props) => {
  const prueba = () =>{
    document.body.classList.add("blur");
    //{props.click}
  }
  return (
    <button className="AddButton" onClick={props.click}>
      <i class="fas fa-plus"></i>
    </button>
  );
};

export default AddButton;
