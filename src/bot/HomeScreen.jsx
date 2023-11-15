import React from "react";
import Chatbot from "react-chatbot-kit";
import config from "./config.js";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const HomeScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        background: "#376D7E",
      }}
    >
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default HomeScreen;
