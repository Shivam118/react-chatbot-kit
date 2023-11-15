import React from "react";
import { useDispatch } from "react-redux";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const dispatch = useDispatch();
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleName = (message) => {
    const botMessage = createChatBotMessage("Enter Your Age", {
      widget: "age",
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    dispatch({ type: "SET_NAME", payload: message });
  };
  const errorState = () => {
    setState((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        createChatBotMessage("Sorry! I don't understand. Try again."),
      ],
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleName,
            errorState,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
