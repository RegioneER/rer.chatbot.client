import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';

//jquery is imported only because we need to use it in production mode to load js only when the page is loaded

if (process.env.NODE_ENV === 'production') {
  $(function() {
    const rootElement = document.getElementById('chat-bot');
    if (rootElement) {
      const plonePortalUrl = document
        .querySelector('body')
        .getAttribute('data-portal-url');
      const ploneApiUrl = `${plonePortalUrl}/chatbot-api-settings`;
      ReactDOM.render(<App ploneApiUrl={ploneApiUrl} />, rootElement);
    }
  });
} else {
  ReactDOM.render(
    <App ploneApiUrl={process.env.REACT_APP_PLONE_API_URL} />,
    document.getElementById('chat-bot'),
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
