import React, { useState, useEffect } from "react";
import FetchingMessage from "../FetchingMessage";
import ResponseMessage from "../ResponseMessage";

const ResponseMessagesWrapper = ({ question, userId, updateUserId }) => {
  console.log("userId ricevuto: ", userId);
  const [data, setData] = useState({
    userId: "",
    answers: [],
    fallbackMessage: ""
  });

  useEffect(() => {
    console.log("fetcho");
    const fetchData = () => {
      const url = "https://test-urpbot.regione.emilia-romagna.it/v1/message";
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          Origin: "https://test-urpbot.regione.emilia-romagna.it"
        },
        body: JSON.stringify({
          id: userId,
          message: question,
          who: "WEBAPP",
          token: "yID8gtNoPfs1IsMQ3PNybz9VJ4A5fmXnKNCIzhzG1se4g92umcnfalLWwNBG"
        })
      })
        .then(result => result.json())
        .then(json => {
          setData(json);
          if (!userId) {
            updateUserId(json.userId);
          }
        });
    };
    fetchData();
  }, []);

  return (
    <div className="rcw-response">
      {data.answers.length === 0 ? (
        <FetchingMessage />
      ) : (
        <ResponseMessage data={data} />
      )}
    </div>
  );
};

export default ResponseMessagesWrapper;
