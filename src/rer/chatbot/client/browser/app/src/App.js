import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ResponseMessagesWrapper from "./responses/ResponseMessagesWrapper";

import {
  Widget,
  addResponseMessage,
  renderCustomComponent
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: null };
  }

  componentDidMount() {
    addResponseMessage("Ciao, come posso aiutarti?");
  }

  handleNewUserMessage = message => {
    renderCustomComponent(
      ResponseMessagesWrapper,
      {
        question: message,
        userId: this.state.userId,
        updateUserId: userId => {
          this.setState({ userId });
        }
      },
      true
    );
  };

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          titleAvatar={logo}
        />
      </div>
    );
  }
}

export default App;
