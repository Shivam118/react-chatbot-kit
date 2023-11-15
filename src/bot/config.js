import { createChatBotMessage } from "react-chatbot-kit";
import HandleHelloMsg from "./HandleHelloMsg";
import { Age, Dates, Time } from "./Details";

const config = {
  botName: "Student Info System",
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system!`, {
      widget: "welcomeMsgBtn",
    }),
  ],
  widgets: [
    {
      widgetName: "welcomeMsgBtn",
      widgetFunc: (props) => <HandleHelloMsg {...props} />,
    },
    {
      widgetName: "dates",
      widgetFunc: (props) => <Dates {...props} />,
    },
    {
      widgetName: "time",
      widgetFunc: (props) => <Time {...props} />,
    },
    {
      widgetName: "age",
      widgetFunc: (props) => <Age {...props} />,
    },
  ],
  customComponents: {
    // Replaces the default header
    header: () => (
      <div
        style={{
          backgroundColor: "#5ccc9d",
          padding: "10px 15px",
          fontWeight: "bold",
        }}
      >
        Student Info System
      </div>
    ),
    // botAvatar: (props) => <MyAvatar {...props} />,
    // botChatMessage: (props) => <MyCustomChatMessage {...props} />,
    // userAvatar: (props) => <MyCustomAvatar {...props} />,
    // userChatMessage: (props) => <MyCustomUserChatMessage {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
