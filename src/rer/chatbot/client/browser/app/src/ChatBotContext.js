import React from "react";

const ChatBotContext = React.createContext({
  userId: null,
  setUserId: () => {}
});

export default ChatBotContext;
