import React, { useState, useEffect } from 'react';
import FetchingMessage from '../FetchingMessage';
import ResponseMessage from '../ResponseMessage';
import { string, func } from 'prop-types';

import './index.scss';

const ResponseMessagesWrapper = ({
  question,
  userId,
  updateUserId,
  serviceUrl,
  serviceToken,
}) => {
  const [data, setData] = useState({
    userId: '',
    answers: [],
    fallbackMessage: '',
    fetching: false,
    error: false,
  });

  useEffect(() => {
    const fetchData = () => {
      setData({ ...data, fetching: true, error: false });
      return Promise.race([
        fetch(serviceUrl, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
          },
          body: JSON.stringify({
            id: userId,
            message: question,
            who: 'WEBAPP',
            token: serviceToken,
          }),
        })
          .catch(error => {
            console.error(error);
            setData({ ...data, error: true, fetching: false });
          })
          .then(result => {
            return result ? result.json() : null;
          })
          .then(json => {
            if (json) {
              setData({ ...json, error: false, fetching: false });
              if (!userId) {
                updateUserId(json.userId);
              }
            } else {
              setData({ ...data, fetching: false, error: true });
            }
          }),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('timeout')), 5000),
        ),
      ]).catch(error => {
        console.error(error);
        setData({ ...data, error: true, fetching: false });
      });
    };
    fetchData();
  }, []);

  return (
    <div className="rcw-response">
      {data.fetching ? <FetchingMessage /> : <ResponseMessage data={data} />}
    </div>
  );
};

ResponseMessagesWrapper.propTypes = {
  question: string,
  userId: string,
  updateUserId: func,
  serviceUrl: string,
  serviceToken: string,
};

export default ResponseMessagesWrapper;
