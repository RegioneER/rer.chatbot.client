import React from "react";
import { ThreeDots } from "svg-loaders-react";

const FetchingMessage = () => (
  <div className="rcw-message-text fetching">
    <p>
      <ThreeDots
        width="50"
        height="10"
        fill="#333"
        accessibilityLabel="Loading"
      />
    </p>
  </div>
);

export default FetchingMessage;
