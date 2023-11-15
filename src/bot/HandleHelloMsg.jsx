import React from "react";
import { createChatBotMessage, createClientMessage } from "react-chatbot-kit";

const HandleHelloMsg = (props) => {
  return (
    <div
      style={{
        padding: "7px 10px",
        color: "#376B7E",
        border: "2px solid #376B7E",
        borderRadius: "20px",
        display: "inline-block",
        cursor: "pointer",
      }}
      onClick={() => {
        props.setState((prev) => ({
          ...prev,
          messages: [
            ...prev.messages,
            createClientMessage("Got it!"),
            createChatBotMessage("Pick a slot !", {
              widget: "dates",
            }),
          ],
        }));
      }}
    >
      Got it!
    </div>
  );
};

export default HandleHelloMsg;
