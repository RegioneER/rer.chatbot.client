import React, { useState } from "react";
import "./index.css";

const ResponseMessage = ({ data }) => {
  const { answers, fallbackMessage } = data;
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  if (answers.length === 1) {
    return (
      <div className="rcw-message-text">
        <p>{answers[0].text}</p>
      </div>
    );
  }
  let message = "";
  if (selectedAnswer === null) {
    message = (
      <React.Fragment>
        {answers.map((answer, index) => {
          return (
            <div key={index}>
              <button
                className="option-button"
                onClick={() => {
                  console.log("cliccato: ", index);
                  setSelectedAnswer(index);
                }}
              >
                {answer.text}
              </button>
            </div>
          );
        })}
        <p>{fallbackMessage}</p>
      </React.Fragment>
    );
  } else {
    message = <p>{answers[selectedAnswer].payload}</p>;
  }

  return <div className="rcw-message-text">{message}</div>;
};
export default ResponseMessage;
