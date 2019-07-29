import React, { useState } from 'react';
import './index.scss';

const ResponseMessage = ({ data }) => {
  const { answers, fallbackMessage, error } = data;
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const parseResponseText = text => {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    const html = text
      .replace(urlRegex, function(url) {
        return '<a href="' + url + '">' + url + '</a>';
      })
      .replace('LINK: ', '');
    return { __html: html };
  };

  if (error) {
    return (
      <div className="rcw-message-text">
        <p>
          Ti chiedo scusa, in questo momento non siamo in grado di risponderti:
          riprova più tardi oppure chiama il numero verde{' '}
          <a href="tel:800 6622">800 6622</a> e ti risponderà un operatore
          oppure scrivi a{' '}
          <a href="mailto:urp@regione.emilia-romagna.it">
            urp@regione.emilia-romagna.it
          </a>
        </p>
      </div>
    );
  }
  if (answers.length === 1) {
    return (
      <div className="rcw-message-text">
        <p dangerouslySetInnerHTML={parseResponseText(answers[0].text)} />
      </div>
    );
  }
  let message = '';
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
