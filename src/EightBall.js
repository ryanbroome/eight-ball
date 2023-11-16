import React from "react";
import { useState } from "react";
import "./EightBall.css";

// Displays a circle "8 ball" with default state as below, when clicked returns a random choice from answers array of objects.
const EightBall = ({ answers }) => {
  // Creates random index range (0 - answers.length)
  const randIndex = () => Math.floor(Math.random() * answers.length);

  // Set state of text and color to default start values
  const [text, setText] = useState("Think of a question?");
  const [color, setColor] = useState("black");

  // Function to update text and color state to pass into event trigger
  const update = () => {
    let idx = randIndex();
    setText(answers[idx].msg);
    setColor(answers[idx].color);
  };

  // Render the below on load and whenever state changes due to event trigger
  return (
    <div className="EightBall" style={{ backgroundColor: color }}>
      <h1 className="EightBall-title">{8}</h1>
      <p className="EightBall-text" onClick={update}>
        {text}
      </p>
    </div>
  );
};

export default EightBall;
