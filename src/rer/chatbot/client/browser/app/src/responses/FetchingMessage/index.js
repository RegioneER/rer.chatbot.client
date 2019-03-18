import React from "react";
import { ThreeDots } from "svg-loaders-react";

const FetchingMessage = () => (
  <div className="rcw-message-text fetching">
    <p>
      <ThreeDots width="50" height="10" />
    </p>
  </div>
);

export default FetchingMessage;
