import React from "react";
import "./SpeechBubble.css";

const SpeechBubble = (props) => {
  return (
    <div className="speech-bubble">
      <p>{props.text}</p>
    </div>
  );
};

export default SpeechBubble;
