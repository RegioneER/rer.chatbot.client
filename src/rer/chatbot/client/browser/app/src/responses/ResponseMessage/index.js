import React, { useState } from "react";
import "./index.css";

const ResponseMessage = ({ data }) => {
  const { answers, fallbackMessage, error } = data;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  if (error) {
    return (
      <div className="rcw-message-text">
        <p>Errore nel contattare il servizio. Riprova più tardi.</p>
      </div>
    );
  }
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
