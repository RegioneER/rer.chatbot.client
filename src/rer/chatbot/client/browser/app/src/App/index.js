import React, { Component } from 'react';
import { string } from 'prop-types';

import ResponseMessagesWrapper from '../responses/ResponseMessagesWrapper';

import {
  Widget,
  addResponseMessage,
  renderCustomComponent,
} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

import './index.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      subtitle: '',
      senderPlaceHolder: '',
      serviceToken: '',
      serviceUrl: '',
      title: '',
      logoUrl: '',
    };
  }

  componentDidMount() {
    fetch(this.props.ploneApiUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    })
      .then(result => result.json())
      .then(json => {
        if (json.welcomeMessage) {
          addResponseMessage(json.welcomeMessage);
        }
        this.setState({ ...this.state, ...json });
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleNewUserMessage = message => {
    const { serviceToken, serviceUrl } = this.state;
    renderCustomComponent(
      ResponseMessagesWrapper,
      {
        question: message,
        userId: this.state.userId,
        updateUserId: userId => {
          this.setState({ userId });
        },
        serviceToken,
        serviceUrl,
      },
      true,
    );
  };

  render() {
    const { subtitle, senderPlaceHolder, title, logoUrl } = this.state;
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logoUrl}
          titleAvatar={logoUrl}
          subtitle={subtitle}
          senderPlaceHolder={senderPlaceHolder}
          title={title}
          launcherOpenLabel="Apri chatbot"
          launcherCloseLabel="Chiudi chatbot"
        />
      </div>
    );
  }
}

App.propTypes = {
  ploneApiUrl: string.isRequired,
};

export default App;
